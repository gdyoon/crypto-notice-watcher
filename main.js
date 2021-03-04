const { scheduler } = require("./index");
const schedule = require('node-schedule');
const config = require('config');

(async () => {
  /* 공시 정보를 7초에 한번씩 탐색 */
  schedule.scheduleJob(config.cronSchedule, async function() {
    await scheduler();
  });
})();