const Discord = require('discord.js');

exports.run = (client, msg, args) => {
  let kartopu = args.slice(0).join(' ');
        if (kartopu.length < 1) {
        return msg.reply('Kime kartopu atmak isterin ya isim yaz yada etiketle!');
            } else {
              msg.channel.send('<=====     ❄️')
              .then(nmsg => nmsg.edit('<=====    ❄️'))
.then(nmsg => nmsg.edit('<====    ❄️'))
              .then(nmsg => nmsg.edit('<====    ❄️'))
.then(nmsg => nmsg.edit('<===   ❄️'))
              .then(nmsg => nmsg.edit('<===   ❄️'))
.then(nmsg => nmsg.edit('<==  ❄️'))
              .then(nmsg => nmsg.edit('<==  ❄️'))
.then(nmsg => nmsg.edit('<= ❄️'))
              .then(nmsg => nmsg.edit('<= ❄️'))
.then(nmsg => nmsg.edit('❄️'))
              .then(nmsg => nmsg.edit('❄️'))
.then(nmsg => nmsg.edit(`${kartopu} artık ⛄ oldu.`));

       
      }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kartopu',
  description: 'kartopu atarsınız',
  usage: 'kartopu @kullanıcı'
}; 