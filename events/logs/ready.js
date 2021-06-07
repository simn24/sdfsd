const { SERVEUR } = require('../../config');

module.exports = client => {

console.log(`Jopère actuellement sur le serveur : ${SERVEUR}`)
client.user.setPresence({ activity: { name: 'twitch.tv/simn24', type: 'WATCHING' }, statu: 'online' })

}
