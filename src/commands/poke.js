const poke = async (message, client, args) => {
  if (!args.length || !message.mentions.members.first()) {
    return message.channel.send(
      "Type the person who you want to poke using '@'."
    );
  } else {
    const userMentionedId = message.mentions.users.entries().next().value[0];
    const messageAuthor = message.author.username;

    const user = await client.users.fetch(userMentionedId);
    user.send(`${messageAuthor} has poked you!`);

    message.channel.send(`You poked ${args[0]}`);
  }
};

module.exports = { poke };
