const TelegramBot = require('node-telegram-bot-api');

const token = 'SEU_TOKEN_AQUI';

const bot = new TelegramBot(token, { polling: true });

const canal = '@universpromo';

console.log('BOT ONLINE 🚀');

bot.on('message', async (msg) => {

  if (!msg.text) return;

  if (msg.text.startsWith('/')) return;

  const linhas = msg.text.split('\n');

  const produto = linhas[0] || 'Produto';
  const preco = linhas[1] || 'Preço não informado';
  const link = linhas[2] || '';

  const mensagem = `
🔥 OFERTA DO DIA

🛍️ ${produto}
💸 ${preco}

🔗 ${link}

⚡ corre antes que acabe
`;

  bot.sendMessage(canal, mensagem);

});