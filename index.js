const TelegramBot = require("node-telegram-bot-api");

const token = 
"8605464110:AAHggkvlL23mDHcXnRjY_pQKxUoskTvCThc";

const bot = new TelegramBot(token);

bot.sendMessage("@universpromo", "🚀 BOT ONLINE");