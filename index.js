"use strict";
const { TelegramBot } = require("./bot");
const { upbitTask } = require('./scheduler');


const scheduler = async () => {
  try {
    const bot = new TelegramBot();

    await upbitTask(bot);


  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  scheduler
}