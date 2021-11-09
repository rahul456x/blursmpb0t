const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: 'profile',
  cooldown: 5,
  run: async function(client, message, args) {

  let user = message.mentions.members.first() || message.author;

  let money = await db.fetch(`money_${message.guild.id}_${user.id}`)
  if (money === null) money = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let vipx = await db.fetch(`goldvip_${message.guild.id}_${user.id}`)
    if(vipx === null) vipx = 'None'
    if(vipx === true) vipx = 'True'

    let vips = await db.fetch(`bronzevipx_${message.guild.id}_${user.id}`)
    if(vips === null) vips = 'None'
    if(vips === true) vips = 'True'

    let vipt = await db.fetch(`coppervipx_${message.guild.id}_${user.id}`)
    if(vipt === null) vipt = 'None'
    if(vipt === true) vipt = 'True'

  let shoes = await db.fetch(`nikes_${message.guild.id}_${user.id}`)
  if(shoes === null) shoes = '0'

  let newcar = await db.fetch(`car_${message.guild.id}_${user.id}`)
  if(newcar === null) newcar = '0'

  let newhouse = await db.fetch(`house_${message.guild.id}_${user.id}`)
  if(newhouse === null) newhouse = '0'

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setDescription(`\`\`\`${message.author.tag}'s Profile\n\nPocket: ${money} breads\nBank: ${bank}\nBronze Vip: ${vips}\nCopper Vip:${vipt}\nGold Vip: ${vipx}\n\nInventory\n\nNikes: ${shoes}\nCars: ${newcar}\nMansions: ${newhouse}\`\`\``);
  message.channel.send(moneyEmbed)
}
}