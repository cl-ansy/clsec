import dynamic from 'next/dynamic'
import { useState } from 'react'
import cx from 'classnames'
import { Menu, X } from 'react-feather'
import styles from '@client/components/Navbar/Navbar.module.css'

const ThemeToggle = dynamic(
  () => import('@client/components/ThemeToggle/ThemeToggle'), {
    ssr: false,
  }
)

const Navbar = () => {
  const [showNavList, setShowNavList] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className={styles['nav__list']}
      >
        <li className={styles['nav__list-item']}>
          <a href="#certs" onClick={toggleNavList} className="link link--nav">
            Certs
          </a>
        </li>

        <li className={styles['nav__list-item']}>
          <a href="#skills" onClick={toggleNavList} className="link link--nav">
            Skills
          </a>
        </li>

        <li className={styles['nav__list-item']}>
          <a href="#contact" onClick={toggleNavList} className="link link--nav">
            Contact
          </a>
        </li>
      </ul>

      <ThemeToggle />

      <button
        type="button"
        onClick={toggleNavList}
        className={cx(styles['nav__hamburger'], 'btn btn--icon')}
        aria-label="toggle navigation"
      >
        {showNavList ? <X /> : <Menu />}
      </button>
    </nav>
  )
}

export default Navbar
