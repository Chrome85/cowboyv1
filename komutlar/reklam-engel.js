const db = require("wio.db");
const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
let prefix = ayarlar.prefix

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`Ne Yazık Ki Bu Komutu Kullanmaya Yetkin Yok.`)
      .setColor("RED");

    message.channel.send(embed);
    return;
  }
  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Reklam-Engel Sistemi!")
      .setDescription(
        `Hatalı Kullanım! Örnek: **.reklam-engel aç & kapat**`
      );

    message.channel.send(embed);
    return;
  }
  let kufur = await db.fetch(`kufur_${message.guild.id}`);
  if (args[0] == "aç") {
    if (kufur) {
      const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Reklam-Engel Sistemi!")
        .setDescription("**Görünüşe Göre Reklam-Engel Sistemi Zaten Aktif!**");

      message.channel.send(embed);
      return;
    } else {
      db.set(`kufur_${message.guild.id}`, "Açık");
      const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Reklam-Engel Sistemi!")
        .setDescription("Reklam-Engel Sistemi Başarıyla Açıldı!");

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`kufur_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("Reklam-Engel Sistemi!")
      .setDescription("Reklam-Engel Sistemi Başarıyla Kapandı!");

    message.channel.send(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["reklamengel"],
  permLevel: 2
};

exports.help = {
  name: "reklam-engel"
};
