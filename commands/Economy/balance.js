const { Discord, MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "balance",
  aliases: ['bal'],
  cooldown: 5,
 run: async function (client, message, args, utils)  { 

  let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let sandwhich = db.fetch(`sandwhich_${message.guild.id}_${user.id}`)

  if (sandwhich === null) sandwhich = 0;

  let bigmac = db.fetch(`bigmac_${message.guild.id}_${user.id}`)

  if (bigmac === null) bigmac = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let pckg = await db.fetch(`package_${message.guild.id}_${user.id}`)
  if (pckg === null) pckg = 0;

  

  let moneyEmbed = new MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`**${user}'s Balance**\n\n\`\`\`Pocket: ${bal} breads\nBank: ${bank} breads\nSandWhiches: ${sandwhich} sandwhiches\nPackage: ${pckg} sandwhiches \nBigmac: ${bigmac} bigmacs
  \`\`\``)
  message.channel.send(moneyEmbed)
}
}