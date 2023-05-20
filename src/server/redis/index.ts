import Redis from 'ioredis'

// https://luin.github.io/ioredis/classes/Redis.html

const redisClient = new Redis({
    host: 'localhost',
    port: 6379,
    // password: '<password>'
})

export default redisClient