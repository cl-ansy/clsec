import Head from 'next/head'
import Nebula from '@client/components/Nebula/Nebula'
import Header from '@client/components/Header/Header'
import About from '@client/components/About/About'
import Certs from '@client/components/Certs/Certs'
import Skills from '@client/components/Skills/Skills'
import Contact from '@client/components/Contact/Contact'
import ScrollToTop from '@client/components/ScrollToTop/ScrollToTop'
import Footer from '@client/components/Footer/Footer'

const Index = () =>
  <div className="app" id="top">
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="CLSec.io" />
      <title>CLSec</title>
    </Head>

    <Nebula />

    <main>
      <Header />
      <About />
      <Certs />
      <Skills />
      <Contact />
    </main>
    <ScrollToTop />
    <Footer />
  </div>

export default Index
