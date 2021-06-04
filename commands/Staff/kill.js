const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
                        
message.channel.send("Le bot a été arreter correctement")
client.destroy();
}
module.exports.help = {
                        name: "kill",
                        aliases: ["kille", "killed"],
                        category: "Staff",
                        description: "kill le bot",
                        cooldown: 5,
                        usage: "",
                        isUserAdmin: true,
                        permissions: true,
                        args: false,
                      }