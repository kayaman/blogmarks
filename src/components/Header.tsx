import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from 'next/link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Logo from './Logo'

const Header = () => {
  return (
    <header className="pt-5">
      <div className="flex flex-col">
        <div className="flex flex-row ">
          <div className="flex-none">
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <Logo />
            </Link>
          </div>
          <div className="sm:text-l m-auto h-4 flex-initial pb-8 align-middle text-xl font-bold">
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              {siteMetadata.headerTitle}
            </Link>
          </div>
          <div className="m-auto flex-auto pl-10 align-middle">
            <MobileNav />
          </div>
          <div className="m-auto hidden flex-auto pl-10 align-middle lg:block">
            <MobileNav />
          </div>
          <div className="m-auto hidden flex-auto justify-center text-center align-text-bottom md:block">
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
          <div className="m-auto flex-auto text-center align-middle">
            <ThemeSwitch />
          </div>
        </div>
        <div className="leading-2 hidden dark:text-gray-400 md:block">
          {siteMetadata.description}
        </div>
      </div>
    </header>
  )
}

export default Header
