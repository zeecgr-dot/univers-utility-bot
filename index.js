
const TelegramBot = require('node-telegram-bot-api');

const token = 'SEU_TOKEN_AQUI';

const bot = new TelegramBot(token, { polling: true });

const canal = '@universpromo';

// mensagem online
bot.sendMessage(canal, '🚀 BOT ONLINE');

// reenviar tudo que receber
bot.on('message', (msg) => {

  // ignora comandos
  if (msg.text.startsWith('/')) return;

  bot.sendMessage(canal, msg.text);

});