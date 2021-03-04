"use strict";
const config = require('config');
const Util = require('../util');


const upbitTask = async (bot) => {
  try {
    const upbit = config.site.upbit;
    const response = await Util.Request.get(upbit.url);
    const posts = response.data.posts;

    for (const post of posts) {
      bot.say(`[${post.assets}] ${post.text}`);
    }
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  upbitTask
}