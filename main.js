"use strict";
const config = require("config");
const sleep = require("sleep-promise");
const { scheduler } = require("./index");
const { Random } = require("./util");
const logger = require("./logger").getLogger(module);
const cowsay = require("cowsay");

const printBeforeStart = () => {
  logger.info(cowsay.think({ text: "Start crypto-notice-watcher application" }));
  logger.info(JSON.stringify(config, null, 2));
}

(async () => {
  printBeforeStart();

  while (true) {
    await scheduler();

    await sleep(Random.getRandomSecond() * 1000);
  }
  
})();