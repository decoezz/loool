const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('By Wenteed')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')

  
  
  
 
  
  
  
  
  
  });
  
   
 
 
 
 
 client.on('message',function(message) {
    let prefix = "-";
let args = message.content.split(" ").slice(1).join(" ");
if(message.content.startsWith(prefix + "say")) {
if(!args) return;
message.channel.send(`${args}`); 
}
});
 
 
 
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
    
 
 
 
 
 
client.login(NTA2MTMwNDY3OTc2NjQyNTcx.DtWLVQ.nRAJvNdQF6iO2jO4fSgiVhx6H1c);
