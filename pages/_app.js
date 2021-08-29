import { logMetric } from '@client/utils/datadog'
import '@client/styles/globals.css'

export function reportWebVitals(metric) {
  logMetric(metric)
}

const App = ({ Component, pageProps }) =>
  <Component {...pageProps} />

export default App
