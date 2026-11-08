import { Redis } from "ioredis"

const redis = process.env.REDIS_URL
    ? new Redis(process.env.REDIS_URL)
    : new Redis({ host: "localhost", port: 6379 })

export default redis
