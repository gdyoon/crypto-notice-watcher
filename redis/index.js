const redis = require('redis');

let client;

const get = (key) => {
  return client.get(key);
}

const set = (key, value) => {
  client.set(key, value);
}

const connect = () => client = redis.createClient();
const disconnect = () => client.end(true);

module.exports = {
  connect,
  get,
  set,
  disconnect
}