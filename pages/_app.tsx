import type { AppProps } from 'next/app'
import { ThemeProvider } from '~/lib/theme'
import '../styles/extra.css'
import '../styles/globals.css'
import '../styles/swiper.css'
import '../styles/main.css'
import '../styles/contributors.css'
import '../styles/navbar2.css';

function MyApp({ Component, pageProps }: AppProps) {



return (
  <ThemeProvider>

    <Component {...pageProps} />
  </ThemeProvider>
)
}

export default MyApp
