const Discord = require('discord.js');

module.exports = {
    name: "qr",
    aliases: ["qrcode"],
    description: "Coneverts the provided link to a qr code cool ?",

    run: async (client, message, args) => {
    
        let link = (args[0])
        let qrlink = `http://api.qrserver.com/v1/create-qr-code/?data=${link}&size=200x200`

        if (!link) 
        return message.channel.send(` Please provide a link !!`)

        if (require('is-url')(link)) {
            const attachment = new Discord.MessageAttachment(qrlink, 'qrcode.png');

            const embed = new Discord.MessageEmbed()
            .setTitle('QR Code Is Ready')
            .attachFiles(attachment)
            .setColor(message.guild.me.displayHexColor)
            .setImage('attachment://qrcode.png')
            .setFooter(`Requested by ${message.author.username}`,  message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()

            message.channel.send(embed)

        }
        }
    }