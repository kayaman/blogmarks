import * as fsp from 'fs/promises'

const importedBookmarks = []

const filename = '/home/kayaman/Downloads/kayaman_bookmarks.html'
// const re = new RegExp(/<a.+?\s*href\s*=\s*["\']?([^"\'\s>]+)["\']?/ig);
const re = new RegExp(/<a.+?\s*href\s*=\s*["\']?([^"\'\s>]+)["\']?/ig)
const re2 = new RegExp(/<A HREF=\"(.+)\"/ig)

const file = await fsp.open(filename, 'r')
for await (const line of file.readLines()) {
  const match = line.match(re)
  const link = match || null
  importedBookmarks.push(link)
  console.log(link)
}

console.log(importedBookmarks)
