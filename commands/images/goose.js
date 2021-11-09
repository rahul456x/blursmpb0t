const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
  name: "goose",
  aliases: [],
  run: async function (client, message, args, data, db) {

    superagent.get('https://nekos.life/api/v2/img/goose')
        .end((err, response) => {
      const embed = new Discord.MessageEmbed()
      .setTitle("Random goose")
      .setImage(response.body.url)
      .setColor(`RANDOM`)
      .setFooter(`quack`)
      .setURL(response.body.url);
  message.channel.send(embed);
    }).catch((err) => message.channel.send({embed: {
                color: 16734039,
                description: "Something went wrong... :cry:"
            }}));

}
}
module.exports.help = {
    name: "cat",
    description: "Sends a random cat photo",
    usage: "cat",
    type: "Fun" 
}