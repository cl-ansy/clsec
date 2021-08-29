import Document, { Html, Head, Main, NextScript } from 'next/document'

class _Document extends Document {
  render() {
    const dangerouslySetInitialTheme = `
      function getUserPreference() {
        if(window.localStorage.getItem('theme')) {
          return window.localStorage.getItem('theme')
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      }
      document.body.dataset.theme = getUserPreference()
    `

    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <script dangerouslySetInnerHTML={{ __html: dangerouslySetInitialTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default _Document
