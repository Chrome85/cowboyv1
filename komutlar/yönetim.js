const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('» Yönetim Komutları')
.setTimestamp()
.addField('<a:maviyildiz:793539752858877952> .ban', 'Ban atarsınız')
.addField('<a:maviyildiz:793539752858877952> .sayaç', 'Sayaç Sistemi')
.addField('<a:maviyildiz:793539752858877952> .rol-ver', 'Kullanıcıya belirtilen rolü verir')
.addField('<a:maviyildiz:793539752858877952> .rol-al', 'Kullanıcıdan belirtilen olü alır')
.addField('<a:maviyildiz:793539752858877952> .modlog', 'Modlog sistemi')
.addField('<a:maviyildiz:793539752858877952> .reklamengel', 'Reklam Engel ayarlar')
.addField('<a:maviyildiz:793539752858877952> .everhereengel', 'Ever Here Engel ayarlar')
.addField('<a:maviyildiz:793539752858877952> .capsengel', 'Capsengel ayarlar')
.addField('<a:maviyildiz:793539752858877952> .kick', 'Kick Atarsınız')
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
  name: 'yönetim',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};