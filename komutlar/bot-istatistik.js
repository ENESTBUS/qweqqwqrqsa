


const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/attachments/792134428159246405/798945703674118144/sual.png`)
.addField("__**Bot Verileri**__", ` **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n  **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n  **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", ` **Bot Sahibi**  <@760088178597560331> \n **LordKotzi#9830** \n\n \ **Bot Geliştiricisi**  <@541961532007776266> \n **ENESTBUS#0856** \n\n  **Bot Sahibi**  <@760088178597560331> \n **LordKotzi#9830** \n`)
.addField("__**Sürümler**__", ` **Discord.js Sürümü** **|**  **v${Discord.version}** \n **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikmeler**__", ` **${client.ws.ping}** ms`,true)
.addField("**__Müzik Oynatılan__** ", "" +client.voice.connections.size + " Sunucu", true)
    .setImage(`https://cdn.discordapp.com/attachments/792134428159246405/798945703674118144/sual.png`)
.setColor("BLUE")
message.channel.send(lordcreative)
}

exports.config = {
name: "botbilgi",
aliases: []
}