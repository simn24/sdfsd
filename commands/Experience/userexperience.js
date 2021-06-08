module.exports.run = (client, message, args, settings, dbUser) => {
  message.reply(`Vous avez ${dbUser.experience} EXP!`)
  message.delete()
  }
  
  module.exports.help = {
    name: 'exp', // Défini le nom de la commande
    aliases: ['xp'], // Défini ces alias [Plus tard pour le s!help]
    category: 'experience', // Défini sa catégorie [Plus tard pour le s!help]
    description: 'renvoie l\'expérience de l\'utilisateur', // Défini sa description [Plus tard pour le s!help]
    cooldown: 5, // Défini le cooldown de la commande (en secondes)
    usage: '', // Utilisation de la commande {Exemple : si la commandes est s!ban <@pseudo> mettre : <@pseudo>}
    isUserAdmin: false, // Vérifie si l'utilisateur a visé a les permissions
    permissions: false, // Vérifie si l'utilisateur a besoin des permissions pour utiliser la commande
    args: false // Vérifie si la commande a besoin d'arguments
  }