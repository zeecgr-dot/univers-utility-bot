const TelegramBot = require('node-telegram-bot-api');

const token = 
'8605464110:AAHggkvlL23mDHcXnRjY_pQKxUoskTvCThc';

const bot = new TelegramBot(token, { polling: true });

const canal = '@universpromo';

bot.sendMessage(canal, '🚀 BOT ONLINE');

bot.on('message', (msg) => {

  if (!msg.text) return;

  if (msg.text.startsWith('/')) return;

  bot.sendMessage(canal, msg.text);

});