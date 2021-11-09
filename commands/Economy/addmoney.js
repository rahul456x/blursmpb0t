const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
name: 'addmoney',
run: async (client, message, args) => { 
  let ownerID = '895611957548302377'
  if(message.author.id !== ownerID) return message.channel.send(`Probably you are not owner <@${ownerID}> is the owner for addmoney`);

  let user = message.mentions.members.first() || message.author;

    if (isNaN(args[1])) return;
    db.add(`money_${message.guild.id}_${user.id}`, args[1])
    let bal = await db.fetch(`money_${message.guild.id}_${user.id}`)

    let moneyEmbed = new Discord.MessageEmbed()
    .setColor("#FFFFFF")
    .setDescription(`\`\`\`Added ${args[1]} breads\n\nNew Balance: ${bal}\`\`\``);
    message.channel.send(moneyEmbed)

}
}