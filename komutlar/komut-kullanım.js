const Discord = require("discord.js")
const db = require('wio.db')
module.exports.run= async(client, message, args) => {
const user = message.mentions.users.first() || client.users.cache.get(args[0])
if(!user) return message.channel.send('Bir ID Gir veya Birisini Etiketle!')
const veri = await db.get('komutk_'+user.id)
message.channel.send(user.username+" İsimli Kişi 'Komut İsmini Yaz' İsimli Komutu "+veri+" Kere Kullanmış")
}
module.exports.conf = {
aliases: []
}

module.exports.help = {
name: "komut-kullanım"
}