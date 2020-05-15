const poke = (message, client, args) => {
  const messageAuthor = message.author.username;
  const userIdsMentioned = [];
  const usernamesMentioned = [];

  if (!args.length || message.content.includes("@")) {
    return message.author.send(
      "Type the person who you want to poke without '@'. You can poke multiple people like this '!poke jackie elton 50cent'."
    );
  } else {
    client.users.cache.forEach((user) => {
      args.forEach((arg) => {
        if (arg === user.username.toLowerCase()) {
          userIdsMentioned.push(user.id);
          usernamesMentioned.push(user.username);
        }
      });
    });

    userIdsMentioned.forEach(async (user) => {
      let recipient = await client.users.fetch(user);
      recipient.send(`${messageAuthor} has poked you!`);
    });
    usernamesMentioned.forEach((user) => {
      message.author.send(`You poked ${user}!`);
    });
  }
};

module.exports = { poke };
