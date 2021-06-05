const { MessageButton } = require('discord-buttons');
const { MessageEmbed } = require("discord.js");

module.exports = async (client, button) => {

  if (button.id === 'acceptID') {
    let memberRole = button.message.guild.roles.cache.find((r) => r.name === "membre");
    await button.clicker.member.roles.add(memberRole);
    button.reply.send(`${button.clicker.user}, Vous avez accepté le réglement avec succès !`)



 setTimeout(function() {
      button.reply.delete()
    }, 6000)
  }

}