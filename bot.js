const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(Logged in as ${client.user.tag}!);
});

client.on('ready', async() => {
var server = "505417459369508884"; // ايدي السررفر
var channel = "515848416199311362";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam ,  , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , Dalida Spam , ')
    },400);
})

client.login("NTAwMDI3MzI0OTk0MTU4NjIz.Dtq_TQ.3iVxjIJpHxWBt4rzt8Na_TYdRD8");
