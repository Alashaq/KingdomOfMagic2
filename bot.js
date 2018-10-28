var ServerID = "494284550789136384"; //اي دي السيرفر
var ChannelID = "494942074542620683";// اي دي الروم
const prefix = '.'
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    if(message.content === '^^DailyForAll'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === '^^AllCredit'){
        message.channel.send('#credits')
    }
});


client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);



if (command == "say") {
let rank = message.guild.member(message.author).roles.find('name', '.');
if (!rank) return message.reply('انت لا تمتلك الرتبه المخصصه لهذا الامر')
  message.channel.send(args.join("  "))
    message.delete();
  }
});



client.on('warn', console.warn);

client.on('error', console.error);


client.on('ready', () => console.log('ProBot Credits Miner Discord.js Script','\n','By Alphacodes','\n','ProBot credits miner is ready!'));

client.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7)) 


    });
}

var timer = setTimeout(timerFunc, 1000);



client.login(process.env.BOT_TOKEN);
