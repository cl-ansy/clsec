import { ThemeProvider } from '@client/contexts/theme'
import '@client/styles/globals.css'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
