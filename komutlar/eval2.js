const Discord = require("discord.js");
const bot = new Discord.Client();
const ayarlar = require("../ayarlar.json");
const util = require("util");

module.exports.run = async (client, message, args) => {
  if (![`769241220110352416`].includes(message.author.id)) {
    return message.delete({ timeout: 100 });
  }
  if (!args[0] || args[0].includes("token"))
    return message.channel.send(`**You Must Type a Code!**`).then(a => {
      a.delete({ timeout: 100 });
      message.delete({ timeout: 200 });
    });

  const code = args.join(" ");
  try {
    var evaled = clean(await eval(code));
    if (evaled.match(new RegExp(`${client.token}`, "g")))
      evaled
        .replace("token", "**Bu Botun `TOKENİNE` Bu Komut ile Erişemessin!**")
        .replace(
          client.token,
          "**Bu Botun `TOKENİNE` Bu Komut ile Erişemessin!**"
        )
        .replace(
          process.env.PROJECT_INVITE_TOKEN,
          "**Bu Botun `TOKENİNE` Bu Komut ile Erişemessin!**"
        );
    message.channel.send(
      `${evaled
        .replace(
          client.token,
          "**Bu Botun `TOKENİNE` Bu Komut ile Erişemessin!**"
        )
        .replace(
          process.env.PROJECT_INVITE_TOKEN,
          "**Bu Botun `TOKENİNE` Bu Komut ile Erişemessin!**"
        )}`,
      { code: "js", split: true }
    );
  } catch (err) {
    message.channel.send(err, { code: "js", split: true });
  }

  function clean(text) {
    if (typeof text !== "string")
      text = require("util").inspect(text, { depth: 0 });
    text = text
      .replace(/`/g, "`" + String.fromCharCode(8203))
      .replace(/@/g, "@" + String.fromCharCode(8203));
    return text;
  }
};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
};

module.exports.help = {
  name: "eval"
}; 