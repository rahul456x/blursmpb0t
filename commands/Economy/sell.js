const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  name: 'sell',
  cooldown: 50,
  run: async function (client, message, args) { 
    
    let user = message.author;

    if(args[0] == 'nikes') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` You don't have Nikes to sell`);

        let nikeses = await db.fetch(`nikes_${message.guild.id}_${user.id}`)

        if (nikeses < 1) return message.channel.send(Embed2)
       
        db.fetch(`nikes_${message.guild.id}_${user.id}`)
        db.subtract(`nikes_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` Sold Fresh Nikes For 600 breads`);

        db.add(`money_${message.guild.id}_${user.id}`, 600)
        db.subtract(`money_567_567`, 600)
        message.channel.send(Embed3)
    } else if(args[0] == 'sandwhich') {
      let amountsand = 50000000;
        let Sandx = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` You don't have sandwhich to sell`);

        let sandwhiches = await db.fetch(`sandwhich_${message.guild.id}_${user.id}`)

        if (sandwhiches < 1) return message.channel.send(Sandx)
       
        db.fetch(`sandwhich_${message.guild.id}_${user.id}`)
        db.subtract(`sandwhich_${message.guild.id}_${user.id}`, 1)

        let sandwitch = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` Sold Sandwhich For ${amountsand} breads`);

        db.add(`money_${message.guild.id}_${user.id}`, amountsand)
        db.subtract(`money_567_567`, amountsand)
        message.channel.send(sandwitch)
    } else if(args[0] == 'car') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` You don't have a Car to sell`);

       let cars = await db.fetch(`car_${message.guild.id}_${user.id}`)

        if (cars < 1) return message.channel.send(Embed2)
       
        db.fetch(`car_${message.guild.id}_${user.id}`)
        db.subtract(`car_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` Sold a Car For 800 breads`);

        db.add(`money_${message.guild.id}_${user.id}`, 800)
        db.subtract(`money_567_567`, 800)
        message.channel.send(Embed3)
    } else if(args[0] == 'mansion') {
        let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` You don't have a Mansion to sell`);

        let houses = await db.fetch(`house_${message.guild.id}_${user.id}`)

        if (houses < 1) return message.channel.send(Embed2)
       
        db.fetch(`house_${message.guild.id}_${user.id}`)
        db.subtract(`house_${message.guild.id}_${user.id}`, 1)

        let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` Sold a Mansion For 1200 Coins`);

        db.add(`money_${message.guild.id}_${user.id}`, 1200)
        db.subtract(`money_567_567`, 1200)
        message.channel.send(Embed3)
    };

}
  }