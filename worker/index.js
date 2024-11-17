const redis = require("redis");
const { REDIS_HOST, REDIS_PORT } = require("./keys");
const client = redis.createClient({
  socket: {
    host: REDIS_HOST,
    port: REDIS_PORT,
  },
});
const sub = client.duplicate();

// connect the client and the subscriber to the redis server
(async () => {
  try {
    await Promise.all([client.connect(), sub.connect()]);
  } catch (error) {
    console.error(error);
  }
})();

const listener = (message, channel) => {
  console.log(`Received message: ${message} from channel: ${channel}`);
  client.hSet("values", message, fib(parseInt(message)));
};

function fib(index) {
  if (index < 2) return 1;
  return fib(index - 1) + fib(index - 2);
}

sub.subscribe("insert", listener);
console.log("Worker started");

process.on("unhandledRejection", (reason, promise) => {
  console.error(reason);
  process.exit(1);
});
