import sanityRepository from '../src/server/persistence/sanityRepository.js'
//import redisClient from './server/redis'
// /home/kayaman/Projects/platform-bookmarks/bookmarks/src/server/persistence/sanityRepository.ts
// src/server/persistence/sanityRepository

const allBookmarks = await sanityRepository.allBookmarks
// console.log(allBookmarks)

for (bookmark in allBookmarks) {
    //redisClient.set(link, title)
    console.log('..')
}
