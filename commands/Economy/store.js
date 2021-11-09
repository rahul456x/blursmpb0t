const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
name: 'store',
aliases: 'shop',
cooldown: 15,
 run: async function (client, message, args) {  


    let embed = new Discord.MessageEmbed()
    .setDescription("**VIP Ranks**\n\n`Bronze`: 5000 breads [billi buy bronze]\n`Gold`: 500000 breads [billi buy gold]\n`Copper`: 5000000 breads [billi buy copper]\n`Diamond VIP`: 100000000 breads [billi buy diamondvip]\n\n**Lifestyle Items**\n\n`Fresh Nikes`: 600 breads [billi buy nikes]\n`Car`: 800 breads [billi buy car]\n`Mansion`: 1200 breads [billi buy mansion] \n`Diamond`: 60000 breads [billi buy diamond]\n\n **Currency**\n\n `Sandwhich`: 100000000 breads")
    .addField('Do billi store2 to find out item abilities', '`billi store2 nikes` \n `billi store2 car` \n `billi store2 mansion`')
    .setColor("#FFFFFF")
    message.channel.send(embed)




}
}