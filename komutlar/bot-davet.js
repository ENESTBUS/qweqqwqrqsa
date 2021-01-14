const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor(`Emessa? Linkler`, client.user.avatarURL())
.setDescription('**• [Emessa?`Yı Ekleyin.](https://discord.com/api/oauth2/authorize?client_id=791728234756046858&permissions=8&scope=bot)** \n\n **• [Emessa?`Yı Ekleyin.](https://discord.com/api/oauth2/authorize?client_id=791728234756046858&permissions=8&scope=bot)**')
.setFooter(`${message.author.username} tarafından istendi!`) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };