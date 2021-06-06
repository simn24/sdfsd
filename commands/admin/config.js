module.exports.run = async (client, message, args, settings) => {
  console.log(`${settings.prefix}`)
};

module.exports.help = {
  name: "config", // Défini le nom de la commande
  aliases: ["config"], // Défini ces alias [Plus tard pour le s!help]
  category: "admin", // Défini sa catégorie [Plus tard pour le s!help]
  description: "Modifier la base de donnés", // Défini sa description [Plus tard pour le s!help]
  cooldown: 5, // Défini le cooldown de la commande (en secondes)
  usage: "<key> <value>", // Utilisation de la commande {Exemple : si la commandes est s!ban <@pseudo> mettre : <@pseudo>}
  isUserAdmin: false, // Vérifie si l'utilisateur a visé a les permissions
  permissions: true, // Vérifie si l'utilisateur a besoin des permissions pour utiliser la commande
  args: false, // Vérifie si la commande a besoin d'arguments
};
