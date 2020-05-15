const { cryptoRandomNumber } = require("../scripts/randNum.js");

const coin = (message) => {
  message.channel.send(`Flipping coin...`);
  let result = cryptoRandomNumber(1, 2);

  if (result === 1) {
    return message.channel.send("Coin landed on heads.");
  } else {
    return message.channel.send("Coin landed on tails.");
  }
};

module.exports = { coin };
