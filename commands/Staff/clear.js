const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (args[0] == "help") {
    let helpembxd = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("Purge Command", "Usage: `*clear` <amount>");

    message.channel.send(helpembxd);
    return;
  }

  message.delete();

  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.reply("You don't have premssions to do that!");
  if (!args[0])
    return message.channel.send(
      "Please enter a number of messages to clear! `Usage: .clear <amount>`"
    );
  const deleteNum = parseInt(args[0])
  if (isNaN(deleteNum)) return message.reply('that is not a number')
  message.channel.bulkDelete(deleteNum).then(() => {
    message.channel
      .send(`**__Cleared ${args[0]} messages.__**`)
      .then(msg => msg.delete(2000));
  });
};

module.exports.help = {
  name: "clear"
};