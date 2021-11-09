const { Client, Message, MessageEmbed } = require('discord.js');


module.exports = {
    name: 'cpu',
    aliases: [''],
    description: 'Play 8ball on Discord',
    run: async function (client, message, args) {
      const cpux = new MessageEmbed()
      .setTitle('CPU')
      .setDescription(`🤖 CPU: \`\`\`AMD Ryzen 9 5900X\`\`\``)

      message.channel.send(cpux)
    }
}