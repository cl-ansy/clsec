import { datadogLogs } from '@datadog/browser-logs'

datadogLogs.init({
  clientToken: process.env.NEXT_PUBLIC_DD_CLIENT_TOKEN,
  site: 'datadoghq.com',
  service: 'UI',
  env: process.env.NEXT_PUBLIC_ENV,
  forwardErrorsToLogs: true,
  sampleRate: 100
})

export const logMetric = (metric) => {
  const messages = {
    FCP: 'First Contentful Paint',
    LCP: 'Largest Contentful Paint',
    CLS: 'Cumulative Layout Shift',
    FID: 'First Input Delay',
    TTFB: 'Time to First Byte',
  }

  const message = messages[metric.name] || metric.name
  datadogLogs.logger.info(message, metric);
}
