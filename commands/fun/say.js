const Discord = require('discord.js');

module.exports = {
   name: 'say',
   aliases: ['tell'],
   description: 'Tells',
   cooldown: 5,


   async run(bot, message, args) {
       const messageToSay = args.join("  ");
       try{
           await message.channel.send(messageToSay).then(() => message.delete());
       } catch (err) {
           console.log(err);
       }
   }





}