import Head from 'next/head'
import Image from 'next/image'

import styles from '@client/styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CLSec</title>
        <meta name="description" content="CLSec.io" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to CLSec
        </h1>

        <p className={styles.description}>
          Wow, a website.
        </p>

        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Wow &rarr;</h2>
            <p>A card.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="#" rel="noopener noreferrer">
          Powered by{' '}
          <code className={styles.code}>me</code>
        </a>
      </footer>
    </div>
  )
}
