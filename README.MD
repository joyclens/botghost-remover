## botghost status remover
a simple discord bot that changes a bots status

## setup
1. install node.js from [nodejs.org](https://nodejs.org/)

2. clone and setup:
```
npm install discord.js dotenv
echo "token=your_token_here" > .env
```

3. get bot token:
- create app at [discord developer portal](https://discord.com/developers/applications)
- add a bot
- copy token to .env file

4. start:
```
npm start
```

## status customization
to change the bot's status, edit bot.js and modify the following line:
```js
client.user.setActivity('joyclens on github', { type: ActivityType.Playing });
```

available status types:
- playing: `ActivityType.Playing`
- streaming: `ActivityType.Streaming` (requires twitch url)
- listening: `ActivityType.Listening`
- watching: `ActivityType.Watching`
- competing: `ActivityType.Competing`

examples:
```js
client.user.setActivity('music', { type: ActivityType.Listening });
client.user.setActivity('twitch', { type: ActivityType.Streaming, url: 'https://twitch.tv/username' }); // for twitch you can just use "twitch.tv/directory" - this is a homepage for twitch


```
[discord.js docs](https://discord.js.org/docs/packages/discord.js/14.18.0/ActivityType:Enum)
[discord-api-types docs](https://discord-api-types.dev/api/discord-api-types-v10/enum/ActivityType#Competing)


## requirements
- node.js
- discord.js
- bot token

## license
mit license
