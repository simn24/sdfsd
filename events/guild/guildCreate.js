module.exports = async (client, guild) => {
  const newGuild = {
   guildID: guild.id,
   guildname: guild.name 
  };

  await client.createGuild(newGuild)

};
