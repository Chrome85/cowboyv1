const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
  let g1 = message.guild.members.cache.filter(
    m => new Date().getTime() - m.joinedTimestamp < 86400000
  ).size;
  let g7 = message.guild.members.cache.filter(
    m => new Date().getTime() - m.joinedTimestamp < 604800000
  ).size;
  let g15 = message.guild.members.cache.filter(
    m => new Date().getTime() - m.joinedTimestamp < 1296000000
  ).size;
  let g30 = message.guild.members.cache.filter(
    m => new Date().getTime() - m.joinedTimestamp < 2592000000
  ).size;

  let cse = new Discord.MessageEmbed()
    .setTitle(message.guild.name + " Members Statistic")
    .setColor("BLUE")
    .setThumbnail(message.guild.iconURL())
    .addField("Joined 24 Hours", "`" + g1 + "`")
    .addField("Joined 1 Weeks", "`" + g7 + "`")
    .addField("Joined 15 Days", "`" + g15 + "`")
    .addField("Joined 1 Months", "`" + g30 + "`")
    .setFooter("Made By. Code Share")
    .setTimestamp();
  message.channel.send(cse);
};
module.exports.conf = {
  aliases: []
};

module.exports.help = {
  name: "giriş-say"
};