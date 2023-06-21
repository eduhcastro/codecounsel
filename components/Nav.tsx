import { useTheme } from '~/lib/theme'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@supabase/ui";


const Nav = () => {
  const { isDarkMode } = useTheme()

  return (
    <nav className="w-full border-b bg-scale-300 p-4 navN">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link href="/">
          <a style={{ marginLeft: "50px" }}>
            <Image
              src={isDarkMode ? '/images/collabo/codeconsue-dark.png' : '/images/collabo/codeconsue-light.png'}
              alt="Supabase Logo"
              height={35}
              width={200}
            />
          </a>
        </Link>

        <div style={{ marginRight: "50px" }}>
          {/* Aqui você pode adicionar o botão desejado */}
          <Button type="outline">Buy Me a Coffee</Button>

        </div>
      </div>
    </nav>

  )
}

export default Nav
