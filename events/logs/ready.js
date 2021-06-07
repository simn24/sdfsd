const { SERVEUR } = require('../../config');

module.exports = (client, settings) => {

console.log(`Je suis près ! Mon préfix : ${settings.prefix}`)
console.log(`Jopère actuellement sur le serveur : ${SERVEUR}`)
client.user.setPresence({ activity: { name: 'twitch.tv/simn24', type: 'WATCHING' }, statu: 'online' })

}
