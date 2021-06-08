const { TeamMember } = require("discord.js");
const user = require("../../models/user");
module.exports = async (client, member) => {

await client.createUser({
  guildID: member.guild.id,
  guildName: member.guild.name,
  userID: member.id,
  username: member.user.tag,
  });
}