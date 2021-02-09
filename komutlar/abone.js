const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '.'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField(' Cowboy',`
<a:maviyildiz:793539752858877952> Cowboy Abone Yardım Menüsü  <a:maviyildiz:793539752858877952>

<a:maviyildiz:793539752858877952> **.abonerol** <a:maviyildiz:793539752858877952>
Abone Rolünü ayarlarsınız

<a:maviyildiz:793539752858877952> **.abonelog** <a:maviyildiz:793539752858877952>
Abone Log'u ayarlarsınız

<a:maviyildiz:793539752858877952> **.abone-y-rol** <a:maviyildiz:793539752858877952>
Abone Yetkili Rolü Ayarlarsınız

<a:maviyildiz:793539752858877952> **.abone** <a:maviyildiz:793539752858877952>
Abone rolü verirsiniz
`)
.setImage("https://media.discordapp.net/attachments/769281758977458176/783299061012234260/standard_21.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: `Geliştirici`
};

exports.help = {
  name: 'aboneyardım',
  description: '[Admin Komutu]',
  usage: '!bakım-mod aç'
};