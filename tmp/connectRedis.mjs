import {createClient} from 'redis'

const redisUrl = 'redis://localhost:6379'

const redisClient = createClient({
  url: redisUrl,
})

const connectRedis = async () => {
  try {
    await redisClient.connect()
    console.log('Redis connected sucessfully...')
  } catch (error) {
    console.log(error)
  }
}

connectRedis()

redisClient.on('error', (error) => console.log(error))
