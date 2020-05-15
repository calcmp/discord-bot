const crypto = require("crypto");

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

function cryptoRandomNumber(minimum, maximum) {
  var distance = maximum - minimum;

  if (minimum >= maximum) {
    console.log("Minimum number should be less than maximum");
    return false;
  } else if (distance > 281474976710655) {
    console.log(
      "You can not get all possible random numbers if range is greater than 256^6-1"
    );
    return false;
  } else if (maximum > Number.MAX_SAFE_INTEGER) {
    console.log("Maximum number should be safe integer limit");
    return false;
  } else {
    var maxBytes = 6;
    var maxDec = 281474976710656;

    var randbytes = parseInt(crypto.randomBytes(maxBytes).toString("hex"), 16);
    var result = Math.floor(
      (randbytes / maxDec) * (maximum - minimum + 1) + minimum
    );

    if (result > maximum) {
      result = maximum;
    }
    return result;
  }
}

module.exports = { dice };
