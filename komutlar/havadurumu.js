const Discord = require('discord.js');
const weather = require('weather-js');

module.exports.run = (client, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.send('🚫 **Lokasyon/Bölge Bulunamadı...**')
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const narcosembed = new Discord.MessageEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`${current.observationpoint} Hava Durumu`)
          .setThumbnail(current.imageUrl)
          .setColor(0x00AE86)
          .addField('⏳ Zaman Dilimi: ',`UTC${location.timezone}`, true)
          .addField('🎰 Derece Tipi: ',location.degreetype, true)
          .addField('🌞 Sıcaklık: ',`${current.temperature} Derece`, true)
          .addField('🌅 Hissedilen Sıcaklık: ', `${current.feelslike} Derece`, true)
          .addField('🌈 Rüzgar Oranı: ',current.winddisplay, true)
          .addField('🌁 Nem Oranı: ', `${current.humidity}%`, true)
          message.channel.send({narcosembed});
  })
}
module.exports.conf = {
 enabled: true,
 guildOnly: true,
 aliases: ["hava","havaolayı","hd"],
 permLevel: 0
}
module.exports.help = {
  name:"havadurumu",
 description:"Havadurumunu Atar",
usage:"havadurumu [lokasyon]"
}