const { MessageEmbed } = require("discord.js");
module.exports.run = async (client, message, args) => {
  if (isNaN(args[0]) || (args[0] < 1 || args[0] > 100)) return message.reply('Il faut spécifier un nombre entre 1 et 100!')

  const messages = await message.channel.messages.fetch({
    limit: Math.min(args[0], 100),
    before: message.id,
  });
  message.delete();
  await message.channel.bulkDelete(messages);

  const PurgeEmbed = new MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor("#dc143c")
    .setDescription(
      `**Action** : Clear\n**Nombre message** : ${args[0]}\n**Salon**: ${message.channel}`
    );
  message.channel.send(PurgeEmbed);
  client.channels.cache.get(`${LOGCHANNEL}`).send(PurgeEmbed)
};

module.exports.help = {
  name: "clear", // Défini le nom de la commande
  aliases: ["clear"], // Défini ces alias [Plus tard pour le s!help]
  category: "Staff", // Défini sa catégorie [Plus tard pour le s!help]
  description: "supprime un certain nombre de message", // Défini sa description [Plus tard pour le s!help]
  cooldown: 0, // Défini le cooldown de la commande (en secondes)
  usage: "<nbr_messages>", // Utilisation de la commande {Exemple : si la commandes est s!ban <@pseudo> mettre : <@pseudo>}
  isUserAdmin: false, // Vérifie si l'utilisateur visé a les permissions
  permissions: true, // Vérifie si l'utilisateur a besoin des permissions pour utiliser la commande
  args: true, // Vérifie si la commande a besoin d'arguments
};
