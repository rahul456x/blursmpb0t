
const discord = require('discord.js')
const db = require('quick.db')
module.exports = {
  name: "globalbank",
  run: async (client, message, args) => {
    let bal = db.fetch(`money_567_567`)
    if (bal === null) bal = 0;

    let moneyEmbed = new discord.MessageEmbed()
  .setColor("#FFFFFF")
  .setTitle('USA GLOBAL BANK')
  .setDescription(`\`\`\`Global Balance - ${bal} breads\`\`\``)
  .setFooter('Anything you buy with breads will be stored on global bank')

  message.channel.send(moneyEmbed)

    

    
  }
}
