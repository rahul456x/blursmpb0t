const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
name: 'addsandwhich',
run: async (client, message, args) => { 
  let ownerID = '895611957548302377'
  if(message.author.id !== ownerID) return message.channel.send(`Probably you are not owner <@${ownerID}> is the owner for addmoney`);

  let user = message.mentions.members.first()

    if (isNaN(args[1])) return;
    db.add(`sandwhich_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`sandwhich_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`\`\`\`Added ${args[1]} sandwhich\n\nNew Balance: ${bal}\`\`\``);
    message.channel.send(moneyEmbed)

}
}