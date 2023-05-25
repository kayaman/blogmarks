import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from 'next/link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Logo from './Logo'

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between py-3">
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-start">
              <Logo />
              <div className="mr-3"></div>
              <div className="h-10 text-3xl font-semibold sm:block">{siteMetadata.headerTitle}</div>
            </div>
          </Link>
        </div>
        <div className="flex items-end text-base leading-5 align-middle">
          <div className="hidden sm:block"></div>
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="content-center text-gray-900 align-top p-1font-medium dark:text-gray-100 sm:p-4"
            >
              {link.title}
            </Link>
          ))}
          <ThemeSwitch />
          <MobileNav />
        </div>
      </header>
      <p className="text-base text-gray-500 dark:text-gray-400">{siteMetadata.description}</p>
    </>
  )
}

export default Header
