const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args) => {
  let user = message.guild.member(message.mentions.users.first());

  if (isNaN(args[1]) || args[1] < 1 || args[1] > 100)
    return message.reply("Il faut spécifier un nombre entre 1 et 100!");

  const messages = (
    await message.channel.messages.fetch({
      limit: 100,
      before: message.id,
    })
  )
    .filter((a) => a.author.id === user.id)
    .array();

  messages.lenght = Math.min(args[1], messages.lenght);

  if (message.lenght === 0 || !user)
    return message.reply("acun message à supprimer sur cet utilisateur.");

  if (message.lenght === 1) await messages[0].delete();
  else await message.channel.bulkDelete(messages);
  message.delete();

  const PruneEmbed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor("#dc143c")
    .setDescription(
      `**Action** : prune\n**Nombre message** : ${args[1]}\n**Utilisateur**: ${args[0]}`
    );
  message.channel.send(PruneEmbed);
};

module.exports.help = {
  name: "prune", // Défini le nom de la commande
  aliases: ["prune"], // Défini ces alias [Plus tard pour le s!help]
  category: "Moderation", // Défini sa catégorie [Plus tard pour le s!help]
  description: "Supprime les message d'un utilisateur spécifié", // Défini sa description [Plus tard pour le s!help]
  cooldown: 0, // Défini le cooldown de la commande (en secondes)
  usage: "<@user> ,<nbr_messages>", // Utilisation de la commande {Exemple : si la commandes est s!ban <@pseudo> mettre : <@pseudo>}
  isUserAdmin: false, // Vérifie si l'utilisateur visé a les permissions
  permissions: true, // Vérifie si l'utilisateur a besoin des permissions pour utiliser la commande
  args: true, // Vérifie si la commande a besoin d'arguments
};
