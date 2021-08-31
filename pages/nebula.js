import Head from 'next/head'
import Nebula from '@client/components/Nebula/Nebula'

const _Nebula = () =>
  <div className="app" id="top">
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="CLSec.io" />
      <title>CLSec</title>
    </Head>

    <Nebula />
  </div>

export default _Nebula
