const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
name: "give",
cooldown: 5,
 run:async (bot, message, args) => { 

  let user = message.mentions.members.first() 

  let member = db.fetch(`sandwhich_${message.guild.id}_${message.author.id}`)

  let embed1 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(` Mention someone to give sandwhiches`);

  if (!user) {
      return message.channel.send(embed1)
  }
  let embed2 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`Specify an sandwhich to give`);
  
  if (!args[1]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`yo! you cant give negative sandwhiches`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`You don't have that much sandwhich`);

  if (member < args[1]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(` You gave ${user.user.username} ${args[1]} sandwhiches`);

  message.channel.send(embed5)
  db.add(`sandwhich_${message.guild.id}_${user.id}`, args[1])
  db.subtract(`sandwhich_${message.guild.id}_${message.author.id}`, args[1])

}
}