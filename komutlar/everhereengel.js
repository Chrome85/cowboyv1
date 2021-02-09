const db = require('wio.db');
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  
  if (!args[0]) {
    
  const kinda = new Discord.MessageEmbed() 
  
  .setDescription('Lütfen **aç** Veya **kapat** Yazın. Örnek Kullanım : **.ever-here-engel aç/kapat**')
  .setColor("RED")

  return message.channel.send(kinda)
  }
  
  if (args[0] == 'aç') {
    
  db.set(`hereengel_${message.guild.id}`, 'acik')
    
  const kinda = new Discord.MessageEmbed() 
  
  .setDescription('Ever-Here Engel Başarılı Bir Şekilde Aktif Edildi!')
  .setColor("GREEN")

  return message.channel.send(kinda)
  }

  if (args[0] == 'kapat') {
    
  db.set(`hereengel_${message.guild.id}`, 'kapali')
    
  const kinda = new Discord.MessageEmbed() 
  
  .setDescription('Ever-Here Engel Başarılı Bir Şekilde Deaktif Edildi!')
  .setColor("GREEN")

  return message.channel.send(kinda)
  } 
  
  }

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ever-here-engel','everhere-engel','ever-hereengel'],
  permLevel: 3
};

exports.help = {
  name: 'everhereengel',
  description: 'ever-here engel sistemi',
  usage: 'everhereengel'
};