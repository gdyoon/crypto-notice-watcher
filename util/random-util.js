"use strict";
const _ = require("lodash");
const config = require("config");

const getRandomSecond = () => {
    const minSecond = config.schedule.randomSecond.min;
    const maxSecond = config.schedule.randomSecond.max + 1;
    const pickOne = _.shuffle(_.range(minSecond, maxSecond))[0];

    return pickOne;
}

module.exports = {
    getRandomSecond
}