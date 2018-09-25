const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('======================================')
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log('')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=======================================')
});





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
    if(message.content === '^^RepForRobben'){
        message.channel.send('#rep <@371060496276783104>')
    }
});

client.on('message', message => {
    if(message.content === '^^RepForBoss'){
        message.channel.send('#rep <@443152649899212810>')
    }
});

client.on('message', message => {
    if(message.content === '^^RepForAlashaq'){
        message.channel.send('#rep <@346045919072092161>')
    }
});



client.on('message', message => {
if (message.content === "سبام" + "<@" + `${client.user.id}` + ">") {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`سباام يولد يلعن اومم الفله ${x}`)
          .then(m => {
            count++;
          })
          
        }
      }
});




client.login('NDU2NTU0NzY0NDcwMDU5MDE4.DoxK8w.vfUNbcDfjO9E9mXM7bjzbch0YBY');
