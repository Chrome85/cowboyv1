const Discord = require("discord.js");

exports.run = function(client, message) {
 
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  const CrewCodeetiketlenenkisi = message.mentions.users.first();

  if (!CrewCodeetiketlenenkisi)
    return message.channel.send(
      "**Birisini etiketlemelisin!**"
    );

  const CrewCodeembed = new Discord.MessageEmbed()

    .setDescription(
      `${CrewCodeetiketlenenkisi}` +
        `**${message.author.username}  Kapak olsun!**`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/779099271441809420/780015298019328000/kapakolsun.gif"
    );

  return message.channel.send(CrewCodeembed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kapak-olsun"],
  permLevel: 0
};

exports.help = {
  name: "kapakolsun",
  description: " kapakolsun Atarsınız işte ",
  usage: "+kapakolsun"
};
