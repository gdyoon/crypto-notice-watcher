"use strict";
const winston = require('winston');
const path = require('path');
const moment = require("moment-timezone");
const config = require("config");

const LogFormat = winston.format.printf(
  (info) => `[${moment().tz(config.timezone).format("YYYY-MM-DD HH:mm:ss")}][${info.level.toUpperCase()}][${info.label}][${process.pid}]${info.message}`
);

const logger = (_module) => {
  return winston.createLogger({
    level: 'debug',
    format: winston.format.combine(
      winston.format.label({ label: path.basename(_module.filename)}),
      winston.format.timestamp(),
      LogFormat
    ),
    transports: [
      new winston.transports.File({ filename: 'crypto-watcher.log' }),
      new winston.transports.Console()
    ]
  });
}


const getLogger = (targetModule) => logger(targetModule)

module.exports = {
  getLogger
}