const redis = require('redis');
const client = redis.createClient();

const get = (key) => {
  return client.get(key);
}

const set = (key, value) => {
  client.set(key, value);
}

const disconnect = () => client.end(true);

module.exports = {
  get,
  set,
  disconnect
}