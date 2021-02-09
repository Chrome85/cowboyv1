
const Discord = require('discord.js');
exports.run = async (client, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  let csgopng = "https://cdn.discordapp.com/attachments/447829045376319500/516564269584744448/csgo.png"
    var kasadancikanlar = [
        "Glock-18 'Fade' (**Factory New**) \nFiyatı:**298.88$**",
        "M4A4 Poseidon (**Factory New**) \nFiyatı:**216.11$**",
        "AK-47 Fire Serpent (**Factory New**) \nFiyatı:**622.62$**",
        "M4A4 Howl (**Factory New**) \nFiyatı:**1713.9$**",
        "M4A1-S Knight (**Factory New**) \nFiyatı:**272.69$**",
        "M4A1-S Hot Rod (**Factory New**) \nFiyatı:**60.88$**",
        "AWP Medusa (**Factory New**) \nFiyatı:**1582.05$**",
        "AWP Dragon Lore (**Factory New**) \nFiyatı:**1813.93$**",
        "Bayonet 'Slaugther' (**Factory New**) \nFiyatı:**230.6$**",
        "M9 Bayonet 'Slaughter' (**Factory New**) \nFiyatı:**321.3$**",
        "Karambit 'Case Hardened' (**Factory New**) \nFiyatı:**450.54$**",
        "M9 Bayonet 'Marble Fade' (**Factory New**) \nFiyatı:**413.2$**",
        "Bayonet 'Marble Fade' (**Factory New**) \nFiyatı:**288.19$**",
        "M9 Bayonet 'Bright Water' (**Factory New**) \nFiyatı:**150.5$**",
        "Karambit 'Lore' (**Factory New**) \nFiyatı:**1262.28$**",
        "Gut Knife 'Gamma Doppler' (**Factory New**) \nFiyatı:**110.56$**",
        "Gut Knife 'Freehand' (**Factory New**) \nFiyatı:**73.97$**",
        "Glock-18 'Fade' (**Minimal Wear**) \nFiyatı:**295.61$**",
        "M4A4 Poseidon (**Minimal Wear**) \nFiyatı:**198.88$**",
        "M4A4 Poseidon (**Field-Tested**) \nFiyatı:**172.92$**",
        "AK-47 Fire Serpent (**Minimal Wear**) \nFiyatı:**252.21$**",
        "AK-47 Fire Serpent (**Field-Tested**) \nFiyatı:**183.56$**",
        "AK-47 Fire Serpent (**Well-Worn**) \nFiyatı:**170.69$**",
        "AK-47 Fire Serpent (**Battle-Scared**) \nFiyatı:**104.64$**",
        "M4A4 Howl (**Minimal Wear**) \nFiyatı:**1335.36$**",
        "M4A4 Howl (**Field-Tested**) \nFiyatı:**801.08$**",
        "M4A4 Howl (**Well-Worn**) \nFiyatı:**880$**",
        "M4A1-S Knight (**Minimal Wear**) \nFiyatı:**330.01$**",
        "M4A1-S Hot Rod (**Minimal Wear**) \nFiyatı:**77.73$**",
        "AWP Medusa (**Minimal Wear**) \nFiyatı:**798$**",
        "AWP Medusa (**Field-Tested**) \nFiyatı:**677.15$**",
        "AWP Medusa (**Well-Worn**) \nFiyatı:**592.69$**",
        "AWP Medusa (**Battle-Scarred**) \nFiyatı:**580.01$**",
        "AWP Dragon Lore (**Minimal Wear**) \nFiyatı:**1608.97$**",
        "AWP Dragon Lore (**Field-Tested**) \nFiyatı:**1043.44$**",
        "AWP Dragon Lore (**Well-Worn**) \nFiyatı:**1030.83$**",
        "AWP Dragon Lore (**Battle-Scarred**) \nFiyatı:**915.29$**",
        "Bayonet 'Slaughter' (**Minimal Wear**) \nFiyatı:**187.48$**",
        "Bayonet 'Slaughter' (**Field-Tested**) \nFiyatı:**140.1$**",
        "M9 Bayonet 'Slaughter' (**Minimal Wear**) \nFiyatı:**234.07$**", 
        "M9 Bayonet 'Slaughter' (**Field-Tested**) \nFiyatı:**190.26    $**",
        "Karambit 'Case Hardened' (**Minimal Wear**) \nFiyatı:**257.58$**",
        "Karambit 'Case Hardened' (**Field-Tested**) \nFiyatı:**228.7    $**",
        "Karambit 'Case Hardened' (**Well-Worn**) \nFiyatı:**195.68    $**",
        "Karambit 'Case Hardened' (**Battle-Scarred**) \nFiyatı:**182.71$**",
        "M9 Bayonet 'Marble Fade' (**Minimal Wear**) \nFiyatı:**498.15$**",
        "Bayonet 'Marble Fade' (**Minimal Wear**) \nFiyatı:**297.6$**",
        "M9 Bayonet 'Bright Water' (**Minimal Wear**) \nFiyatı: **136.4$**",
        "M9 Bayonet 'Bright Water' (**Field-Tested**) \nFiyatı**115.63    $**",
        "M9 Bayonet 'Bright Water' (**Well-Worn**) \nFiyatı**102.13$**",
        "M9 Bayonet 'Bright Water' (**Battle-Scarred**) \nFiyatı**101.83$**",
        "Karambit 'Lore' (**Minimal Wear**) \nFiyatı:**748.02$**",
        "Karambit 'Lore' (**Field-Tested**) \nFiyatı:**347.65$**",
        "Karambit 'Lore' (**Well-Worn**) \nFiyatı:**348.81$**",
        "Karambit 'Lore' (**Battle-Scarred**) \nFiyatı:**244.97$**",
        "Gut Knife 'Gamma Doppler' (**Minimal Wear**) \nFiyatı:**125$**",
        "Gut Knife 'Freehand' (**Minimal Wear**) \nFiyatı:**68.82$**",
        "Gut Knife 'Freehand' (**Field-Tested**) \nFiyatı:**60.46$**",
        "Gut Knife 'Freehand' (**Well-Worn**) \nFiyatı:**64.84    $**",
        "Gut Knife 'Freehand' (**Battle-Scarred**) \nFiyatı:**52$**",
        "Hiç Bir Şey Çıkmadı \nFiyatı:**0$**",

    ]
    var kasadancikanlar = kasadancikanlar[Math.floor(Math.random(1) * kasadancikanlar.length)]
    const embedCrewCode  = new Discord.MessageEmbed()
    .setImage("https://cdn.wallpapersafari.com/40/16/8rTMh6.jpg")
    .setAuthor(`Kasayı açan ${message.author.tag}`, message.author.avatarURL)
    .setDescription(`${kasadancikanlar}`)
    .addField(`Kasa Fiyatı: 80$`,  
    `Kasadan çıkan bütün ürünler sizde kalmaz sadece eğlence için yapılmış bir komutdur.`)
    .setFooter("© 2020 Captan BOT Tüm Hakları Saklıdır.")//alt ksım
    .setColor("RANDOM")
    .setThumbnail("https://media.discordapp.net/attachments/704352497422041168/727419534440530040/Coop_coin.gif")
    return message.channel.send(embedCrewCode);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k-a'],
  permLevel: 0
};
exports.help = {
  name: 'kasaaç',
  description: 'CS:GO kasa açma simülasyonu',
  usage: '-kasaaç'
};

