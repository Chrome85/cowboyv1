const Discord = require('discord.js');

exports.run = (client, message, args) => {
 if(!message.member.hasPermission("MANAGE_EMOJIS")) return message.channel.send("⛔ Bu komutu kullanabilmek için `Emojileri yönet` yetkisine sahip olmalısınız")
    let link = args[0]
    let isim = args[1];
    let guild = message.guild;
    if (!link) return message.channel.send('Emojinin alınacağı linki girmelisin.')
    if (!isim) return message.channel.send('Emojinin ismini belirlemedin')

    guild.emojis.create(`${link}`, `${isim}`)
        .then(emoji => 
         message.channel.send(`${isim} ismiyle yeni bir emoji oluşturuldu`))
         message.react('✅')
        .catch(console.error);

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['addemoji', 'emojioluştur'],
    permLevel: 0
}
exports.help = {
    name: 'emojiekle',
    description: 'Sunucuya emoji eklersiniz',
    usage: 'emojiekle <link> <isim>',
}