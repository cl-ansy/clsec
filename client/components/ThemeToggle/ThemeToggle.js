import { useState, useEffect } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'

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
      {activeTheme === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
    </button>
  )
}

export default ThemeToggle
