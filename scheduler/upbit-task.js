"use strict";
const got = require('got');
const config = require("config");

const upbitTask = async (bot) => {
  try {
    const sites = config.site;

    for (const site of sites) {
      const response = await got(site.url, {
        header: {
          'User-Agent': config.userAgent
        },
        responseType: 'json',
        responseBodyOnly: true
      });

      const posts = response.body.data.posts;

      for (const post of posts) {
        bot.say(`[${post.assets}] ${post.text}`);
      }
    }
  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  upbitTask
}