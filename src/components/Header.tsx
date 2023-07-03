import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from 'next/link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import Logo from './Logo'

const Header = () => {
  return (
    <header className='pt-5'>
      
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
        <div className='flex-auto m-auto align-middle'>
          <ThemeSwitch />
        </div>
      </div>
{/* 
      <div>
        
        <p className="hidden sm:block leading-2 dark:text-gray-400">
          {siteMetadata.description}
        </p>
      </div>
      <div className="hidden md:block leading-2 flex items-end text-right align-top text-base">
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
      </div>
      <div>
        <ThemeSwitch />
        <MobileNav />
      </div> */}
    </header>
  )
}

export default Header
