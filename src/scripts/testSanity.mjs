import getAllBookmarks from '@/server/persistence/sanityRepository';

getAllBookmarks().then(((bkmks)).map((bk) => {

  console,log(bk.link)

)})