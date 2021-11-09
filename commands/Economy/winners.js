const pagination = require('discord.js-pagination');
const discord = require('discord.js')

module.exports = {
    name: 'winners',
    description: 'Play 8ball on Discord',
    cooldown: 60,
    run: async function (client, message, args) {

      const news1 = new discord.MessageEmbed()
      .setTitle('Winners')
      .setDescription(`**Winner** \`\`\`im_nico23 †#1456\`\`\`\n\n **Breads**: \`\`\`10000000 breads\`\`\`\n\n **On Server**: \`\`\`https://discord.gg/MUA2geP69c\`\`\``)
      .addField('Friday Nov 5th 2021', 'Congratulation im_nico23†1456')

      const news2 = new discord.MessageEmbed()
      .setTitle('Winners')
      .setDescription(`**Winner** \`\`\`⟪ 𝓡𝓲𝓲𝓬𝓴𝔂 ~#0191\`\`\`\n\n **Sandwhich**: \`\`\`5 Sandwhiches\`\`\`\n\n **On Server**: \`\`\`https://discord.gg/MUA2geP69c\`\`\``)
      .addField('Friday Nov 6th 2021', 'Congratulation ⟪ 𝓡𝓲𝓲𝓬𝓴𝔂 ~#0191')

      const pages = [
        news2,
        news1
      ]
      const emojiList = ['⬅️','➡️']

      pagination(message, pages, emojiList)
    }
}