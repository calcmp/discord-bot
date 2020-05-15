const { cryptoRandomNumber } = require("../scripts/randNum.js");

const dice = (message, args) => {
  if (args.length != 1 || isNaN(args[0])) {
    return message.channel.send(
      "Enter the amount times to roll the dice with '!roll 4'."
    );
  } else if (args[0] > 6) {
    return message.channel.send("Maximum rolls is 10.");
  } else {
    message.channel.send(`Rolling ${args[0]} dice...`);

    let results = [];
    let msg = [];

    for (let j = 0; j < args[0]; j++) {
      results.push(cryptoRandomNumber(1, 6));
    }

    results.forEach((result) => {
      msg.push(`Rolled ${result}`);
    });
    message.channel.send(msg.join("\n"));

    const total = results.reduce((acc, cur) => acc + cur);
    message.channel.send(`Total = ${total}`);
  }
};

module.exports = { dice };
