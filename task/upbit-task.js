"use strict";
const config = require('config');
const Util = require('../util');
const redis = require('../redis');
const logger = require('../logger').getLogger(module);


const upbitTask = async (bot) => {
  try {
    logger.info("Start upbit task watcher.")
    const upbit = config.site.upbit;
    const response = await Util.Request.get(upbit.url);
    const posts = response.data.posts;

    for (const post of posts) {
      if(!isAlreadyNotified(post.id)) {
        const message = `<${post.assets}> ${post.text}`;
        bot.say(message);
        redis.set(post.id, "OK");
        logger.debug(`새로운 공시 정보가 감지됐습니다.`);
        logger.debug(message);
      }
    }
  } catch(e) {
    throw e;
  }
}

const isAlreadyNotified = (id) => redis.get(id)

module.exports = {
  upbitTask
}