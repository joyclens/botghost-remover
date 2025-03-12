  // needs: nodejs, discord.js (npm i discord.js), bot token

  const { Client, GatewayIntentBits } = require('discord.js');
  const client = new Client({
      intents: [
          GatewayIntentBits.Guilds,
          GatewayIntentBits.GuildMessages,
          GatewayIntentBits.MessageContent,
          GatewayIntentBits.GuildMembers,
      ]
  });

  // put your bot token here
  const token = 'put-token-here';

  // bot startup
  client.once('ready', () => {
      console.log('bot is now online');
      console.log(`logged in as: ${client.user.tag}`);
    
      // bot status
      client.user.setActivity('hey!', { type: 'PLAYING' });
  });

  // error stuff
  client.on('error', error => {
      console.log(error);
  });

  // start the bot
  client.login(token);
