"use strict";
const winston = require('winston');
const path = require('path');

const LogFormat = winston.format.printf(
  (info) => `[${info.timestamp}][${info.level.toUpperCase()}][${info.label}][${process.pid}]${info.message}`
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


const getLogger = (myModule) => logger(myModule)

module.exports = {
  getLogger
}