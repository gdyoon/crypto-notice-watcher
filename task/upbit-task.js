"use strict";
const config = require('config');
const Util = require('../util');
const logger = require('../logger').getLogger(module);


const upbitTask = async (bot, redis) => {
  try {
    logger.info("Start upbit task watcher.")
    const upbit = config.site.upbit;
    const response = await Util.Request.get(upbit.url);
    const posts = response.data.posts;

    for (const post of posts) {
      const isNotified = await redis.get(post.id);
      
      if(!isNotified) {
        const message = `[${post.assets}] ${post.text} ${post.url}`;
        await bot.say(message);
        redis.set(post.id, "OK");
        logger.debug(message);
      }
    }
  } catch(e) {
    throw e;
  }
}

module.exports = {
  upbitTask
}