const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "500279773025796127"; // ايدي السررفر
var channel = "500420136629698582";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي **')
    },305);
})

client.on('ready', async() => {
var server = "498026617084313600"; // ايدي السررفر
var channel = "502153499212251136";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('**فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي فدرالي **')
    },305);
})

client.on('ready', () => {
    client.channels.find(c => c.id === '502132646080544788').join();
});

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
[ Welcome To Nuvole. ] ,
ارحبو تراحيب المطرر , تعالو نستانس انتم واخوياكم .. 
ننتظركـــم ، 
[ https://discord.gg/dUV5d7C ] ,
[ https://images-ext-1.discordapp.net/external/5j2inxAmKsGZRr8oGuoeKCynVBzqItDw-eSyBA4mHpM/https/media3.giphy.com/media/3o6Zt6zRQw8yStXfxe/giphy.gif?width=432&height=324 ]
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
[ Welcome To Nuvole. ] ,
ارحبو تراحيب المطرر , تعالو نستانس انتم واخوياكم .. 
ننتظركـــم ، 
[ https://discord.gg/dUV5d7C ] ,
[ https://images-ext-1.discordapp.net/external/5j2inxAmKsGZRr8oGuoeKCynVBzqItDw-eSyBA4mHpM/https/media3.giphy.com/media/3o6Zt6zRQw8yStXfxe/giphy.gif?width=432&height=324 ]
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})

    client.on('ready', () => {
     client.user.setActivity("- Nuvole . By : سو'م .",{type: 'Listening'});

});

client.login(process.env.BOT_TOKEN);
