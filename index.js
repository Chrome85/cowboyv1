const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const { Client, Util } = require('discord.js');
require('./util/eventLoader.js')(client);
const fs = require('fs');
const  db  = require('wio.db')
const { GiveawaysManager } = require('discord-giveaways');

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => { 
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};



client.on('message', msg => {
  if (msg.content === '.eval') {
    if (!["789164345585565706"].includes(message.author.id))//eval kullanack kişilerin id'lerini girin
                return message.reply("`code` komutunu kullanmak için gerekli izne sahip değilsiniz!").catch();
    let result = eval(args.join(" "))
message.channel.send(result)
  }
});


client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

///////////////////////eklendim atıldım

client.on('guildDelete', guild => {

    let Crewembed = new Discord.MessageEmbed()
    
    .setColor("RED")
    .setTitle(" ATILDIM !")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
    
       client.channels.cache.get('784906432419069962').send(Crewembed);
      
    });
    
    
    client.on('guildCreate', guild => {
    
    let Crewembed = new Discord.MessageEmbed()
    
    .setColor("GREEN")
    .setTitle("EKLENDİM !")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount)
    
       client.channels.cache.get('784906432419069962').send(Crewembed);
      
    });
    //-------------------EKLENDİM ATILDIM SON ---------------//


  //-------------------- Afk Sistemi --------------------//

const ms = require("parse-ms");
const { DiscordAPIError } = require("discord.js");

client.on("message", async message => {
  if (message.author.bot) return;
  if (!message.guild) return;
  if (message.content.includes(`afk`)) return;

  if (await db.fetch(`afk_${message.author.id}`)) {
    db.delete(`afk_${message.author.id}`);
    db.delete(`afk_süre_${message.author.id}`);

    const cowboy = new Discord.MessageEmbed()

      .setColor("RANDOM")
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription(`Afk Modundan Başarıyla Çıkıldı.`);

    message.channel.send(cowboy);
  }

  var USER = message.mentions.users.first();
  if (!USER) return;
  var REASON = await db.fetch(`afk_${USER.id}`);

  if (REASON) {
    let süre = await db.fetch(`afk_süre_${USER.id}`);
    let timeObj = ms(Date.now() - süre);

    const cowboy = new Discord.MessageEmbed()

      .setColor("RANDOM")
      .setDescription(`**Bu Kullanıcı Afk**\n\n**Afk Olan Kullanıcı :** \`${USER.tag}\`\n**Afk Süresi :** \`${timeObj.hours}saat\` \`${timeObj.minutes}dakika\` \`${timeObj.seconds}saniye\`\n**Sebep :** \`${REASON}\``);

    message.channel.send(cowboy);
  }
});

//-------------------- Afk Sistemi Son --------------------//

  //-------------------- Reklam Engel Sistemi --------------------//
///reklam///
client.on("message", async msg => {
    let antoxd = await db.fetch(`antoxd${msg.guild.id}`);
    if (antoxd === "acik") {
      //Lord Creative
      const reklam = ["discord.gg", "https://discordapp.com/invite/"];
      if (reklam.some(word => msg.content.includes(word))) {
        msg.delete();
      }
    }
  });
  
  client.on("message", msg => {
    if (msg.content.toLowerCase() === "Youtube") {
      msg.reply("**__Youtube Link__** : "); //Lord Creative
    }
  });
  
  client.on("message", msg => {
    if (msg.content.toLowerCase() === "youtube") {
      msg.reply("**__Youtube Link__** : ");
    }
  });
  
  client.on("message", msg => {
    if (msg.content.toLowerCase() === "YOUTUBE") {
      msg.reply("**__Youtube Link__** : ");
    }
  });
//----------------------------LİNK ENGEL ----------------------------------------------------||

client.on("message", async  msg => {
  var mayfe = await db.fetch(`reklam_${msg.guild.id}`)
     if (mayfe == 'acik') {
         const birisireklammidedi = [".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", "net", ".rf.gd", ".az", ".party", "discord.gg",];
         if (birisireklammidedi.some(word => msg.content.includes(word))) {
           try {
             if (!msg.member.hasPermission("BAN_MEMBERS")) {
                   msg.delete();
                     return msg.reply('Bu Sunucuda Reklam Engelleme Filtresi Aktiftir. Reklam Yapmana İzin Veremem !').then(msg => msg.delete(3000));
     
 
   msg.delete(3000);                              
 
             }              
           } catch(err) {
             console.log(err);
           }
         }
     }
     else if (mayfe == 'kapali') {
       
     }
     if (!mayfe) return;
   })
   ;
 
 //----------------------------LİNK ENGEL SON----------------------------------------------------||
 client.on("message", async msg => {
  if (msg.content === `<@774765565466116126>`){///BOT İD NİZİ GİRİNİZ
    return msg.channel.send( new Discord.MessageEmbedİ()
     .setTitle("Merhaba Ben Cowboy")
     .setDescription("Prefixim: `.`\n Komutlarıma bakmak için: `.yardım yazabilirsin :)`"))
                            }});
////son

//sayaç
client.on('guildMemberAdd', async member => {
  let sayaç = db.fetch(`onlycode.sayaç_${member.guild.id}`)
  let sayaçk = db.fetch(`onlycode.sayaçk_${member.guild.id}`)
  if(!sayaç) return;
  if(!sayaçk) return;
  if(member.guild.memberCount >= sayaç) {
  
  client.channels.cache.get(sayaçk).send(`Tebrikler! Sunucunuz başarıyla ayarlanmış olan \`${sayaç}\` kişiye ulaştı. Sayaç sistemi sıfırlandı.`)
  db.delete(`onlycode.sayaç_${member.guild.id}`)
  db.delete(`onlycode.sayaçk_${member.guild.id}`)
  } else {
  client.channels.cache.get(sayaçk).send(`╔▬▬▬▬▬▬▬ <a:alevtacc:726390324347404328> ▬▬▬▬▬▬▬▬▬
  ║<a:maviyildiz:793539752858877952> Sunucuya Hoşgeldin **${member}**
  ║<a:maviyildiz:793539752858877952> Otomatik Rolün Verildi
  ║<a:maviyildiz:793539752858877952> Seninle Beraber **${member.guild.memberCount}** Kişiyiz !
  ╚▬▬▬▬▬▬▬<a:alev:795643004228337665> ▬▬▬▬▬▬▬▬▬`)
  
  
  }
  })
  
  client.on('guildMemberRemove', async member => {
  let sayaç = db.fetch(`onlycode.sayaç_${member.guild.id}`)
  let sayaçk = db.fetch(`onlycode.sayaçk_${member.guild.id}`)
  if(!sayaç) return;
  if(!sayaçk) return;
  if(member.guild.memberCount >= sayaç) {
  
  client.channels.get(sayaçk).send(`Tebrikler! Sunucunuz başarıyla ayarlanmış olan \`${sayaç}\` kişiye ulaştı. Sayaç sistemi sıfırlandı.`)
  db.delete(`onlycode.sayaç_${member.guild.id}`)
  db.delete(`onlycode.sayaçk_${member.guild.id}`)
  } else {
     
  client.channels.cache.get(sayaçk).send(`╔▬▬▬▬▬▬▬<a:maviyildiz:793539752858877952> ▬▬▬▬▬▬▬▬▬
  ║<a:maviyildiz:793539752858877952> Sunucudan Ayrıldı **${member}**
  ║<a:maviyildiz:793539752858877952> **${sayaç}** Kişi Olmamıza **${sayaç - member.guild.memberCount}** Kişi Kaldı
  ║<a:maviyildiz:793539752858877952> Toplam **${member.guild.memberCount}** Kişiyiz !
  ╚▬▬▬▬▬▬▬ <a:maviyildiz:793539752858877952> ▬▬▬▬▬▬▬▬▬`)
  }
  
  
  })
  
  client.on("guildMemberAdd", async member => {
    let kanal = await db.fetch(`otorolkanal_${member.guild.id}`);
  
    let rol = await db.fetch(`otorol_${member.guild.id}`);
    if (!kanal) return;
    if (!rol) return;
    client.channels.cache.get(kanal).send(`╔▬▬▬▬▬▬▬ <a:alev:795643004228337665> ▬▬▬▬▬▬▬▬▬
  ║<a:maviyildiz:793539752858877952> Sunucuya Hoşgeldin **${member}**
  ║<a:maviyildiz:793539752858877952> Otomatik Rolün Verildi
  ║<a:maviyildiz:793539752858877952> Seninle Beraber **${member.guild.memberCount}** Kişiyiz !
  ╚▬▬▬▬▬▬▬<a:alev:795643004228337665> ▬▬▬▬▬▬▬▬▬`)
    
    member.roles.add(rol)
  });
//sayaçson
/////////////////////////////// HOŞGELDİN
client.on('guildMemberAdd', async member => {
  let ozelhosgeldin = await db.fetch(`ozelhosgeldin_${member.guild.id}`)
  if (!ozelhosgeldin) return;
  member.send(ozelhosgeldin ? ozelhosgeldin.replace('-sunucu-', `\`${member.guild.name}\``) .replace('-kullanıcı-',`\`${member.user.tag}\``) : ``)
})  

////////////////////////////// GÖRÜŞÜRÜZ
 client.on('guildMemberRemove', async member => {
  let ozelgorusuruz = await db.fetch(`ozelgorusuruz_${member.guild.id}`)
  if (!ozelgorusuruz) return;
  member.send(ozelgorusuruz ? ozelgorusuruz.replace('-sunucu-', `\`${member.guild.name}\``) .replace('-kullanıcı-',`\`${member.user.tag}\``) : ``)
})

client.on("guildMemberAdd", async member => {
  let csdb = require("wio.db");
  let data = db.get("csotorol." + member.guild.id);

  if (data) {
    let rol = member.guild.roles.cache.get(data);
    if (rol) {
      if(!member.user.bot){
      await member.roles.add(rol);
      }
    }
  }
});

//capsengel a.
client.on("message", async message => { 
  var anahtar = db.fetch(`caps_${message.guild.id}`)
  if(anahtar === "acik"){
    if(message.author.bot) return;
    if(message.content.length < 5) return;
    let capsengel = message.content.toUpperCase();
    let beyazliste =
      message.mentions.users.first() ||
      message.mentions.channels.first() ||
      message.mentions.roles.first()
      
   if(message.content == capsengel){
    if(!beyazliste && !message.content.includes("@everyone") && !message.content.includes("@here") && !message.member.hasPermission("BAN_MEMBERS"))
      {
        message.delete().then(message.channel.send("Büyük harf kullanmamalısın.!!!").then(i => i.delete(10000)))
      
      }}
      

    
    
  }
  if(!anahtar) return;
})
//capsengel son


//-------------------- Sa As Sistemi --------------------//

client.on("message", async message => {
  const Bdgo = message.content.toLocaleLowerCase();

  if (
    Bdgo === "selam" ||
    Bdgo === "sa" ||
    Bdgo === "selamün aleyküm" ||
    Bdgo === "selamun aleyküm" ||
    Bdgo === "slm" ||
    Bdgo === "sea"
  ) {
    let e = await db.fetch(`sa-as_${message.guild.id}`);
    if (e === "acik") {
      const embed = new Discord.MessageEmbed()
      
     .setDescription(`Aleyküm Selam, Hoş Geldin ^-^`)
     .setColor("GREEN")
      
    return message.channel.send()
    }
  }
});

//-------------------- Sa As Sistemi --------------------//

//-------------------- Reklam Engel Sistemi --------------------//

client.on("message", async message => {
  let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
  let reklamkick = await db.fetch(`kufur_${message.guild.id}`);
  let kullanici = message.member;
  if (!reklamkick) return;
  if (reklamkick == "Açık") {
    const reklam = [
      "discord.app",
      "discord.gg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".pw",
      ".io",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".gl",
      ".org",
      ".com.tr",
      ".biz",
      ".party",
      ".link",
      ".tc",
      ".tk",
      ".rf.gd",
      ".az",
      ".hub"
    ];
    if (reklam.some(word => message.content.toLowerCase().includes(word))) {
      if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.delete();
        db.add(`reklamuyari_${message.author.id}`, 1); //uyarı puanı ekleme
        if (uyarisayisi === null) {
          let uyari = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setTitle("Reklam-Engel!")
            .setDescription(
              `<@${message.author.id}> Reklam Yapmayı Kes! Bu İlk Uyarın! (1/3)`
            )
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 1) {
          let uyari = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setTitle("Reklam-Engel!")
            .setDescription(
              `<@${message.author.id}> Reklam Yapmayı Kes! Bu İkinci Uyarın! (2/3)`
            )
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 2) {
          message.delete();
          await kullanici.kick({
            reason: `Reklam-Engel Sistemi!`
          });
          let uyari = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setTitle("Reklam-Engel!")
            .setDescription(
              `<@${message.author.id}> Reklam Yaptığı İçin Sunucudan Atıldı! (3/3)`
            )
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp();
          message.channel.send(uyari);
        }
        if (uyarisayisi === 3) {
          message.delete();
          await kullanici.members.ban({
            reason: `Reklam-Engel Sistemi!`
          });
          db.delete(`reklamuyari_${message.author.id}`);
          let uyari = new Discord.MessageEmbed()
            .setColor("BLACK")
            .setTitle("Reklam Kick Sistemi")
            .setDescription(
              `<@${message.author.id}> Atıldıktan Sonra Tekrar Reklam Yaptığı İçin Sunucudan Yasaklandı!`
            )
            .setFooter(client.user.username, client.user.avatarURL())
            .setTimestamp();
          message.channel.send(uyari);
        }
      }
    }
  }
});

//-------------------- Reklam Engel Sistemi --------------------//

//kanalkoruma
client.on('channelDelete', async channel => {
  var logk= await db.fetch(`kanalklog_${channel.guild.id}`)
if(logk){ 
  let kategori = channel.parentID;
  channel.clone(channel.name).then(channels => {
  let newkanal = channel.guild.channels.cache.find("name", channel.name)
  channels.setParent(channel.guild.channels.cache.find(channelss => channelss.id === kategori));
  client.channels.cache.get(logk).send(`${channel.name} adlı kanal silindi yeniden açıp izinlerini ayarladım.`);                     
});
}else return;
});
//kanalkoruma son

//-------------------- Ever Here Engel --------------------//

client.on("message", async msg => {
  let hereengelle = await db.fetch(`hereengel_${msg.guild.id}`);
  if (hereengelle == "acik") {
    const here = ["@here", "@everyone"];
    if (here.some(word => msg.content.toLowerCase().includes(word))) {
      if (!msg.member.hasPermission("ADMINISTRATOR")) {
        msg.delete();
        msg.channel
          .send(`<@${msg.author.id}>`)
          .then(message => message.delete());
        var e = new Discord.MessageEmbed()
          .setColor("BLACK")
          .setDescription(`Bu Sunucuda Everyone ve Here Yasak!`);
        msg.channel.send(e);
      }
    }
  } else if (hereengelle == "kapali") {
  }
});

//-------------------- Ever Here Engel --------------------//
//-------------------- Sa As Sistemi --------------------//

client.on("message", async message => {
  const Bdgo = message.content.toLocaleLowerCase();

  if (
    Bdgo === "selam" ||
    Bdgo === "sa" ||
    Bdgo === "selamün aleyküm" ||
    Bdgo === "selamun aleyküm" ||
    Bdgo === "slm" ||
    Bdgo === "sea"
  ) {
    let e = await db.fetch(`sa-as_${message.guild.id}`);
    if (e === "acik") {
      const embed = new Discord.MessageEmbed()
      
     .setDescription(`Aleyküm Selam, Hoş Geldin ^-^`)
     .setColor("GREEN")
      
    return message.channel.send(embed)
    }
  }
});

//-------------------- Sa As Sistemi --------------------//


//KanalKoruma

client.on("channelDelete", async function(channel) {
  let rol = await db.fetch(`kanalk_${channel.guild.id}`);

if (rol) {
const guild = channel.guild.cache;
let channelp = channel.parentID;

channel.clone().then(z => {
  let kanal = z.guild.channels.find(c => c.name === z.name);
  kanal.setParent(
    kanal.guild.channels.find(channel => channel.id === channelp)
    
  );
});
}
})


client.login(ayarlar.token);

