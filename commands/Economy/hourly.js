const { Discord, MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
  name: "hourly",
  aliases: [],
  cooldown: 5,
  run: async function (client, message, args) { 
    let user = message.author;
    let vip = await db.fetch(`coppervipx_${message.guild.id}_${user.id}`)
    if(vip === null) {
      message.channel.send('You need Copper VIP [billi buy copper]]')
    } 
    if(vip === true) {
  let user = message.author;

  let timeout = 3600000;
  let paradise = ['0', '1']
  let moneyx = 10000;

  let amount = Math.floor((Math.random() * paradise.length));

  let beg = await db.fetch(`beg_${message.guild.id}_${user.id}`);

  if (beg !== null && timeout - (Date.now() - beg) > 0) {
    let time = ms(timeout - (Date.now() - beg));
  
    let timeEmbed = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`\`\`\` You've already collected hourly reward recently\n\nCollect again in ${time.hours}h ${time.minutes}m ${time.seconds}s\`\`\` `);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`\`\`\`You have got ${amount} sandwhiches and ${moneyx} breads \`\`\``);
  message.channel.send(moneyEmbed)
  db.add(`sandwhich_${message.guild.id}_${user.id}`, amount)
  db.add(`money_${message.guild.id}_${user.id}`, moneyx)
  db.set(`beg_${message.guild.id}_${user.id}`, Date.now())

  }
  
  }
  }
}