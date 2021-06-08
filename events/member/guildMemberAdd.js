const { TeamMember } = require("discord.js");
const user = require("../../models/user");

const newUser = {
  guildID: member.guild.id,
  guildName: member.guild.name,
  userID: member.id,
  username: member.user.tag,
};

await client.createUser(newGuild);
