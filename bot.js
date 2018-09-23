const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('**Pong!**');
  }
});

client.on('message', message => {
if (message.content === 'ي الله') {
      let count = 0;
      let ecount = 0;
      for(let x = 0; x < 90000; x++) {
        message.channel.send(`**تـم التهكـير __طنـآخهه__ء ** ${x}`)
          .then(m => {
            count++;
          })
          
        }
      }
});

client.login(process.env.BOT_TOKEN);
client.login(process.env.BOT_TOKEN2);
client.login(process.env.BOT_TOKEN3);
client.login(process.env.BOT_TOKEN4);
client.login(process.env.BOT_TOKEN5);
