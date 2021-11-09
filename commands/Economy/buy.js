const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {

  name: 'buy',
  cooldown: 50,
  run: async function (client, message, args) {

    let user = message.author;

    let author = db.fetch(`money_${message.guild.id}_${user.id}`)

    let Embed = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`\`\`\` You need 2000 breads to purchase Bronze VIP\`\`\``);

    let Silvered = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`\`\`\` You need 100000 breads to purchase Silver VIP\`\`\``);

    let Golded = new Discord.MessageEmbed()
      .setColor("#FFFFFF")
      .setDescription(`\`\`\` You need 1000000 breads to purchase Gold VIP\`\`\``);
    if (args[0] == 'gold') {
      let Embedxxx = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` You need 500000 breads to purchase Gold VIP`);
      if (author < 500000) return message.channel.send(Embedxxx)

      db.fetch(`goldvipx_${message.guild.id}_${user.id}`);
      db.set(`goldvipx_${message.guild.id}_${user.id}`, true)

      let rumx = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` Purchased Gold VIP For 500000 Coins`);

      db.subtract(`money_${message.guild.id}_${user.id}`, 500000)
      db.add(`money_567_567`, 500000)
      message.channel.send(rumx)
    } else if (args[0] == 'bronze') {
      let Embedxxx1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` You need 5000 breads to purchase Bronze VIP`);
      if (author < 5000) return message.channel.send(Embedxxx1)

      db.fetch(`bronzevipx_${message.guild.id}_${user.id}`);
      db.set(`bronzevipx_${message.guild.id}_${user.id}`, true)

      let rumx1 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` Purchased Bronze VIP For 5000 breads`);

      db.subtract(`money_${message.guild.id}_${user.id}`, 5000)
      db.add(`money_567_567`, 5000)
      message.channel.send(rumx1)
    } else if (args[0] == 'copper') {
      let Embedxxx1x = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` You need 5000000 breads to purchase Copper VIP`);
      if (author < 5000000) return message.channel.send(Embedxxx1x)

      db.fetch(`coppervipx_${message.guild.id}_${user.id}`);
      db.set(`coppervipx_${message.guild.id}_${user.id}`, true)

      let rumx1xx = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` Purchased Copper VIP For 5000000 breads`);

      db.subtract(`money_${message.guild.id}_${user.id}`, 5000000)
      db.add(`money_567_567`, 5000000)
      message.channel.send(rumx1xx)
    } else if (args[0] == 'emerald') {
      let authorvx = db.fetch(`sandwhich_${message.guild.id}_${user.id}`)
      let Embedxxx1xv = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` You need 1000000000 (1 billion) breads to purchase Emerald VIP`);
      let ocurrent = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` You need 10 Sandwhich to purchase Emerald VIP`);
      if (author < 1000000000) return message.channel.send(Embedxxx1xv)
      if (authorvx < 11) return message.channel.send(ocurrent)

      db.fetch(`emeraldvip_${message.guild.id}_${user.id}`);
      db.add(`money_567_567`, 1000000000)
      db.set(`emeraldvip_${message.guild.id}_${user.id}`, true)

      let rumx2xx = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` Purchased Emerald VIP for 1 billion breads and 10 sandwhich`);

      db.subtract(`money_${message.guild.id}_${user.id}`, 1000000000)
      db.subtract(`sandwhich_${message.guild.id}_${user.id}`, 10)
      message.channel.send(rumx2xx)
    } else if (args[0] == 'diamondvip') {
      let Embedxxx1x = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` You need 100000000 (100 million) breads to purchase Diamond VIP`);
      if (author < 100000000) return message.channel.send(Embedxxx1x)

      db.fetch(`diamondvip_${message.guild.id}_${user.id}`);
      db.set(`diamondvip_${message.guild.id}_${user.id}`, true)

      let rumx1x = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` Purchased Diamond VIP For 100000000 (100 million) breads`);

      db.subtract(`money_${message.guild.id}_${user.id}`, 100000000)
      db.add(`money_567_567`, 100000000)
      message.channel.send(rumx1x)
    } else if (args[0] == 'nikes') {
      let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\`\`\`You need 600 breads to purchase some Nikes\`\`\``);

      if (author < 600) return message.channel.send(Embed2)

      db.fetch(`nikes_${message.guild.id}_${user.id}`)
      db.add(`nikes_${message.guild.id}_${user.id}`, 1)

      let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` \`\`\`Purchased Fresh Nikes For 600 breads\`\`\``);

      db.subtract(`money_${message.guild.id}_${user.id}`, 600)
      db.add(`money_567_567`, 600)
      message.channel.send(Embed3)
    } else if (args[0] == 'stealcapsule') {
      let Embed2xv = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\`\`\`You need 100000 breads to purchase Steal Capsule\`\`\``);

      if (author < 100000) return message.channel.send(Embed2xv)

      db.fetch(`stealcapsule_${message.guild.id}_${user.id}`)
      db.add(`stealcapsule_${message.guild.id}_${user.id}`, 1)

      let Embed3xvv = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` \`\`\`Purchased Steal Capsule For 100000 breads\`\`\``);

      db.subtract(`money_${message.guild.id}_${user.id}`, 100000)
      db.add(`money_567_567`, 100000)
      message.channel.send(Embed3xvv)
    } else if (args[0] == 'gold') {
      let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\`\`\`You need 1000000 breads to purchase GoldVIP\`\`\``);

      if (author < 1000000) return message.channel.send(Embed2)

      db.fetch(`golded_${user.id}`)
      db.add(`golded_${message.guild.id}_${user.id}`, true)

      let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` \`\`\`Purchased GoldVIP For 1000000 breads\`\`\``);

      db.subtract(`money_${message.guild.id}_${user.id}`, 1000000)
      db.add(`money_567_567`, 1000000)
      message.channel.send(Embed3)
    } else if (args[0] == 'car') {
      let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\`\`\` You need 800 breads to purchase a new car\`\`\``);

      if (author < 800) return message.channel.send(Embed2)

      db.fetch(`car_${message.guild.id}_${user.id}`)
      db.add(`car_${message.guild.id}_${user.id}`, 1)

      let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\`\`\` Purchased a New Car For 800 breadss\`\`\``);

      db.subtract(`money_${message.guild.id}_${user.id}`, 800)
      db.add(`money_567_567`, 800)
      message.channel.send(Embed3)
    } else if (args[0] == 'sandwhich') {
      let Embed2xix = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\`\`\` You need 100000000 breads (100 million) to purchase Sandwhich\`\`\``);

      if (author < 100000000) return message.channel.send(Embed2xix)

      db.fetch(`sandwhich_${message.guild.id}_${user.id}`)
      db.add(`sandwhich_${message.guild.id}_${user.id}`, 1)

      let Embed3xix = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\`\`\` Purchased Sandwhich For 100000000 (100 million) breads \`\`\``);

      db.subtract(`money_${message.guild.id}_${user.id}`, 100000000)
      db.add(`money_567_567`, 100000000)
      message.channel.send(Embed3xix)
    } else if (args[0] == 'mansion') {
      let Embed2 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\`\`\` You need 1200 breads to purchase a Mansion\`\`\``);

      if (author < 1200) return message.channel.send(Embed2)

      db.fetch(`house_${message.guild.id}_${user.id}`)
      db.add(`house_${message.guild.id}_${user.id}`, 1)

      let Embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\`\`\` Purchased a Mansion For 1200 breads\`\`\``);

      db.subtract(`money_${message.guild.id}_${user.id}`, 1200)
      db.add(`money_567_567`, 1200)
      message.channel.send(Embed3)
    } else if (args[0] == 'diamond') {
      let Embedx = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(`\`\`\`You need 60000 breads to purchase diamond\`\`\``);

      if (author < 60000) return message.channel.send(Embedx)

      db.fetch(`diamond_${message.guild.id}_${user.id}`)
      db.add(`diamond_${message.guild.id}_${user.id}`, 1)

      let Embedxi = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(` \`\`\`Purchased Diamond For 60000 breads\`\`\``);

      db.subtract(`money_${message.guild.id}_${user.id}`, 60000)
      db.add(`money_567_567`, 60000)
      message.channel.send(Embedxi)
    } else {
      let embed3 = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setDescription(' Enter an item to buy \n **do** `billi store` **and** `billi store2` **to see items**')
      message.channel.send(embed3)
    }

  }
}