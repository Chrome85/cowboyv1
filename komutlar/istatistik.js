const Discord = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (bot, message, args) => {
  const seksizaman = moment
    .duration(bot.uptime)
    .format(" D [day], H [hour], m [minute], s [second]");
  const istatistikler = new Discord.MessageEmbed()
    .setColor("RED")
    .setFooter("There is bot statistics", bot.user.avatarURL())
    .addField(
      "» **Ram usage**",
      (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + " MB",
      true
    )
    .addField("» **Worktime**", seksizaman)
    .addField(
      "» **Users**",
      bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(),
      true
    )
    .addField("» **Servers**", bot.guilds.cache.size.toLocaleString(), true)
    .addField("» **Discord.JS **", "v" + Discord.version, true)
    .addField("» **Node.JS **", `${process.version}`, true)
    .addField("» **Ping**", bot.ws.ping + " ms", true)
    .addField(
      "» **CPU**",
      `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``
    )
    .addField("» **Bit**", `\`${os.arch()}\``, true)
    .addField('Producer', '<@769241220110352416> | Krom#0516')
        .addField("**Links**", "[İnvite Bot](https://discord.com/oauth2/authorize?client_id=774765565466116126&scope=bot&permissions=805314622)\n[Support Server](https://discord.gg/cUF35cS)\n[Vote Page](https://top.gg/bot/774765565466116126/vote)") 
  return message.channel.send(istatistikler);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["statistics", "YEDEK KOMUT2", "i",'istatistik'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};