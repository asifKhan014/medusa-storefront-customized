'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const formatPathName = (path: string) => {
  return path
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const Breadcrumb = () => {

  const paths = usePathname()
  const pathNames = paths.split('/').filter(path => path)

  return (
    <div className="content-container mx-auto w-full overflow-hidden px-4 xl:px-9 pt-4 pb-6">
      <ul className="flex items-center gap-2.5 font-jet-brains-mono text-sm whitespace-nowrap overflow-auto scrollbar-hide">
        <li>
          <Link href='/' className="hover:text-brand-yellow focus:text-brand-gray transition-colors ease-linear">Home</Link>
        </li>
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`
          const formattedLink = formatPathName(link)
          return (
            <li key={index} className='flex items-center gap-2.5'>
              <span>\</span>
              {index === pathNames.length - 1 ? (
                <p>{formattedLink}</p>
              ) : (
                <Link href={href} className="hover:text-brand-yellow focus:text-brand-gray transition-colors ease-linear">{formattedLink}</Link>
              )}
            </li>
          )
        })
        }
      </ul>
    </div>
  )
}

export default Breadcrumb
