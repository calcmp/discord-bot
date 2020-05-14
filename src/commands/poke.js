const poke = (message, client, msgEmbed, args) => {
  if (!args.length) {
    return message.channel.send(
      "Type the person who you want to poke using '@'."
    );
  } else {
    const user = message.mentions.users;
    console.log(user);

    console.log(user.entries().next().value[0]);

    let cli = client.users.fetch(user.entries().next().value[0]);
    console.log(cli);

    message.channel.send(`You poked ${args[0]}`);
  }
};

module.exports = { poke };
