const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('quick.db')
const ms = require('parse-ms')

module.exports = {
  name: 'goldvip',
  aliases: ['gv'],
  description: 'Play 8ball on Discord',
  run: async function (client, message, args) {
    let author = await db.fetch(`goldtime_${message.guild.id}_${message.author.id}`)

    let timeout = 600000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` You have already claimed GoldVIP rewards\n\nTry again in  ${time.minutes}m ${time.seconds}s `);
        message.channel.send(timeEmbed)
      } else {
    
    let user = message.author;
    let vip = await db.fetch(`goldvipx_${message.guild.id}_${user.id}`)
    if (vip === null) {
      message.channel.send('looks like u dont have Gold VIP do billi buy gold')
    }
    if (vip === true) {
      let random = 15000;
      let embed = new MessageEmbed()
        .setDescription(`You got ${random} breads for having Gold VIP`)
        .setColor("#FFFFFF")
      message.channel.send(embed)

      db.add(`money_${message.guild.id}_${user.id}`, random)
      db.set(`goldtime_${message.guild.id}_${user.id}`, Date.now())
      
    }
    }
  }
}