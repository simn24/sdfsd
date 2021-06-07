module.exports.run = async (client, message, args, settings) => {
  const getSetting = args[0];
  const newSetting = args.slice(1).join(" ");
  
  
  switch(getSetting) {
    case "prefix": {
      if(newSetting) {
        await client.updateGuild(message.guild, { prefix: newSetting});
        return message.channel.send(`Prefix mis à jour: \`${settings.prefix}\`-> \`${newSetting}\``);
      }
      message.channel.send(`Prefix actuel:\`${settings.prefix}\``)
      break;
      }
    
    case "logChannel": {
      if(newSetting) {
        await client.updateGuild(message.guild, { logChannel: newSetting});
        return message.channel.send(`logChannel mis à jour: \`${settings.logChannel}\`-> \`${newSetting}\``);
      }
      message.channel.send(`logChannel actuel:\`${settings.logChannel}\``)
      break;
    }  
    case "welcomeMessage": {
      if(newSetting) {
        await client.updateGuild(message.guild, { welcomeMessage: newSetting});
        return message.channel.send(`welcomeMessage mis à jour: \`${settings.welcomeMessage}\`-> \`${newSetting}\``);
      }
      message.channel.send(`welcomeMessage actuel:\`${settings.welcomeMessage}\``)
      break;
    }
  } 
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
  args: true, // Vérifie si la commande a besoin d'arguments
};
