// require("dotenv").config()

const { Client, Intents } = require('discord.js');
// const { token } = require('./config.json');

const client = new Client({
  intents: [Intents.FLAGS.GUILDS],
  partials: ["MESSAGE"]
});

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);