const { MessageEmbed, User } = require("discord.js");
module.exports.run = (client, message, args) => {
  
  const UserEmbed = new MessageEmbed() 
  .setColor("#606060")
  .setTitle(`Tu es l'utilisateur ${message.author.tag}`)
  .setAuthor("simn24 | Bot")
  .setFooter("simn24 | Bot, pour vous servir")
  .setTimestamp()
  message.channel.send(UserEmbed);


}
   


    module.exports.help = {
      name: 'user', // Défini le nom de la commande
      aliases: ['users'], // Défini ces alias [Plus tard pour le s!help]
      category: 'Misc', // Défini sa catégorie [Plus tard pour le s!help]
      description: 'Donner ton nom+tag', // Défini sa description [Plus tard pour le s!help]
      cooldown: 5, // Défini le cooldown de la commande (en secondes)
      usage: '', // Utilisation de la commande {Exemple : si la commandes est s!ban <@pseudo> mettre : <@pseudo>}
      isUserAdmin: false, // Vérifie si l'utilisateur a visé a les permissions
      permissions: true, // Vérifie si l'utilisateur a besoin des permissions pour utiliser la commande
      args: false // Vérifie si la commande a besoin d'arguments
}
