"use strict";
const config = require("config");
const sleep = require("sleep");
const { scheduler } = require("./index");
const { Random } = require("./util");
const logger = require("./logger").getLogger(module);

(async () => {
  logger.info("Start crypto-notice-watcher application.");
  logger.info(JSON.stringify(config, null, 2));
  /* 공시 정보를 3~10초에 한번씩 랜덤으로 탐색 */
  while (true) {
    await scheduler();
    
    const randomSecond = Random.getRandomSecond();
    sleep.sleep(randomSecond);
  }
  
})();