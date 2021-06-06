const { Client, Collection } = require('discord.js');
const { loadCommands, loadEvents } = require("./util/loader");
const { TOKEN } = require('./config');


const client = new Client();
["commands", "cooldowns"].forEach(x => client[x] = new Collection());
require('discord-buttons')(client)

loadEvents(client);
loadCommands(client);

client.login('ODM0NzE5NjA4OTExOTUzOTYw.YIE_Nw.EBuu6S2Sum8CDk2t-p8vHrdAdT8');


