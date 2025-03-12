// joyclens on github

const { Client, GatewayIntentBits, ActivityType } = require('discord.js');
require('dotenv').config();
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ]
});

const token = process.env.token;

client.once('ready', () => {
    console.log(`logged in as: ${client.user.tag} - ${client.user.id}`);
    
    // status
    // types:
    // - playing         -> { type: ActivityType.Playing }
    // - streaming       -> { type: ActivityType.Streaming, url: 'twitch-url' }
    // - listening       -> { type: ActivityType.Listening }
    // - watching        -> { type: ActivityType.Watching }
    // - competing       -> { type: ActivityType.Competing }
    // - custom          -> { type: ActivityType.Custom }
    
    // example: client.user.setActivity('music', { type: ActivityType.Listening });
    // example: client.user.setActivity('Twitch', { type: ActivityType.Streaming, url: 'https://twitch.tv/username' });
    
    client.user.setActivity('joyclens on github', { type: ActivityType.Playing });
    console.log(`bot status: ${ActivityType.Playing} - ${client.user.presence.activities[0].name}`);
});

client.on('error', error => {
    console.log(error);
});

client.login(token);
