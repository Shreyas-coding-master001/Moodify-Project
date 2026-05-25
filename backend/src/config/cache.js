import redis from "ioredis";
import { config } from "../config/config.js" ;

const Redis = redis.default;

const redisClient = new Redis({
    host: config.REDIS_HOST,
    port:  config.REDIS_PORT,
    password: config.REDIS_PASSWORD
});

redisClient.on("error", (err) => {
    console.error("Error Connecting to Redis:\n", err);
})

await redisClient.on("connect", () => {
    console.log("Server Connected to Redis Successfully");
});

export default redisClient;