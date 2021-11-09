const db = require('quick.db')
const Discord = require('discord.js')
const ms = require("parse-ms");

module.exports = {
  name: 'search',
  run: async function (client, message, args) {  

    let user = message.author;
    let author = await db.fetch(`search_${message.guild.id}_${user.id}`)

    let timeout = 6000000;
    
    if (author !== null && timeout - (Date.now() - author) > 0) {
        let time = ms(timeout - (Date.now() - author));
    
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` You have already serched recently\n\nTry again in ${time.minutes}m ${time.seconds}s `);
        message.channel.send(timeEmbed)
      } else {

        let replies = ['gold', 'diamond', 'ruby', 'emerald']

        let result = Math.floor((Math.random() * replies.length));
        let amount = Math.floor(Math.random() * 10000) + 1;
        let embed1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` You search ${replies[result]} and it sells on ${amount} breads`);
        message.channel.send(embed1)
        
        db.add(`money_${message.guild.id}_${user.id}`, amount)
        db.set(`search_${message.guild.id}_${user.id}`, Date.now())
    };
}
}