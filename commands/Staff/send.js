module.exports.run = (client, message, args) => {
const { MessageEmbed } = require("discord.js");
const { LOGCHANNEL } = require('../../config')

  const embed = new MessageEmbed()
    .setAuthor("TEST")
    .setColor("#35f092") 
    .setDescription(`test `)
    .setTimestamp()

message.channel.send(embed)
client.channels.cache.get(`${LOGCHANNEL}`).send(embed)
}
   


    module.exports.help = {
      name: 'send', // Défini le nom de la commande
      aliases: ['pings'], // Défini ces alias [Plus tard pour le s!help]
      category: 'Misc', // Défini sa catégorie [Plus tard pour le s!help]
      description: 'Repondre pong quand on envoie ping', // Défini sa description [Plus tard pour le s!help]
      cooldown: 5, // Défini le cooldown de la commande (en secondes)
      usage: '', // Utilisation de la commande {Exemple : si la commandes est s!ban <@pseudo> mettre : <@pseudo>}
      isUserAdmin: false, // Vérifie si l'utilisateur a visé a les permissions
      permissions: true, // Vérifie si l'utilisateur a besoin des permissions pour utiliser la commande
      args: false // Vérifie si la commande a besoin d'arguments
}