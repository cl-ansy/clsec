import Image from 'next/image'
import cx from 'classnames'
import gcih from '@public/badges/gcih.png'
import styles from '@client/components/Certs/Certs.module.css'

const Certs = () =>
  <section className={cx(styles.certs, 'section center')} id="certs">
    <h2 className="section__title">Certs</h2>
    <a
      target="_blank"
      rel="noreferrer"
      title="GIAC Certified Incident Handler (GCIH)"
      href="https://www.credly.com/badges/a889e33f-23a4-491f-bf30-7995d6d31655/public_url"
    >
      <Image
        alt="GIAC Certified Incident Handler (GCIH)"
        width={150}
        height={150}
        src={gcih}
      />
    </a>
  </section>

export default Certs
