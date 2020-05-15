const poke = (message, client, args) => {
  if (!args.length || !message.mentions.members.first()) {
    return message.channel.send(
      "Type the person who you want to poke using '@'."
    );
  } else {
    const userIdsMentioned = [];
    const usernamesMentioned = [];
    const messageAuthor = message.author.username;

    message.mentions.users.forEach((user) => {
      userIdsMentioned.push(user.id);
      usernamesMentioned.push(user.username);
    });

    userIdsMentioned.forEach(async (user) => {
      let recipient = await client.users.fetch(user);
      recipient.send(`${messageAuthor} has poked you!`);
    });
    usernamesMentioned.forEach((user) =>
      message.channel.send(`${messageAuthor} poked ${user}`)
    );
  }
};

module.exports = { poke };
