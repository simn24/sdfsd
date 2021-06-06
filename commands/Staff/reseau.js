
const { MessageButton, MessageActionRow } = require('discord-buttons');
const { MessageEmbed } = require("discord.js");
module.exports.run = (client, message, args) => {

  const embed = new MessageEmbed()
    .setAuthor("Mes réseaux sociaux ")
    .setColor("#35f092") 
    .setDescription(`Cliquer sur les boutons si dessous pour s'y rendre!`)
    .setFooter('Simn Bot | la pour vous servir!')
    .setTimestamp()

  const YoutubeMessage = new MessageButton()
  .setLabel(`Youtube`)
  .setStyle("url")
  .setURL(`https://www.youtube.com/channel/UCAqU2PqCOvXHkzOvYvSYWzA`);
  message.channel.send(embed,YoutubeMessage)
}

  module.exports.help = {
    name: 'reseau', // Défini le nom de la commande
    aliases: ['reseaus'], // Défini ces alias [Plus tard pour le s!help]
    category: 'Staff', // Défini sa catégorie [Plus tard pour le s!help]
    description: 'Repondre pong quand on envoie ping', // Défini sa description [Plus tard pour le s!help]
    cooldown: 5, // Défini le cooldown de la commande (en secondes)
    usage: '', // Utilisation de la commande {Exemple : si la commandes est s!ban <@pseudo> mettre : <@pseudo>}
    isUserAdmin: false, // Vérifie si l'utilisateur a visé a les permissions
    permissions: true, // Vérifie si l'utilisateur a besoin des permissions pour utiliser la commande
    args: false // Vérifie si la commande a besoin d'arguments
  }