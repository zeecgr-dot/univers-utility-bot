const TelegramBot = require("node-telegram-bot-api");

const token = "SEU_TOKEN_AQUI";

const bot = new TelegramBot(token, { polling: true });

console.log("BOT ONLINE 🚀");

const canal = "@universpromo";

bot.on("message", async (msg) => {

    if (!msg.text) return;

    // ignora mensagens do próprio canal
    if (msg.chat.type === "channel") return;

    // envia pro canal
    bot.sendMessage(canal, msg.text);

});