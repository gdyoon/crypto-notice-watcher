"use strict";
const { TelegramBot } = require("./bot");
const { upbitTask } = require('./task');
const { RedisClient } = require('./redis');
const logger = require('./logger').getLogger(module);


const scheduler = async () => {
  let redis;
  try {
    redis = new RedisClient();
    const bot = new TelegramBot();

    await upbitTask(bot, redis);

  } catch(e) {
    logger.error(e);
  } finally {
    redis.disconnect();
  }
}

module.exports = {
  scheduler
}