const { Client, Message, MessageEmbed } = require('discord.js');
const totalMemMb = require('../.././configs/config.js')

module.exports = {
    name: 'currencyinfo',
    description: 'Play 8ball on Discord',
    run: async function (client, message, args) {

      const Embed = new MessageEmbed()
      .setTitle('Currency Info')
      .setDescription(`\`sandwhich\`: **50000000 bread** (50 million breads)`)

      message.channel.send(Embed)
    }
}