const redis = require('redis');

class RedisClient {
  constructor() {
    this._client = redis.createClient();
  }

  get(key) {
    return this._client.get(key);
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