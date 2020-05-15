const { Client } = require("discord.js");
const { OWM_API_KEY, DISCORD_BOT_TOKEN, PREFIX } = require("./config.json");
const { poke } = require("./src/commands/poke.js");
const { weather } = require("./src/commands/weather.js");
const { dice } = require("./src/commands/dice.js");
const { coin } = require("./src/commands/coin.js");

const client = new Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (message) => {
  console.log(message.content);

  if (!message.content.startsWith(PREFIX) || message.author.bot) return;

  const args = message.content.slice(PREFIX.length).split(" ");
  const command = args.shift().toLowerCase();

  switch (command) {
    case "ping":
      message.channel.send("Pong.");
      break;
    case "help":
      message.channel.send(
        "!ping, !poke elton, !weather wolverhampton, !roll 4, !flip"
      );
      break;
    case "poke":
      poke(message, client, args);
      break;
    case "weather":
      weather(message, OWM_API_KEY, args);
      break;
    case "roll":
      dice(message, args);
      break;
    case "flip":
      coin(message);
      break;
    default:
      return;
  }
});

client.login(DISCORD_BOT_TOKEN);
