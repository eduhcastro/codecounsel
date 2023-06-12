import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '~/lib/theme'

const Nav = () => {
  const { isDarkMode } = useTheme()

  return (
    <nav className="w-full border-b bg-scale-300 p-4">
      <Link href="https://supabase.com/">
        <a className="flex">
          <Image
            src={
              isDarkMode
                ? '/images/collabo/codeconsue-dark.png'
                : '/images/collabo/codeconsue-light.png'
            }
            alt="Supabase Logo"
            height={30}
            width={180}
          />
        </a>
      </Link>
    </nav>
  )
}

export default Nav
