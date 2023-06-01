import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from 'next/link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Logo from './Logo'
import algoliasearch from 'algoliasearch'
import {Hits, InstantSearch} from 'react-instantsearch-hooks-web'
import {SearchBox} from 'react-instantsearch-hooks-web'

export const hitsHandler = ({hit}) => {
  console.log(hit)
  return <div>{hit.title}</div>
}
const searchClient = algoliasearch('IUBI46TDU9', '934609271f37b4520c961634b5f9b592')

const Header = () => {
  return (
    <header className="flex items-start pt-6 pb-5 pl-5 pr-5 justify-left">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-left">
            <div className="mr-3">
              <Logo />
            </div>
            <div className="hidden h-5 text-2xl font-semibold sm:block">
              {siteMetadata.headerTitle}
            </div>
            <div className="h-5 text-xl font-semibold sm:block">{siteMetadata.pageTitle}</div>
          </div>
        </Link>
        <p className="text-base text-gray-300 leading-2 dark:text-gray-400">
          {siteMetadata.description}
        </p>
      </div>

      <div className="flex flex-col flex-nowrap">
        <div className="top-0 flex items-start text-base text-right align-top flex-nowrap justify-self-start leading-2">
          <div className="text-lg">
            {headerNavLinks.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="p-1 text-lg text-gray-900 dark:text-gray-100 sm:p-4"
              >
                {link.title}
              </Link>
            ))}
          </div>
          <ThemeSwitch />
          <div>
            <InstantSearch searchClient={searchClient} indexName="bookmarksIndexProd">
              <SearchBox />
              <Hits hitComponent={hitsHandler} />
            </InstantSearch>
          </div>
        </div>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
