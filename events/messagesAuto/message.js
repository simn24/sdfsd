// Ping text !-------------------- \\
module.exports = (client, message) => {
async
  if (message.content === 'ping') return message.channel.send('Pong !');

 // Salut text !------------------ \\

if (message.content === 'Salut' || message.content === 'Bonjour' && message.author.client) return message.channel.send('yo');

// stop ping pd \\ 
if (message.content === "Qui joue ?" && message.author.client) return message.reply('personne enfent de satan')
if (message.content === "Voc ?" && message.author.client) return message.reply('ok j\'arrive')
if (message.content === "Qui pour apex ?" && message.author.client) return message.reply('T tro nul sorry')
if (message.content === "Salut" && message.author.client) return message.reply('Aurevoir')
if (message.content === "Non" && message.author.client) return message.reply('Oui')
if (message.content === "tg" && message.author.client) return message.reply('reverse')

if (message.content === 's!purge') {
  await message.channel.send("Le bot a bien été arreter bonne jouréne ! ")
    client.destroy();
}
}
