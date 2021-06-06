const { Client, Collection } = require('discord.js');
const { TOKEN } = require('./config');
const { readdirSync } = require("fs");

const client = new Client();
require("./util/functions")(client);
client.mongoose = require("./util/mongoose");
["commands", "cooldowns"].forEach(x => client[x] = new Collection());
require('discord-buttons')(client)
// =============================================================== \\

const loadCommands = (dir = "./commands/") => {
  readdirSync(dir).forEach(dirs => {
    const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    for (const file of commands) {
      const getFileName = require(`${dir}/${dirs}/${file}`);
      client.commands.set(getFileName.help.name, getFileName);
      console.log(`COMMAND LOG : **${getFileName.help.name}** was enabled`);
    };
  });
};

loadCommands();

// =============================================================== \\

const loadEvents = (dir = "./events/") => {
    readdirSync(dir).forEach(dirs => {
    const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));

    for (const event of events) {
      const evt = require(`${dir}/${dirs}/${event}`);
      const evtName = event.split(".")[0];
      client.on(evtName, evt.bind(null, client));
      console.log(`EVENT LOG : **${evtName}** was enabled`)
    };
  });
};

loadEvents();
client.mongoose.init();
// =============================================================== \\

client.login(process.env.TOKEN);


