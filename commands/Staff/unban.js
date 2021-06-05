const { GuildMember, MessageEmbed } = require("discord.js");
const { LOGCHANNEL } = require("../../config");
module.exports.run = async (client, message, args) => {
  let user = await client.users.fetch(args[0]);
  if (!user) return message.reply("L'utilisateur n'existe pas!");
  message.guild.members.unban(user)


  const UnbanLogEmbed = new MessageEmbed()
    .setAuthor(`${user.user.username} (${user.user.id})`, user.user.avatarURL)
    .setColor("#dc143c")
    .setDescription(`**Action** : UnBan`)
    .setTimestamp()
    .setFooter(message.author.username, message.author.avatarURL());
  message.channel.send(UnbanLogEmbed);
};

module.exports.help = {
  name: "unban", // Défini le nom de la commande
  aliases: ["unban", ""], // Défini ces alias [Plus tard pour le s!help]
  category: "Moderation", // Défini sa catégorie [Plus tard pour le s!help]
  description: "unBan un user", // Défini sa description [Plus tard pour le s!help]
  cooldown: 0, // Défini le cooldown de la commande (en secondes)
  usage: "<user_id>", // Utilisation de la commande {Exemple : si la commandes est s!ban <@pseudo> mettre : <@pseudo>}
  isUserAdmin: false, // Vérifie si l'utilisateur visé a les permissions
  permissions: true, // Vérifie si l'utilisateur a besoin des permissions pour utiliser la commande
  args: true, // Vérifie si la commande a besoin d'arguments
};
