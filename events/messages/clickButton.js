const { MessageButton } = require('discord-buttons');
const { MessageEmbed } = require("discord.js");

module.exports = async (client, button) => {

  if (button.id === 'acceptID') {
    let memberRole = button.message.guild.roles.cache.find((r) => r.name === "membre");
    await button.clicker.user.roles.add(memberRole.id);

  }

}