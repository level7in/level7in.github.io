import Typography from "typography"
// import Wordpress2016 from "typography-theme-wordpress-2016"
import funstonTheme from "typography-theme-funston"
import "theme/global.less"

funstonTheme.overrideThemeStyles = () => {
  return {
    img: {
      margin: 0,
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    "a:hover": {
      color: `#3c67b5`,
    },
    "blockquote":{
      "border-left":` 0.2625rem solid var(--color)`,
    }
  }
}

// delete Wordpress2016.googleFonts

const typography = new Typography(funstonTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}
// 夜间模式切换
;(function() {
  window.__onThemeChange = function() {}
  function setTheme(newTheme) {
    window.__theme = newTheme
    preferredTheme = newTheme
    document.body.className = newTheme
    window.__onThemeChange(newTheme)
  }

  let preferredTheme
  try {
    preferredTheme = localStorage.getItem("theme")
  } catch (err) {}

  window.__setPreferredTheme = function(newTheme) {
    setTheme(newTheme)
    try {
      localStorage.setItem("theme", newTheme)
    } catch (err) {}
  }

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
  darkQuery.addListener(function(e) {
    window.__setPreferredTheme(e.matches ? "dark" : "light")
  })

  setTheme(preferredTheme || (darkQuery.matches ? "dark" : "light"))
})()

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
