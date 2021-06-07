const ms = require("ms");
const { MessageEmbed } = require("discord.js");

module.exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.users.first());
  let muteRole = message.guild.roles.cache.find((r) => r.name === "muted");
  let muteTime = args[1] || "60s";

  if (!muteRole) {
    muteRole = await message.guild.roles.create({
      data: {
        name: "muted",
        color: "#000",
        permissions: [],
      },
    });
    message.guild.channels.cache.forEach(async (channel, id) => {
      await channel.updataOverwrite(muteRole, {
        SEND_MESSAGES: false,
        ADD_REACTIONS: false,
        CONNECT: false,
      });
    });
  }
  await user.roles.add(muteRole.id);
  message.channel.send(`<@${user.id}> est muté pour ${ms(ms(muteTime))}.`);

  setTimeout(() => {
    user.roles.remove(muteRole.id);
  }, ms(muteTime));

  const muteLogEmbed = new MessageEmbed()
  .setAuthor(`${user.user.username} (${user.user.id})`, user.user.avatarURL())
  .setColor("#dc143c")
  .setDescription(`**Action** : mute\n**Temps** : ${ms(ms(muteTime))}`)
  .setThumbnail(user.user.avatarURL())
  .setTimestamp()
  .setFooter(message.author.username, message.author.avatarURL());
message.channel.send(muteLogEmbed)
client.channels.cache.get(`${settings.logChannel}`).send(muteLogEmbed)
};

module.exports.help = {
  name: "mute",
  aliases: ["mute"],
  category: "Staff",
  description: "Mute un utilisateur",
  cooldown: 5,
  usage: "<@​​utilisateur> <time>",
  isUserAdmin: true,
  permissions: true,
  args: true,
};
