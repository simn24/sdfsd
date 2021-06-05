const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.users.first());
  let muteRole = message.guild.roles.cache.find((r) => r.name === "muted");

  if(!user.roles.cache.has(muteRole.id)) return message.reply('l\'utilisateur n\'est pas muté! ' );

  await user.roles.remove(muteRole.id);
  message.channel.send(`<@${user.id}> n'est plus muté.`);



  const unmuteLogEmbed = new MessageEmbed()
  .setAuthor(`${user.user.username} (${user.user.id})`, user.user.avatarURL())
  .setColor("#dc143c")
  .setDescription(`**Action** : unmute`)
  .setThumbnail(user.user.avatarURL())
  .setTimestamp()
  .setFooter(message.author.username, message.author.avatarURL());
message.channel.send(unmuteLogEmbed)

};

module.exports.help = {
  name: "unmute",
  aliases: ["unmute"],
  category: "Moderation",
  description: "unMute un utilisateur",
  cooldown: 5,
  usage: "<@​​utilisateur>",
  isUserAdmin: true,
  permissions: true,
  args: true,
};
