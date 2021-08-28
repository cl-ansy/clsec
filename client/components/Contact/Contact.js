import cx from 'classnames'
import styles from '@client/components/Contact/Contact.module.css'

const Contact = () =>
  <section className={cx(styles.contact, 'section center')} id="contact">
    <h2 className="section__title">Contact</h2>
    <a href="mailto:cslansin@gmail.com">
      <button type="button" className="btn btn--outline">
        Email me
      </button>
    </a>
  </section>

export default Contact
