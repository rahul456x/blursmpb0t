const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Yo boi!!'))

app.listen(port, () =>
console.log(`Billi RAGE is listening a http://localhost:${port}`)
);

const { Collection, Client, Discord, MessageCollector } = require('discord.js')
const { MessageEmbed } = require('discord.js')
const { MessageButton } = require('discord-buttons')
const { nodes } = require("./config.json");
const cooldowns = new Map();
const { mem, cpu, os } = require('node-os-utils');
const fs = require('fs')
const db = require('quick.db')
const ms = require('ms')
const client = new Client()
const chalk = require('chalk')
const { stripIndent } = require('common-tags');
const config = require('./config.json')
const prefix = config.prefix
const token = config.token
const alexa = require("alexa-bot-api");
require('discord-buttons')(client)

client.config = config;
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
////////////////////////////////////////////////
/// CONST HANDLER


const funcmd = new MessageEmbed()
  .setTitle('Fun Commands')
  .setImage('https://cdn.discordapp.com/attachments/904624531539382294/905038165302210600/350kb.gif')
  .addFields({
    name: 'Fun',
    value: '`cry` |`poke` | `say` | `smart` | `dadjoke` | `decode` | `toilet` | `goodmorning` | `bigsmoke` | `anime`',
  })

const infocmd = new MessageEmbed()
  .setTitle('Info Commands')
  .setImage('https://cdn.discordapp.com/attachments/904624531539382294/905038165302210600/350kb.gif')
  .addFields({
    name: 'Information',
    value: '`help` | `invite` | `ping` | `servers` | `uptime` | `botinfo` | `poll` | `prefix` | `news`'
  })

const imagescmd = new MessageEmbed()
  .setTitle('Images Commands')
  .setImage('https://cdn.discordapp.com/attachments/904624531539382294/905038165302210600/350kb.gif')
  .addFields({
    name: 'Images',
    value: '`approved` | `avatar` | `cat` | `gay` | `foxgirl` | `qr` | `burn` | `rip` | `smug` |`feed` | `goose` | `respect` | `kiss`',
  })

const gamescmd = new MessageEmbed()
  .setTitle('Games Commands')
  .setImage('https://cdn.discordapp.com/attachments/904624531539382294/905038165302210600/350kb.gif')
  .addFields({
    name: 'Games',
    value: '`8ball` | `tictactoe`'
  })

const moderationcmd = new MessageEmbed()
  .setTitle('Moderation Commands')
  .setImage('https://cdn.discordapp.com/attachments/904624531539382294/905038165302210600/350kb.gif')
  .addFields({
    name: 'Moderation',
    value: '`ban` | `deafen` | `dm` | `lock` | `kick` | `warn` | `whois` | `unlock` | `unban` | `undeafen`'
  })

const economycmd = new MessageEmbed()
  .setTitle('Economy Commands')
  .setImage('https://cdn.discordapp.com/attachments/904624531539382294/905038165302210600/350kb.gif')
  .addFields({
    name: 'Economy',
    value: '`balance` | `bet` | `buy` | `daily` | `deposit` | `leaderboard` | `fish` | `rob` | `roulette` | `store` | `sell` | `pay` | `withdraw` | `weekly` | `work` | `winners` | `search` | `give` | `hourly` | `currencyinfo` | `bronzevip` | `goldvip` | `pack` | `unpack`'
  })

const musiccmd = new MessageEmbed()
  .setTitle('Music Commands')
  .setImage('https://cdn.discordapp.com/attachments/904624531539382294/905038165302210600/350kb.gif')
  .addFields({
    name: 'Music Commands',
    value: 'Music Commands will be back soon'
  })

  const filtercmd = new MessageEmbed()
  .setTitle('Filter Commands')
  .addFields({
    name: 'Filter Commands',
    value: '`3d` | `bassboost` | `echo` |`karaoke` | `nightcore` | `vaporwave`'
  })
      .setFooter('example: billi filter 3d')

      const nsfwcmd = new MessageEmbed()
  .setTitle('NSFW Commands')
  .addFields({
    name: 'NSFW Commands',
    value: '`boobs` | `blowjob` | `classic` | `cumsluts` | `gif` | `gif2` | `hentai` | `kuni` | `lesbian` | `pussy`'
  })

const oscmd = stripIndent`
      OS       :: Windows 11 x64
      OS RAM   :: 450GB
    `;
const os3x = new MessageEmbed()
  .setTitle('OS Info')
  .setDescription(`\`\`\`${oscmd}\`\`\``)
  .setImage('https://cdn.discordapp.com/attachments/904624531539382294/905038165302210600/350kb.gif')

const nightrowrank = stripIndent`
      Rank                 :: Static Lime Paper
      RAM                  :: 32GB
      Maintainance Level   :: Full
      Maintainance Date    :: Every Saturday
      Average Cost         :: 40$ (but free)
      `;

const nightrow3x = new MessageEmbed()
  .setTitle('Nightrow Info')
  .setDescription(`\`\`\`\n${nightrowrank}\`\`\``)
  .setColor('RED')
  .setImage('https://cdn.discordapp.com/attachments/904624531539382294/905038165302210600/350kb.gif')

const fun2x = new MessageButton()
  .setStyle('red')
  .setLabel('Fun')
  .setID('fun')
  .setDisabled(false)

const info2x = new MessageButton()
  .setStyle('red')
  .setLabel('Information')
  .setID('info')
  .setDisabled(false)

const images2x = new MessageButton()
  .setStyle('red')
  .setLabel('Images')
  .setID('images')
  .setDisabled(false)

const games2x = new MessageButton()
  .setStyle('red')
  .setLabel('Games')
  .setID('games')
  .setDisabled(false)

const supportserver2x = new MessageButton()
  .setStyle('url')
  .setLabel('Support Server')
  .setURL('https://discord.gg/EGdbUSbpsE')

const music2x = new MessageButton()
  .setStyle('red')
  .setLabel('Music')
  .setID('music')
  .setDisabled(false)

const back2x = new MessageButton()
  .setStyle('grey')
  .setLabel('Back')
  .setID('back')
  .setDisabled(false)

const next2x = new MessageButton()
  .setStyle('grey')
  .setLabel('Next')
  .setID('next')

const ram2x = new MessageButton()
  .setStyle('blurple')
  .setLabel('RAM')
  .setID('ram')

const osx = new MessageButton()
  .setStyle('blurple')
  .setLabel('OS')
  .setID('os')

const nightrowrank2x = new MessageButton()
  .setStyle('blurple')
  .setLabel('Nightrow')
  .setID('nightrow')

const moderation2x = new MessageButton()
  .setStyle('red')
  .setLabel('Moderation')
  .setID('mod')

const economy2x = new MessageButton()
  .setStyle('red')
  .setLabel('Economy')
  .setID('economy')

  const nsfw2x = new MessageButton()
  .setStyle('red')
  .setLabel('NSFW')
  .setID('nsfw')

const next10x = new MessageButton()
  .setStyle('grey')
  .setLabel('Next')
  .setID('next5')

const back10x = new MessageButton()
  .setStyle('grey')
  .setLabel('Back')
  .setID('back5')


////////////////////////////////////////////////
// CLICKABLE BUTTON HANDLER
client.on('clickButton', async (button) => {
  if (button.id === 'smart') {
    await button.reply.defer()
    button.channel.send(`${button.clicker.user.tag} is smart`)
  }
  if (button.id === 'dumb') {
    await button.reply.defer()
    button.channel.send(`${button.clicker.user.tag} is dumb`)
  }
  if (button.id === 'duration') {
    await button.reply.defer()
  }
  if (button.id === 'fun') {
    await button.reply.defer()
    button.message.edit({
      embed: funcmd,
      buttons: [fun2x, games2x, images2x, next2x, supportserver2x],
    }).then
    await button.message.delete
  }
  if (button.id === 'info') {
    await button.reply.defer()
    button.message.edit({
      embed: infocmd,
      buttons: [music2x, info2x, next10x, back2x, supportserver2x],
    })
  }
  if (button.id === 'images') {
    await button.reply.defer()
    button.message.edit({
      embed: imagescmd,
      buttons: [fun2x, games2x, images2x, next2x, supportserver2x],
    })
  }
  if (button.id === 'games') {
    await button.reply.defer()
    button.message.edit({
      embed: gamescmd,
      buttons: [fun2x, games2x, images2x, next2x, supportserver2x],
    })
  }

  if (button.id === 'music') {
    await button.reply.defer()
    button.message.edit({
      embed: musiccmd,
      buttons: [music2x, info2x, next10x, back2x, supportserver2x],
    })
  }

  if (button.id === 'back5') {
    await button.reply.defer()
    button.message.edit({
      embed: musiccmd,
      buttons: [music2x, info2x, next10x, back2x, supportserver2x],
    })
  }

  if (button.id === 'next5') {
    await button.reply.defer()
    button.message.edit({
      embed: economycmd,
      buttons: [economy2x, moderation2x, nsfw2x, back10x, supportserver2x],
    })
  }

  if (button.id === 'next') {
    await button.reply.defer()
    button.message.edit({
      embed: musiccmd,
      buttons: [music2x, info2x, next10x, back2x, supportserver2x],
    })
  }

  if (button.id === 'mod') {
    await button.reply.defer()
    button.message.edit({
      embed: moderationcmd,
      buttons: [economy2x, moderation2x, nsfw2x, back10x, supportserver2x],
    })
  }

  if (button.id === 'nsfw') {
    await button.reply.defer()
    button.message.edit({
      embed: nsfwcmd,
      buttons: [economy2x, moderation2x, nsfw2x, back10x, supportserver2x],
    })
  }

  if (button.id === 'economy') {
    await button.reply.defer()
    button.message.edit({
      embed: economycmd,
      buttons: [economy2x, moderation2x, nsfw2x, back10x, supportserver2x],
    })
  }

  if (button.id === 'back') {
    await button.reply.defer()
    button.message.edit({
      embed: funcmd,
      buttons: [fun2x, games2x, images2x, next2x, supportserver2x],
    })
  }

  if (button.id === 'os') {
    await button.reply.defer()
    button.message.edit({
      embed: os3x,
      buttons: [osx, nightrowrank2x, supportserver2x],
    })
  }

  if (button.id === 'nightrow') {
    await button.reply.defer()
    button.message.edit({
      embed: nightrow3x,
      buttons: [osx, nightrowrank2x, supportserver2x],
    })
  }
})
////////////////////////////////////////////////
// READY EVENT
client.on('ready', () => {
  console.log(`${client.user.username} Successfully Logged in!`)
  client.user.setActivity('billi help or billihelp')
})
//////////////////////////////////////////////////
/////////////////////////////////////////////////
// MESSAGE EVENT
client.on('message', async message => {
var prefix = await db.fetch(`prefix_${message.guild.id}`);
    if (prefix == null) prefix = require('./config.json').prefix;
    if (message.channel.type == "dm") return;
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) 
  if (message.author.bot || message.channel.type === "dm") return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith('hey')) {return message.channel.send('Hey i am Billi RAGE');}
  if (!message.guild) return;
  if (!message.member) message.member = await message.guild.fetchMember(message);
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length == 0) return;
  let command = client.commands.get(cmd)
  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (!cooldowns.has(command.name)) {
        const coll = new Collection();
        cooldowns.set(command.name, coll);
    }
    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name);
    const cooldown_amount = command.cooldown * 1000;
    if (time_stamps.has(message.author.id)) {
        const expiration_time =
            time_stamps.get(message.author.id) + cooldown_amount;
        if (current_time < expiration_time) {
            const time_left = (expiration_time - current_time) / 1000;
            return message.channel.send(
                new MessageEmbed()
                .setColor("RED")
                .setDescription(
                    `**⏳ | You Are In Cooldown Please Wait \`${time_left.toFixed(
              1
            )} second\` To Use \`${command.name}\` Again**`
                )
            ).then(msg => {
                setTimeout(() => {
                    msg.delete()
                }, 3000);
            });
        }
    }
    time_stamps.set(message.author.id, current_time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

     if (command) command.run(client, message, args)
})
///////////////////////////////////////////////
client.login(process.env.TOKEN)
