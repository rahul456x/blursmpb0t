const { Discord, MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
  name: "emeraldvip",
  aliases: [],
  cooldown: 5,
  run: async function (client, message, args) {
    
     let user = message.author;
    let vip = await db.fetch(`emeraldvip_${message.guild.id}_${user.id}`)
    if (vip === null) {
      message.channel.send('You dont have Emerald VIP and its expensive. do `billi buy emerald` if you want to buy ')
    }
    if (vip === true) {

  let user = message.author;

  let timeout = 86400000;
  let amount = 1000000;
  let sandamount = 1;

  let daily = await db.fetch(`emeraldtime_${message.guild.id}_${user.id}`);

  if (daily !== null && timeout - (Date.now() - daily) > 0) {
    let time = ms(timeout - (Date.now() - daily));
  
    let timeEmbed = new MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`\`\`\` You've already claimed your Emerald reward\n\nclaim it again in ${time.days}days ${time.hours}hours ${time.minutes}minutes ${time.seconds}seconds \`\`\``);
    message.channel.send(timeEmbed)
  } else {
    let moneyEmbed = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`\`\`\`You've collected your daily reward of ${amount} breads and \`\`\``);
  message.channel.send(moneyEmbed)
  db.add(`money_${message.guild.id}_${user.id}`, amount)
  db.add(`sandwhich_${message.guild.id}_${user.id}`, sandamount)
  db.set(`emeraldtime_${message.guild.id}_${user.id}`, Date.now())

  }
  }
}
}