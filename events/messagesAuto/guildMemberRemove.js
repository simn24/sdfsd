const { MessageEmbed } = require("discord.js");
const { LOGCHANNEL } = require('../../config');

module.exports = (client, member) => {

  const LogLeaveMemberEmbed = new MessageEmbed()
    .setAuthor(`${member.displayName} (${member.id})`, member.user.displayAvatarURL())
    .setColor("#35f092") 
    .setDescription(`**Serveur** : ${member.guild.name}\n**Action** : quitte sur un serveur\n`)
    .setTimestamp()
      client.channels.cache.get(`${LOGCHANNEL}`).send(LogLeaveMemberEmbed)


}