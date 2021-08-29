import { useState, useEffect } from 'react'
import { Sun, Moon } from 'react-feather'

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme)
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light'

  useEffect(() => {
    document.body.dataset.theme = activeTheme
    window.localStorage.setItem('theme', activeTheme)
  }, [activeTheme])

  const handleToggleTheme = () => {
    setActiveTheme(inactiveTheme)
  }

  return (
    <button
      type="button"
      onClick={handleToggleTheme}
      className="center btn btn--icon"
      aria-label="toggle theme"
    >
      {activeTheme === 'dark' ? <Sun /> : <Moon />}
    </button>
  )
}

export default ThemeToggle
