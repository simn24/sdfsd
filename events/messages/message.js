const { Collection, MessageEmbed } = require('discord.js');


module.exports = async (client, message) => {
const settings = await client.getGuild(message.guild);
const dbUser = await client.getUser(message.member);
if (message.author.bot) return;

if (!dbUser) await client.createUser({
  guildID: message.member.guild.id,
  guildName: message.member.guild.name,
  userID: message.member.id,
  username: message.member.user.tag,
});

const expCd = Math.floor(Math.random() * 19) + 1;
const expToAdd = Math.floor(Math.random() * 25) + 10;

if (expCd >= 8 && expCd <= 11) message.channel.send(`TEST vous etes entre 8 et 11 ! ${expCd} alors vous recevez ${expToAdd}!`)

// await client.updateExp(client, message.member, expToAdd);



if (!message.content.startsWith(settings.prefix));

  const args = message.content.slice(settings.prefix.length).split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.help.aliases && cmd.help.aliases.includes(commandName));
  if (!command) return;

  if (command.help.permissions && !message.member.hasPermission('BAN_MEMBERS')) return message.reply(`Vous n'avez pas le permission d'utiliser cette commande !`)

  if (command.help.args && !args.length) {
    let noArgsReply = `Argument manquant !`;
    if (command.help.usage) noArgsReply += `\n\n**Utilisation de cette commande :**\n \`${settings.prefix}${command.help.name} ${command.help.usage}\``

    return message.reply(`${noArgsReply}`)
  }

  if (command.help.isUserAdmin) {
    const isUserAdminVerif = message.mentions.members.first();
    if (!isUserAdminVerif) return message.reply(`Personne introuvable`)

    if (message.guild.member(message.mentions.users.first()).hasPermission('BAN_MEMBERS')) message.reply(`Vous ne pouvez pas utiliser cette commande sur cette utilisateur !`)
  }

  if (!client.cooldowns.has(command.help.name)) {
    client.cooldowns.set(command.help.name, new Collection());
  }

  const timeNow = Date.now();
  const tStamps = client.cooldowns.get(command.help.name)
  const cdAmount = (command.help.cooldown || 5) * 1000;

  if (tStamps.has(message.author.id)) {
    const cdExpirationTime = tStamps.get(message.author.id) + cdAmount;

    if (timeNow < cdExpirationTime) {
      timeLeft = (cdExpirationTime - timeNow) / 1000;
      return message.reply(`Veillez patienter ${timeLeft.toFixed(2)} seconde(s) avant de ré-utiliser cette commande !`);
    }
  }

  tStamps.set(message.author.id, timeNow);
  setTimeout(() => tStamps.delete(message.author.id), cdAmount);

  command.run(client, message, args, settings, client.commands, dbUser);
  
}




