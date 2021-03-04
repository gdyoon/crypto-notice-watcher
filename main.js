const { scheduler } = require("./index");
const schedule = require('node-schedule');

(async () => {
  /* 공시 정보를 5초에 한번씩 탐색 */
  schedule.scheduleJob('*/5 * * * * *', async function() {
    await scheduler();
  });
})();