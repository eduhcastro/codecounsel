import { IconMoon, IconSun } from '@supabase/ui'
import { useTheme } from '~/lib/theme'

/**
 * React component for toggling dark mode
 * @returns JSX.Element
 */
export default function DarkModeToggle(): JSX.Element {
  const { isDarkMode, toggleTheme } = useTheme()

  /**
  * Function to toggle dark mode on and off and set the appropriate class on the document element and body
  */
  const toggleDarkMode = () => {
    localStorage.setItem('supabaseDarkMode', (!isDarkMode).toString())
    toggleTheme()

    const key = localStorage.getItem('supabaseDarkMode')
    const documentElement = document.documentElement

    if (key === 'true') {
      documentElement.classList.add('dark')
      document.querySelector('body')?.classList.remove('body-light')
    } else {
      documentElement.classList.remove('dark')
      document.querySelector('body')?.classList.add('body-light')
    }
  }

  return (
    <div className="flex items-center dark:bg-scale-300 bg-white" style={{
      position: "fixed",
      bottom: "10px",
      display: "flex",
      flexDirection: "column-reverse",
      right: 0,
      borderRadius: "15px",
      width: "45px",
      height: "80px",
      marginRight: "5px"
    }}>

      <div style={{ marginBottom: "15px" }}>

        <svg xmlns="http://www.w3.org/2000/svg" style={{ marginBottom: "5px" }} width="21" height="21" fill="currentColor" className="bi bi-translate text-scale-900 hover" viewBox="0 0 21 21">
          <path d="M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z" />
          <path d="M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z" />
        </svg>

        {isDarkMode ? (
          <IconMoon className="text-scale-900 hover" strokeWidth={2} onClick={() => toggleDarkMode()} />
        ) : (
          <IconSun className="text-scale-900 hover" strokeWidth={2} onClick={() => toggleDarkMode()} />
        )}

      </div>

    </div>
  )
}

