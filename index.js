const _ = require("lodash");
const got = require('got');
const process = require("process");
const config = require("config");
const { TelegramBot } = require("./bot");

const handler = async (event, context) => {
  try {
    const telegramBot = new TelegramBot();
    
    // for(const site of sites) {
    //   await telegramBot.say(`[${site.getName()}] 지금 구매할 수 있습니다.\n${site.getUrl()}`);
    // }
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
        telegramBot.say(`[${post.assets}] ${post.text}`);
      }
    }
  } catch(err) {
    console.log(err);
  }
}

(async () => {
  await handler();
})();

module.exports = {
  handler
}