const { MessageEmbed } = require("discord.js");
const { LOGCHANNEL } = require('../../config');

module.exports = (client, member) => {

  const LogNewMemberEmbed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor("#35f092") 
    .setDescription(`**Serveur** : ${member.guild.name}\n**Action** : Arrivé sur un serveur\n`)
    .setTimestamp()


}