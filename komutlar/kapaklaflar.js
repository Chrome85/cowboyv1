const Discord = require('discord.js');  

exports.run = async (client, msg, args) => {
  
  let kapak=[
"Aslında ben seni olduğun gibi kabul ederdim de; sen olmamışsın sıkıntı orada",
"Eskiden altını çizdiklerimin şimdi ise üstünü çiziyorum.",
"Küfür etmeyi bende sevmiyorum ama şerefsizlik yapana teşekkür edemem.",
"Tabağına yiyebileceğin kadar yemek, hayatına sevebileceğin kadar insan al. İsrafın lüzumu yok.",
"Matematikte kötüsün ama çıkarlarını hesaplamada çok iyisin.",
"Sokak lambası gibi olma ey yar kime yandığın belli olsun.",
"İyileştirir diye medet umduklarımız tekrar tekrar yaralıyor bizi.",
"Şerefin kadar konuş desem ömür boyu susacak insanlar tanıyorum.",
"Belki tavırların beni en ağır küfürlere tahrik eder ama benim yüzümdeki o iplemez gülüş senin gelmişini geçmişini tatmin eder.",
"Sen hayata at gözlükleriyle bakmaya devam edersen, birilerinin çüş demesi zoruna gitmesin.",
"Şu saatten sonra sende Fırtına kopsa; bende yaprak oynamaz.",
"Bir zamanlar toz konduramadıklarım, şimdi kirden görünmez olmuş.",
      "Aslında ben seni olduğun gibi kabul ederdim de; sen olmamışsın sıkıntı orada…",
      "Yalanım yok ki benim, aklımdasın hala. Ne yapayım güzelim gereksiz şeyleri kafa hep takıyorum.",
      "A101'de satılan 25 kuruşluk çikolatanın tadını bile veremeyen insanlar var. Öyle gereksizler... ",
      "Bazı insanların da aynı televizyon gibi tepesine vurulduğunda düzelmesi en büyük temennimdir.",
      "Kimine göre kral, kimine göre yalanım... Unutmayın beyler adamına göre adamım... ",
      "Bazı kişiler dümen çevirmek olunca kaptan olmak için sıraya giriyor.",
      "Içinden geldiği için bizimle olanları, işinden geldiği için bizimle olanlara değiştik. Yanlış ettik.",
      "Canımı yakacak kadar güçlü olanın sonuçlarına katlanacak kadar gücü olmalı.",
      "Eğer ben güneş isem sen aysın. Benim doğduğum yerde sen batarsın.",
      "Bana laf cambazlığı yapma kızım, bir laf sokarım kürtajla bile aldıramazsın.",
      "Terk etmek kolaysa senin için, el sallamakta hiç zor olmaz benim için.",
      "Insanlığa davet etsek yol tarifi isteyecek insanlar var.",
      "Senin etiketinin olduğu yer fiyatı ben koyarım.",
      "Balonlar, içi boş şeylerin de bazen yükselebileceğini hatırlatır.",
      "Bazı insanları sarımsaklasak da mı saklasak, yoksa boğup da rahatlasak mı?",
      "Laf sokma, kapak olursun. Yalvarma, köpek olursun. Delikanlı ol, belki yanımda yer bulursun.",
      "Laf Sokarim Derinden Gotun Oynar Yerinden",
      "Her gün resmine bakmadan duramıyorum. –İlla TÜKÜRECEĞİM!",
      "Kapak Olana Kapak Laf Sokamam :(",
      "Top Topu Çeker Dediğinde İnanmamıştım .. Doğruymuş Ama",
      "Laf dedi oldu kapak, söz söyledi oldu tencereye kapak.",
      "Çok talibim var diyenler; Sevinmeyin! Ucuz malın alıcısı çoktur.",
      "Etme sırtını duvardan başkasına emanet. En kralının bile içinde vardır bir nebze ihanet.",
      "İnsanlar da fotoğraf gibi; ne kadar büyütürsen, o  düşüyor kalitesi.",
      "Sana biraz adam ol diyeceğim seni de zor durumda bırakmak istemiyorum.",
      "Uzak dur çek elini benden, senin gibi seviyesizleri çok geride bıraktım ben.",
      "Bana şiir yaz diyorsun hoş güzel de, peki sen kaç harf edersin.",
      "2 dakika adam ol desem kaç dakikam kaldı diye soracak insansın",
      "Laf sokarım derinden aklın oynar yerinden.",
      "Ben sana ilaç olurum da, sen benim yan etkilerime dayanamazsın.",
      "Karabiber Ayran Koyumda Yaylan",
      "Senden Bir Kaşık Cacık Bile Olmazki Adam Olucaksın",
      "Sana Laf Sokmucam Şanslısın :) ",
      "Senin zirven benim zeminim! ",
      "Sen vurursun bela okurlar. Biz vururuz sala okurlar.",
      "Sen Vurursun Dikiş Atarlar Ben Vururum ** Toprak Atarlar **",
      "Yaklaşma toz olursun geçme pişman olursun.",
      "Uzaktan kusursuz, yakından lüzumsuz insanlar tanıdım.",
      "Senin artistlik yaptığın yerde bana yönetmenlik düşer.",
      "bir şey bilmene gerek yok haddini bil yeter.",
      "Beni eleştireceğine, git beynini geliştir!",
      "Tipinizin gideri var ama karakterinizin ederi yok.",
      "Matematikte bir konu olsan “Boş Küme” olursun. Havan kime ?",
      "52 ekran televizyon kadar kafan var ama küçük düğmesi kadar beynin yok.",
      "Konu adamlığa geldi, sen git istersen!",
  


    ]
       let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (':no_entry_sign: Ya Kime Kapak Laf Soyluyecem?')
  }});
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${kapak[Math.floor(Math.random() * 16)]}.`)
    }})
    }
    
  }
  
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kapaklaflar'],
    permLevel: 0
   };
   
  exports.help = {
    name: 'kapaklaf',
    description: 'Etiketlediniz Kisiye Kapak Laflar Soler.',
    usage: '-kapaklaflar'
   }