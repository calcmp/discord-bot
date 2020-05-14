require("dotenv").config({ path: ".env" });
const Discord = require("discord.js");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("Ready!");
});

client.on("message", (message) => {
  console.log(message.content);

  if (message.content === "!ping") {
    message.channel.send("Pong.");
  }
});

client.login(process.env.DISCORD_BOT_KEY);
