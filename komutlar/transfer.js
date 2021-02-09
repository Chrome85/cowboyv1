const Discord = require('discord.js');//Fiber <3 LysteX
const db = require('wio.db')
  const ms = require('parse-ms');
exports.run = async(client, message, args) => {
let transfer = args[1]
let giden = message.mentions.users.first();
let bakiye = db.fetch(`para_${message.author.id}`)
var hesapd = db.fetch(`hesapismi_${message.author.id}`)
if(!hesapd) return message.channel.send("İlk önce hesap oluşturmalısın\nHesap oluşturmak için `.hesap-oluştur <isim>`")
if(!giden) return message.channel.send(`Göndereceğin kişiyi etiketle.`)
if(!transfer) return message.channel.send("Bir miktar gir.")
if(isNaN(args[1])) return message.channel.send("Bir sayı girmelisin.")
if(bakiye < transfer) return message.channel.send(`Yeterli paran yok.`)
if(transfer < 0) return message.channel.send("- Geçerli bir değer değil.")
  db.subtract(`para_${message.author.id}`, transfer)
  db.add(`para_${giden.id}`, transfer)
  message.channel.send(`Transfer başarıyla gerçekleştirildi.`)
        
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'transfer', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};//Fiber <3 LysteX








//Fiber <3 LysteX