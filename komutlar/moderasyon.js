const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Cowboy bot Moderasyon Komutları')
.setTimestamp()
.addField('<a:maviyildiz:793539752858877952> .ban', 'Ban atarsınız')
.addField('<a:maviyildiz:793539752858877952> .byetkilirol', 'Ban yetkilirol ayarlar')
.addField('<a:maviyildiz:793539752858877952> .banlog', 'Banlog ayarlar')
.addField('<a:maviyildiz:793539752858877952> .rol-ver', 'Kullanıcıya belirtilen rolü verir')
.addField('<a:maviyildiz:793539752858877952> .reklamengel', 'Reklam Engel ayarlar')
.addField('<a:maviyildiz:793539752858877952> .everhereengel', 'Ever Here Engel ayarlar')
.addField('<a:maviyildiz:793539752858877952> .capsengel', 'Capsengel ayarlar')
.addField('<a:maviyildiz:793539752858877952> .kick', 'Kick Atarsınız')
.addField('<a:maviyildiz:793539752858877952> .afk', 'Afk Sistemi')
.addField('<a:maviyildiz:793539752858877952> .userinfo', 'Kullanıcı Bilgi')
.addField('<a:maviyildiz:793539752858877952> .kicklog', 'Kick Logunu Ayarlarsınız')
.setImage("https://media.discordapp.net/attachments/769281758977458176/783299061012234260/standard_21.gif")
.setFooter('Cowboy', client.user.avatarURL())
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'moderasyon',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};