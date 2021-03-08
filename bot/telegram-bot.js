"use strict";
const TelegramBot = require("node-telegram-bot-api");
const config = require("config");

class Telegram {
  constructor() {
    this._token = config.bot.telegram.token;
    this._bot = new TelegramBot(this._token);
    this._chatId = config.bot.telegram.chatId;
  }

  async say(message) {
    try {
      await this._bot.sendMessage(this._chatId, message);
    } catch(e) {
      throw e;
    }
  }

}

module.exports = Telegram;