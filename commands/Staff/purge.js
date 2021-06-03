const { GuildMember, MessageEmbed } = require('discord.js');

module.exports.run = async (client, message, args) => {

  client.destroy()
}
    
module.exports.help = {
  name: 'purge', // Défini le nom de la commande
  aliases: ['ban' , ''], // Défini ces alias [Plus tard pour le s!help]
  category: 'Staff', // Défini sa catégorie [Plus tard pour le s!help]
  description: 'Ban un user', // Défini sa description [Plus tard pour le s!help]
  cooldown: 0, // Défini le cooldown de la commande (en secondes)
  usage: '<@utilisateur> <raison>', // Utilisation de la commande {Exemple : si la commandes est s!ban <@pseudo> mettre : <@pseudo>}
  isUserAdmin: true, // Vérifie si l'utilisateur visé a les permissions
  permissions: true, // Vérifie si l'utilisateur a besoin des permissions pour utiliser la commande
  args: true // Vérifie si la commande a besoin d'arguments
}
