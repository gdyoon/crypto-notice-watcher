"use strict";

const got = require('got');
const config = require("config");

const get = async (url) => {
  try {
    const response = await got(url, {
      header: {
        'User-Agent': config.userAgent
      },
      responseType: 'json',
      responseBodyOnly: true
    });

    return response.body;
  } catch(e) {
    throw e;
  }
}

module.exports = {
  get
}