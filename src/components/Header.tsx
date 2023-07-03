import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from 'next/link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Logo from './Logo'

const Header = () => {
  return (
    <header className='pt-5'>
      <div className='flex flex-col'>        
        <div className='flex flex-row '>
          <div className='flex-none'>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <Logo />
            </Link>
          </div>
          <div className="flex-initial text-xl font-bold m-auto pb-8 align-middle sm:text-l h-4">
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              {siteMetadata.headerTitle}
            </Link>
          </div>
          <div className='flex-auto pl-10 m-auto align-middle'>
            <MobileNav />
          </div>
          <div className='hidden lg:block flex-auto pl-10 m-auto align-middle'>
            <MobileNav />
          </div>
          <div className="hidden md:block m-auto flex-auto text-center justify-center align-text-bottom">
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
          <div className='flex-auto m-auto text-center align-middle'>
            <ThemeSwitch />
          </div>
        </div>
        <div className='hidden md:block leading-2 dark:text-gray-400'>
          {siteMetadata.description}
        </div>
      </div>
    </header>
  )
}

export default Header
