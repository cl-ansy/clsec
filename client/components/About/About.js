import cx from 'classnames'
import { GitHub, Linkedin } from 'react-feather'
import styles from '@client/components/About/About.module.css'

const About = () =>
  <div className={cx(styles.about, 'center')}>
    <h1>
      Hi, I&apos;m <span className={styles['about__name']}>Chris.</span>
    </h1>

    <h2 className={styles['about__role']}>A Software Engineer.</h2>

    <p className={styles['about__desc']}>
      Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.
    </p>

    <div className={cx(styles['about__contact'], 'center')}>
      {/*<a href="">
        <button type="button" className="btn btn--outline">
          Resume
        </button>
      </a>*/}

      <a
        href="https://github.com/cl-ansy"
        target="_blank"
        rel="noreferrer"
        aria-label="github"
        className="link link--icon"
      >
        <GitHub />
      </a>

      <a
        href="https://www.linkedin.com/in/cslansing/"
        target="_blank"
        rel="noreferrer"
        aria-label="linkedin"
        className="link link--icon"
      >
        <Linkedin />
      </a>
    </div>
  </div>

export default About
