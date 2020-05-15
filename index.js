const { Client } = require("discord.js");
const { PREFIX, DISCORD_BOT_TOKEN } = require("./config.json");
const { poke } = require("./src/commands/poke.js");

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
    case "poke":
      poke(message, client, args);
    default:
      return;
  }
});

client.login(DISCORD_BOT_TOKEN);
