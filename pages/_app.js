import { ThemeProvider } from '@client/contexts/theme'
import { logMetric } from '@client/utils/datadog'
import '@client/styles/globals.css'

export function reportWebVitals(metric) {
  logMetric(metric)
}

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
