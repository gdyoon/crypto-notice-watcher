"use strict";
const config = require('config');
const Util = require('../util');
const redis = require('../redis');


const upbitTask = async (bot) => {
  try {
    const upbit = config.site.upbit;
    const response = await Util.Request.get(upbit.url);
    const posts = response.data.posts;

    for (const post of posts) {
      if(!isAlreadyNotified(post.id)) {
        const message = `[${post.assets}] ${post.text}`;

        bot.say(message);
        redis.set(post.id, "OK");
      } else {
        console.log(`${post.assets} 은 이미 알려진 공시입니다.`);
      }
    }
  } catch(err) {
    console.log(err);
  }
}

const isAlreadyNotified = (id) => redis.get(id)

module.exports = {
  upbitTask
}