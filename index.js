"use strict";
const { TelegramBot } = require("./bot");
const { upbitTask } = require('./task');
const redis = require('./redis');


const scheduler = async () => {
  try {
    redis.connect();
    const bot = new TelegramBot();

    await upbitTask(bot);

  } catch(err) {
    console.log(err);
  } finally {
    redis.disconnect();
  }
}

module.exports = {
  scheduler
}