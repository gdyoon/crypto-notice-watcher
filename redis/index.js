const redis = require('redis');
const { promisify } = require('util');

class RedisClient {
  constructor() {
    this._client = redis.createClient();
  }

  async get(key) {
    const getAsync = promisify(this._client.get).bind(this._client);
    return getAsync(key);
  }

  set(key, value) {
    this._client.set(key, value);
  }

  disconnect() {
    this._client.end(true);
  }
}

module.exports = {
  RedisClient
}