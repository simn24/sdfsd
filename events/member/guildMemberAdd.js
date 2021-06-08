const { TeamMember } = require("discord.js");
const user = require("../../models/user");
module.exports = async (client, member) => {
const newUser = {
  guildID: member.guild.id,
  guildName: member.guild.name,
  userID: member.id,
  username: member.user.tag,
};

await client.createUser(newUser);
}