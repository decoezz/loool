const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});

client.on('ready', async() => {
var server = "505417459369508884"; // ايدي السررفر
var channel = "515848416199311362";//ايدي الروم
    setInterval(()=>{
   client.on('message', message => {
    if (message.content === '!spam') {
          let count = 0;
          let ecount = 0;
          for(let x = 0; x < 90000; x++) {
            message.channel.send(`credit credit credit credit credit credit credit credit credit credit credit credit credit credit
credit credit credit credit credit credit credit credit credit credit credit credit credit credit
credit credit credit credit credit credit credit credit credit credit credit credit credit credit
credit credit credit credit credit credit credit credit credit credit credit credit credit credit
credit credit credit credit credit credit credit credit credit credit credit credit credit credit
credit credit credit credit credit credit credit credit credit credit credit credit credit credit ${x}`)
              .then(m => {
                count++;
              })
              
            }
          }
    });

client.login("process.env.TOKEN");
