const pagination = require('discord.js-pagination');
const discord = require('discord.js')

module.exports = {
    name: 'giveawayinfo',
    aliases: ['gi'],
    description: 'Play 8ball on Discord',
    run: async function (client, message, args) {

      const giveawayx = new discord.MessageEmbed()
      .setTitle('Giveaway')
      .setDescription('**Giveaway**\n\n\n Giveaway: `15 diamond or 700000 breads`\n\n\n On Server: https://discord.gg/rMfEaDePtP\n\n\n Time: `Till 7th November 2021`\n\n\n Status: `Active` ')

      const giveawayx2 = new discord.MessageEmbed()
      .setTitle('Giveaway')
      .setDescription('More Giveaways Soon....')

      message.channel.send(giveawayx)
    }
}