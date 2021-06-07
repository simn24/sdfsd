const { SERVEUR } = require('../../config');

module.exports = client => {

console.log(`Je suis près ! Mon préfix : ${client.config.PREFIX}`)
console.log(`Jopère actuellement sur le serveur : ${SERVEUR}`)
client.user.setPresence({ activity: { name: 'twitch.tv/simn24', type: 'WATCHING' }, statu: 'online' })

}
