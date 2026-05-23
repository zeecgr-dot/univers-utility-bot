const TelegramBot = require("node-telegram-bot-api");

const token = "SEU_TOKEN_AQUI";

const bot = new TelegramBot(token);

bot.sendMessage("@SEU_CANAL", "🚀 BOT ONLINE");
