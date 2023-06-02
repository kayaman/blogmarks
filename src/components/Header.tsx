import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from 'next/link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Logo from './Logo'
import {Hits, InstantSearch, SearchBox} from 'react-instantsearch-hooks-web'
import BookmarkCard from './BookmarkCard'
import algoliasearch from 'algoliasearch'

const searchClient = algoliasearch('IUBI46TDU9', '934609271f37b4520c961634b5f9b592')

const hitHandler = (hit) => {
  return <BookmarkCard bookmark={hit} />
}

const Header = () => {
  return (
    <header className="flex items-center pt-1 pb-2 pl-5 pr-5 justify-left">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-left">
            <div className="mr-0">
              <Logo />
            </div>
            <div className="h-5 text-2xl font-semibold sm:block">{siteMetadata.headerTitle}</div>
            <div className="h-2 text-sm font-semibold sm:block">{siteMetadata.pageTitle}</div>
          </div>
        </Link>
        <p className="text-base text-gray-300 leading-2 dark:text-gray-400 flex-nowrap">
          {siteMetadata.description}
        </p>
      </div>
      <div className="flex flex-col mb-0 ml-0 mr-0">
        <div className="flex items-start justify-start pt-0 text-base text-right align-center" mt-0>
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-1 text-lg text-gray-900 dark:text-gray-100 sm:p-4"
            >
              {link.title}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
        <div className="flex justify-end align-middle justify-items-end"></div>

        <InstantSearch searchClient={searchClient} indexName="bookmarksIndexProd">
          <SearchBox className="" />
        </InstantSearch>
      </div>
      <div>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
