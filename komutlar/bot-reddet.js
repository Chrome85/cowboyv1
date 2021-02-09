const Discord = require('discord.js');
const db = require('wio.db');

///fiber botlist & code
exports.run = function(client, message, args) {
  ///fiber botlist & code
  let yetkili = db.fetch(`byetkili_${message.guild.id}`)
if (!message.member.roles.cache.has(yetkili)) return message.channel.send('Bu Komutu Kullanamazsın')    
  let botisim = args[0]
  let sahip = args[1]
  let sebep = args.slice(2).join(" ");
  let basvuru = db.fetch(`basvuruk_${message.guild.id}`)
    let kanal = db.fetch(`bot-ekle_${message.guild.id}`)
  let log =   db.fetch(`bot-log_${message.guild.id}`)
    if(!log) return message.channel.send("Bu komudu kullanmak için botlist kanallarının sunucuda ayarlı olması gerekiyor. Ayarlamak içn .botlist-ayar")
  if(!basvuru) return message.channel.send("Bu komudu kullanmak için botlist kanallarının sunucuda ayarlı olması gerekiyor. Ayarlamak içn .botlist-ayar")
  if(!kanal) return message.channel.send("Bu komudu kullanmak için botlist kanallarının sunucuda ayarlı olması gerekiyor. Ayarlamak içn .botlist-ayar")
  const red = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`<a:carpi:736642156969852959> <@${sahip}> adlı kişinin <@${botisim}> adlı botu reddedildi.\nSebep : ${sebep}\nReddeden yetkili : ${message.author}`)
    
    if (!botisim) return message.channel.send(`:no_entry: Botun idsini yazmalısın.`).then(msg => msg.delete(10000))
  if (!sebep) return message.channel.send(`:no_entry: Botu neden onaylamadığını yazmalısın.`).then(msg => msg.delete(10000))
    if (!sahip) return message.channel.send(`:no_entry: Bot Sahibi id yazman lazım.`).then(msg => msg.delete(10000))
  message.delete()
        client.channels.cache.get(log).send(red);
        message.channel.send(`<a:carpi:736642156969852959> Botu reddettiniz.`).then(msg => msg.delete(10000))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-reddet', 'reddet'],
  permLevel: 3
};

exports.help = {
  name: 'botreddet', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};