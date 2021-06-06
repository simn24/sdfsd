module.exports.run = async (client, message, args) => {
  function clean(text) {
    if (typeof text === "string")
      return text
        .replace(/`/g, "`" + String.fromCharCode(8203))
        .replace(/@/g, "@" + String.fromCharCode(8203));
    return text;
  }

  if (message.author.id !== "786623158568353813") return;
  const code = args.join(" ");
  const evaled = eval(code);
  const cleanCode = await clean(evaled);
  message.channel.send(cleanCode, { code: "js" });
};

module.exports.help = {
  name: "eval", // Défini le nom de la commande
  aliases: ["eval"], // Défini ces alias [Plus tard pour le s!help]
  category: "admin", // Défini sa catégorie [Plus tard pour le s!help]
  description: "renvoie un code javascript tester", // Défini sa description [Plus tard pour le s!help]
  cooldown: 5, // Défini le cooldown de la commande (en secondes)
  usage: "", // Utilisation de la commande {Exemple : si la commandes est s!ban <@pseudo> mettre : <@pseudo>}
  isUserAdmin: false, // Vérifie si l'utilisateur a visé a les permissions
  permissions: true, // Vérifie si l'utilisateur a besoin des permissions pour utiliser la commande
  args: true, // Vérifie si la commande a besoin d'arguments
};
