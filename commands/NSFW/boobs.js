const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();
let ownerid = "895611957548302377";

module.exports = {
    name: 'boobs',
    run: async function(client, message, args) {
      if (message.channel.nsfw === true) {
        if (!message.guild) return;
            async function boobs() {
            const GIF = await neko.nsfw.boobs();
            const embed = new Discord.MessageEmbed()
            .setColor('#202225')
            .setTitle(`${message.author.tag} here's a random image/gif`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            boobs();
      } else {
        message.channel.send('This is not NSFW channel')
      }
    }
}