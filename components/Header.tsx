import Link from 'next/link'
import { header } from '../theme.config'

const Header = () => (
  <div className='max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
    <nav className='flex justify-between items-center py-10 font-bold'>
      <Link href='/'>
        <a className='text-xl' aria-label={header.site}>
          {/* <img
            className='inline-block mr-2'
            style='width: 36px; height: 31px'
            alt='logo'
            src='/logo.svg'
          /> */}
          <span className='hidden md:inline'>{header.site}</span>
        </a>
      </Link>

      <div className='text-sm text-gray-500 leading-5'>
        {header.github && (
          <a
            className='hover:text-gray-700'
            href={`https://github.com/${header.github}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            <span className='hidden sm:inline'>GitHub</span>
          </a>
        )}
        <span className='mr-2 ml-2'>·</span>
        <a className='hover:text-gray-700' href='/feed.rss'>
          RSS<span className='hidden sm:inline'> Feed</span>
        </a>
      </div>
    </nav>
  </div>
)

export default Header