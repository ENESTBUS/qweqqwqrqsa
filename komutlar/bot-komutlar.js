const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`Emessa? - Komut Sayısı`)
    .setDescription('**\n Emessa? Bot | Toplam**  **`' + client.commands.size + '`** **Komut Vardır!**')
    .setColor("BLUE")
    .setThumbnail('https://cdn.discordapp.com/attachments/792134428159246405/798945703674118144/sual.png')
    .setTimestamp()
    .setFooter("Emessa? | Gelişmiş Türkçe Bot | 2020" , client.user.avatarURL())

    return message.channel.send(embed);
    
};

exports.config = {
  name: 'komutlar',
  aliases: ['komut-sayısı']
};

