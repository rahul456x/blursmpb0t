const Discord = require('discord.js');
const Amebot = require('amethyste-api');
const AmeAPI = new Amebot("bb03f373caa534fcfcbaeae177a65134f44a6e57ba7a7b098be273867b376d8a677ddae3c23c6ded4fec8288573945e8c3483689deb13f229376ad4b5b60231d");


module.exports = {
        name: 'respect',
        description: 'Editing image and send respect one!',
        aliases: [""],
        usage: '',
        category: 'images',
    run: async (bot, message, args) => {
    
        let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        let m = await message.channel.send("**Please Wait...**");
        let buffer = await AmeAPI.generate("missionpassed", { url: user.user.displayAvatarURL({ format: "png", size: 2048 }) });
        let attachment = new Discord.MessageAttachment(buffer, "respect.png");
        message.channel.send(attachment);

    }
};