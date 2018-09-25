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

client.login("3DWzQ1NjU1NDc2NDQ3MDA1OTAxOCwiNDUuMjQ3LjIyNi44NiJd.DowwKg.j8Q2m8jxDraA2pUNt_KuH86xJ8A");
