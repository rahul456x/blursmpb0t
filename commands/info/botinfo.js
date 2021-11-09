const { MessageEmbed } = require('discord.js')
const { MessageButton } = require('discord-buttons')
const { mem, cpu, os } = require('node-os-utils');
const { stripIndent } = require('common-tags');


module.exports = {
    name: "botinfo",
    cooldown: 3,
    description: 'view the bot ping',
    aliases: ["bi"],
    cooldown: 50,
    run: async function(client, message, args, user) {
          const { totalMemMb, usedMemMb } = await mem.info();

      const ram1 = stripIndent`
      RAM       :: 32 GB
      RAM USAGE :: ${usedMemMb} MB
    `;
  const ipd = new MessageEmbed()
  .setTitle('Bot Info')
  .setDescription('Click the button below to navigate')
  .setImage('https://cdn.discordapp.com/attachments/904624531539382294/905038165302210600/350kb.gif')
  .setColor('GREEN')

  const ramx = new MessageEmbed()
  .setTitle('RAM Info')
  .setDescription(`\`\`\`\n${ram1}\`\`\``)
  .setImage('https://cdn.discordapp.com/attachments/904624531539382294/905038165302210600/350kb.gif')

  const ram2x = new MessageButton()
    .setStyle('blurple')
    .setLabel('RAM')
    .setID('ram')

  const invite = new MessageButton()
  .setStyle('url')
  .setLabel('Invite Me')
  .setURL('https://dsc.gg/billi')
  .setEmoji('861633373565747211')

  const osx = new MessageButton()
  .setStyle('blurple')
  .setLabel('OS')
  .setID('os')

  const nightrowrankx4 = new MessageButton()
  .setStyle('blurple')
  .setLabel('Nightrow')
  .setID('nightrow')

const nightrowrank = stripIndent`
      Rank                 :: Static Lime Paper
      RAM                  :: 32GB
      Maintainance Level   :: Full
      Maintainance Date    :: Every Saturday
      Average Cost         :: 40$ (but free)
    `;
const os2x = stripIndent`
      OS       :: Windows 11 x64
      OS RAM   :: 450GB
    `;

  const os3x = new MessageEmbed()
  .setTitle('OS Info')
  .setDescription(`\`\`\`\n${os2x}\`\`\``)
  .setColor('RED')
  .setImage('https://cdn.discordapp.com/attachments/904624531539382294/905038165302210600/350kb.gif')
  
    const nightrow3x = new MessageEmbed()
  .setTitle('Nightrow Info')
  .setDescription(`\`\`\`\n${nightrowrank}\`\`\``)
  .setColor('RED')
  .setImage('https://cdn.discordapp.com/attachments/904624531539382294/905038165302210600/350kb.gif')

  const supportserver2x = new MessageButton()
    .setStyle('url')
    .setLabel('Support Server')
    .setURL('https://discord.gg/EGdbUSbpsE')

    const next1 = new MessageButton()
    .setStyle('grey')
    .setLabel('Next')
    .setID('next1')
  
  message.channel.send({
    buttons: [ram2x, osx, nightrowrankx4, supportserver2x],
    embed: ramx
  })
    }
}