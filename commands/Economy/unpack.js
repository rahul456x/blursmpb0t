const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
  name: 'unpack',
  aliases: ['unpck'],
  cooldown: 15,
run: async function (client, message, args) { 

  let user = message.author;

  let member = db.fetch(`sandwhich_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`package_${message.guild.id}_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`package_${message.guild.id}_${user.id}`)
    
    db.subtract(`package_${message.guild.id}_${user.id}`, money)
    db.add(`sandwhich_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(` You have unpacked all sandwhiches safely`);
  message.channel.send(embed5)
  
  } else {

  let embed2 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(` Specify an sandwhich to unpack`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`You can't unpack negative sandwhiches fool`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Nice try! You don't have that much sandwhiches in Package`);

  if (member2 < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(` You have unpacked ${args[0]} sadwhiches from your Package`);

  message.channel.send(embed5)
  db.subtract(`package_${message.guild.id}_${user.id}`, args[0])
  db.add(`sandwhich_${message.guild.id}_${user.id}`, args[0])
  }
}
}