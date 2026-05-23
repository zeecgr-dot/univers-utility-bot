const TelegramBot = require("node-telegram-bot-api");

const token = "SEU_TOKEN_AQUI";

const bot = new TelegramBot(token, { polling: true });

console.log("BOT ONLINE 🚀");

bot.on("message", async (msg) => {
    
    const chatId = msg.chat.id;

    // ignora mensagens sem texto
    if (!msg.text) return;

    // responde qualquer mensagem
    bot.sendMessage(chatId,
`🔥 OFERTA RECEBIDA

🛍️ Produto:
${msg.text}

⚡ Aproveite antes que acabe.`);
});