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
