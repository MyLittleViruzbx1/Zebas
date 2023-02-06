const Discord = require('discord.js');
const {Client} = require("discord.js")

const client = new Client({intents: [131071]});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (message) => {
  if (message.content === '!hola') {
    message.reply('Hola, ¿cómo estás?');
  }
});

client.login('My token');