const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
name: 'eat',
cooldown: 15,
run: async function (client, message, args) {
  
  
    if (args[0] == 'sandwhich') {
      let author = db.fetch(`sandwhich_${message.guild.id}_${message.author.id}`)
    let Embedxxx = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` You dont have a sandwhich to eat`);
      if (author < 1) return message.channel.send(Embedxxx)

      let rumx1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`You ate Sandwhich :)`);

      db.subtract(`sandwhich_${message.guild.id}_${message.author.id}`, 1)
      message.channel.send(rumx1)     
    }

  }
  }