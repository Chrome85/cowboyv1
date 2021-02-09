const db = require('wio.db');
const Discord = require('discord.js')

exports.run = (client, message, args, func) => {


  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  
  if(!args[0]) return message.channel.send("Doğru kullanım `.capsengel aç/kapat`")
      if(args[0] === "aç"){
     if(db.has(`caps_${message.guild.id}`)) return message.reply("Zaten açık")
    db.set(`caps_${message.guild.id}`, 'acik')
    message.channel.send(`Capslock engel başarıyla açıldı`)
   }
    if(args[0] === "kapat") {
    if(!db.has(`caps_${message.guild.id}`)) return message.reply("Zaten kapalı")
    db.delete(`caps_${message.guild.id}`)
    message.channel.send('Capslock engel başarıyla kapatıldı.')   }
     
 
  
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};
  
  exports.help = {
    name: 'capsengel',
    description: 'FİBER BOTLİST & CODE',
    usage: 'prefix <prefix>'
};