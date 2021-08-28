import cx from 'classnames'
import Navbar from '@client/components/Navbar/Navbar'
import styles from '@client/components/Header/Header.module.css'

const Header = () =>
  <header className={cx(styles.header, 'center')}>
    <h3>
      <a href="#" className="link">
        CL.
      </a>
    </h3>
    <Navbar />
  </header>

export default Header
