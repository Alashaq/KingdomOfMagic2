const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message => {
if (message.content === '!spam') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(سباام يولد يلعن اومم الفله ${x})
          .then(m => {
            count++;
          })

        }
      }
});

client.login("NDU2NTU0NzY0NDcwMDU5MDE4.DivYLA.oq_7LLyISAea8bUzp-swMvFQ5C4");
