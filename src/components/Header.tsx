import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from 'next/link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Logo from './Logo'

const Header = () => {
  return (
    <header className="flex items-center py-5 justify-left">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-left">
            <div className="mr-3">
              <Logo />
            </div>
              <div className="hidden h-6 text-2xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
             <div className="hidden h-6 text-2xl font-semibold sm:block">
              {siteMetadata.pageTitle}
            </div>
            <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
              {siteMetadata.description}
            </p>
          </div>
        </Link>
        <p className="text-base text-gray-300 leading-2 dark:text-gray-400">{siteMetadata.description}
        </p>
      </div>
      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
            >
              {link.title}
            </Link>
          ))}
        </div>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
