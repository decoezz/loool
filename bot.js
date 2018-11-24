const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});

client.on('ready', async() => {
var server = "Id server"; // ايدي السررفر
var channel = "id room";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam ,  , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , ')
    },400);
})

client.login(توكن حسابك);
