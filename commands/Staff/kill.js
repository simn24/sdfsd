const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
  await message.channel.send('Arret du bot ! ')
  client.destroy();

};

module.exports.help = {
  name: "kill",
  aliases: ["kill"],
  category: "Staff",
  description: "kill le bot",
  cooldown: 5,
  usage: "",
  isUserAdmin: false,
  permissions: true,
  args: false,
};
