const { Client, Message, MessageEmbed } = require('discord.js');

const { MessageButton, MessageActionRow } = require('discord-buttons')


module.exports = {
    name: 'test',
    aliases: ['test'],
    description: 'chodu',
    run: async function (client, message, args) {

      const xdx = new MessageEmbed()
      .setTitle('Button Test')
      .setDescription('nothing')

      const x1x = new MessageButton()
      .setStyle('grey')
      .setLabel('Test 1')
      .setEmoji('873137897107255326')
      .setID('fuckx')

      const x2x = new MessageButton()
      .setStyle('grey')
      .setLabel('Test 2')
      .setEmoji('873137897107255326')
      .setID('fuckx')

      const x3x = new MessageButton()
      .setStyle('grey')
      .setLabel('Test 3')
      .setEmoji('873137897107255326')
      .setID('fuckx')

      const x4x = new MessageButton()
      .setStyle('grey')
      .setLabel('Test 4')
      .setEmoji('873137897107255326')
      .setID('fuckx')

      const x5x = new MessageButton()
      .setStyle('grey')
      .setLabel('Test 5')
      .setEmoji('873137897107255326')
      .setID('fuckx')

      const x6x = new MessageButton()
      .setStyle('grey')
      .setLabel('Test 6')
      .setEmoji('873137897107255326')
      .setID('fuckx')


      const row1xu = new MessageActionRow()
      .addComponent(x1x)
      .addComponent(x2x)
      .addComponent(x3x)
      .addComponent(x4x)
      .addComponent(x5x)

      const row2xu = new MessageActionRow()
      .addComponent(x6x)


      message.channel.send({
        embed: xdx,
        components: [row1xu, row2xu]
      })
    }
}