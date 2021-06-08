
const { MessageButton, MessageActionRow } = require('discord-buttons');
module.exports.run = (client, message, args) => {
  if (message.author.id !== "786623158568353813") return message.reply('Cette commande est réservé au fondateur du bot merci de prendre contact avec lui pour y avoir accès ! ')
  const ReglementButton = new MessageButton()
  .setLabel(`Accepter le réglement`)
  .setStyle("green")
  .setID(`acceptID`);
  message.channel.send('cliquer sur le bouton pour obtenir le role membre!', ReglementButton)
  }
  
  module.exports.help = {
    name: 'reglement', // Défini le nom de la commande
    aliases: ['reglements'], // Défini ces alias [Plus tard pour le s!help]
    category: 'Staff', // Défini sa catégorie [Plus tard pour le s!help]
    description: 'Repondre pong quand on envoie ping', // Défini sa description [Plus tard pour le s!help]
    cooldown: 5, // Défini le cooldown de la commande (en secondes)
    usage: '', // Utilisation de la commande {Exemple : si la commandes est s!ban <@pseudo> mettre : <@pseudo>}
    isUserAdmin: false, // Vérifie si l'utilisateur a visé a les permissions
    permissions: true, // Vérifie si l'utilisateur a besoin des permissions pour utiliser la commande
    args: false // Vérifie si la commande a besoin d'arguments
  }