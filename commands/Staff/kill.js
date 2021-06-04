const Discord = require("discord.js");

module.exports.run = (client, message, args) => {
                        
process.exit();

}
module.exports.help = {
                        name: "kill",
                        aliases: ["kille", "killed"],
                        category: "Staff",
                        description: "kill le bot",
                        cooldown: 5,
                        usage: "",
                        isUserAdmin: false,
                        permissions: true,
                        args: false,
                      }