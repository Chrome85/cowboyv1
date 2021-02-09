const Discord = require('discord.js');

exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('<a:maviyildiz:793539752858877952> Eğlence Komutları')
.setTimestamp()
.addField('<a:maviyildiz:793539752858877952> .ilginçbilgi', 'İlginç bilgi verir')
.addField('<a:maviyildiz:793539752858877952> .kartopu', 'Karopu Atarsın')
.addField('<a:maviyildiz:793539752858877952> .oylama', 'Oylama Yaparsınız')
.addField('<a:maviyildiz:793539752858877952> .espri', 'Espri Yaparsınız')
.addField('<a:maviyildiz:793539752858877952> .adamasmaca', 'Adam Asmaca oynarsınız')
.addField('<a:maviyildiz:793539752858877952> .emojiekle', 'Emoji Ekler')
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
  name: 'eğlence',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};