const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
  name: 'pack',
  aliases: ['pck'],
  run: async function (client, message, args) {  

  let user = message.author;

  let member = db.fetch(`sandwhich_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`package_${message.guild.id}_${user.id}`)

  if (args[0] == 'all') {
    let money = await db.fetch(`sandwhich_${message.guild.id}_${user.id}`)
    let bank = await db.fetch(`package_${message.guild.id}_${user.id}`)

    let embedbank = new Discord.MessageEmbed()
    .setColor('#FFFFFF')
    .setDescription("``` You don't have any Sandwhiches to pack```")

    if(money === 0) return message.channel.send(embedbank)

    db.add(`package_${message.guild.id}_${user.id}`, money)
    db.subtract(`sandwhich_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`\`\`\` You have packed all your sandwhiches and i swear its safe\`\`\``);
  message.channel.send(embed5)
  
  } else {
  
  let embed2 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`\`\`\`Specify an amount to pack\`\`\``);
  
  if (!args[0]) {
      return message.channel.send(embed2)
      .catch(err => console.log(err))
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`\`\`\` You can't pack negative sandwhich\`\`\``);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`ok you dont have that much sandwhiches`);

  if (member < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`You have packed ${args[0]} sandwhiches and i swear its safe`);

  message.channel.send(embed5)
  db.add(`package_${message.guild.id}_${user.id}`, args[0])
  db.subtract(`sandwhich_${message.guild.id}_${user.id}`, args[0])
  }
}
}