const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports = {
  name: 'steal',

run: async (client, message, args) => { 
  let author2x = await db.fetch(`stealcapsule_${message.guild.id}_${message.author.id}`)

let user = message.mentions.members.first()
if(!user) {
  message.channel.send('Steal who?')
}

let moneyEmbedz = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`You need atleast one Steal Capsule do \`billi buy stealcapsule\``);


let targetuser = await db.fetch(`sandwhich_${message.guild.id}_${user.id}`)
let author = await db.fetch(`stealtime_${message.guild.id}_${message.author.id}`)
let author2 = await db.fetch(`sandwhich_${message.guild.id}_${message.author.id}`)

let timeout = 6000000;

if (author !== null && timeout - (Date.now() - author) > 0) {
    let time = ms(timeout - (Date.now() - author));

    let timeEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(` You have already stealed someone\n\nTry again in ${time.days} days ${time.hours} hours ${time.minutes}m ${time.seconds}s `);
    message.channel.send(timeEmbed)
  } else {

let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`You need atleast 1 sandwhiches in your hand to steal someone`);

if (author2 < 1) {
    return message.channel.send(moneyEmbed)

}
if (author2x < 1) {
    return message.channel.send(moneyEmbedz)

}
let moneyEmbed2 = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`${user.user.username} does not have a sandwhich you can steal.`);
if (targetuser < 0) {
    return message.channel.send(moneyEmbed2)
}
let paradise = ['0', '1']
let random = Math.floor((Math.random() * paradise.length));

let embed = new Discord.MessageEmbed()
.setDescription(` You stole ${user} and got his ${random} sandwhiches`)
.setColor("#FFFFFF")
message.channel.send(embed)

db.subtract(`sandwhich_${message.guild.id}_${user.id}`, random)
db.add(`sandwhich_${message.guild.id}_${message.author.id}`, random)
db.set(`stealtime_${message.guild.id}_${message.author.id}`, Date.now())
  
};
}
}