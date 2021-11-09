const pagination = require('discord.js-pagination');
const discord = require('discord.js')

module.exports = {
    name: 'news',
    description: 'Play 8ball on Discord',
    cooldown: 60,
    run: async function (client, message, args) {
// NEWS COMING SOON //////////////////////////////
      const news0 = new discord.MessageEmbed()
      .setTitle('Change Logs')
      .setDescription('***News 1.0*** \n\n 1) **VIP RANK has been removed** \n\n 2) **Poll Command added on info** `billi poll <channel> <question>` \n\n 3) **Prefix Command added on info** `billi prefix <your prefix>` \n\n 4) **Currency on Economy will be changed to bread** \n\n 4) **NSFW Commands are adding soon**')
      .addField('Friday November 5th 2021', 'Occhilupo')

      const news1 = new discord.MessageEmbed()
      .setTitle('Change Logs')
      .setDescription('***News 1.1*** \n\n 1) **Economy Currency has been changed to breads however there is no currency drops*** \n\n 2) **News Command has been added*** `billi news`\n\n 3) **Winner Command has been added to see winners list on giveaways** `billi winners` \n\n 4) **4x has been disabled as 24 hours has been passed** \n\n 5) **Buttons has been added back as source of shortcut for play command** \n\n 6) **Secret Command added**\n\n 7) **Giveaway Info command added** `billi giveawayinfo`')
      .addField('Saturday November 6th 2021', 'Occhilupo')

      const news2 = new discord.MessageEmbed()
      .setTitle('Change Logs')
      .setDescription('***News 1.2***\n\n 1) **New filters added soon..**\n\n 2) **NSFW Command has been added**\n\n 3) **Various Bug Fixes**\n\n 3) **Diamond has been added to store**\n\n 4) **Sandwhich Currency will be added soon however bread will be not replaced**\n\n 5) **Permission for Moderation are categorized** \n\n 6) ** Search Command has been added in Economy**')
      .addField('Saturday November 6th 2021', 'ryuzaki')

      const news3 = new discord.MessageEmbed()
      .setTitle('Change Logs')
      .setDescription('***News 1.3***\n\n1)**Sandwhich currency added on economy. sandwhiches are rare tho**\n\n  2) **Hourly command has been added (till now this is the only source for sandwhich)**\n\n 3) **Give command has been added so you can trade sandwhiches with breads with billi pay and billi give** \n\n 4) **Leaderboard for sandwhiches are coming soon** \n\n 5) **Beg command has been removed** `rip beg`\n\n 6) **Kiss command added on images**\n\n 7) **Anime command added on fun**\n\n 8) **Big smoke command added on fun so you can remember his orders**')
      .addField('Saturday November 6th 2021', 'ryuzaki')

      const news4 = new discord.MessageEmbed()
      .setTitle('Change Logs')
      .setDescription('***News 1.4***\n\n1)**Sandwhich can be selled and its sell price increase time to time**\n\n2)**To check sell price of Sandwhich. currencyinfo command is introduced** `billi currencyinfo`\n\n 3) **Bronze and Gold VIP has been added and can be bought on store**`billi buy bronze` `billi buy gold`\n\n 4) **Bronzevip and Goldvip command has been added so bronzevip needs Bronze rank and Goldvip needs Gold rank to use it. `billi bronzevip` `billi goldvip`**')
      .addField('Saturday November 6th 2021', 'ryuzaki')

      const news5 = new discord.MessageEmbed()
      .setTitle('Change Logs')
      .setDescription('***News 1.5***\n\n1) **Diamond vip added (feature: when u rob someone u will rob 100000 bread) **`billi buy diamondvip`')

      const news6 = new discord.MessageEmbed()
      .setTitle('New Economy Season / News 1.6')
      .setDescription('***Season 2***\n\n**All Breads and sandwhiches with VIP Ranks are resetted because we want to be fair to everyone.As this is the new season for Economy theres new things. WE ARE INTRODUCING NEW VAULT SYSTEM FOR Sandwhich. It is**`Package`.**It is like deposit system for sandwhich .you can pack sandwhich with**`billi pack <sandwhich amount>`**and unpack with**`billi unpack <sandwhich amount>`**And also a big moment. Introducing New currency ** `BigMac`**Big mac is the hardest currency to get and we will introduce the source of BigMac in news1.7. Also we have added a new VIP RANK COPPER. you can buy using** `<billi buy copper>`.**And now Hourly command needs Copper VIP** __Now as Season 2 has arrived we are activating 16x in betting__. **Enjoy the new season**')

 ////////////////////////////////////////////////     
// NEWS COMING SOOON \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
      const newscomingsoon = new discord.MessageEmbed()
      .setTitle('News 1.7 coming soon')
      .setDescription('We will be back with fresh news soon...')
// \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
      const giveaway = new discord.MessageEmbed()
      .setTitle('Giveaway')
      .setDescription('**Huge Giveaway**\n\n\n Giveaway: `15 diamond or 700000 breads`\n\n\n On Server: https://discord.gg/rMfEaDePtP\n\n\n Time: Till 7th November 2021 ')

      const pages = [
        news6,
        news5,
        news4,
        news3,
        news2,
        news1,
        news0,
        newscomingsoon
      ]
      const emojiList = ['⬅️','➡️']

      pagination(message, pages, emojiList)
    }
}