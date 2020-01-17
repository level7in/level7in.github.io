import React from "react"
import { Link } from "gatsby"
import logo from "img/final0.png"
import { rhythm, scale } from "../../utils/typography"
import style from "./style.module.less"
class Layout extends React.Component {
  constructor(props) {
    super(props)

    // 夜间模式切换
    if (typeof window !== `undefined`) {
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
      darkQuery.addListener(e => {
        window.__setPreferredTheme(e.matches ? "dark" : "light")
        this.setState({ theme: e.matches })
      })

      setTheme(preferredTheme || (darkQuery.matches ? "dark" : "light"))
      const isGet = typeof preferredTheme === "object" ? false : true
      // theme初始值
      this.state = {
        theme: (isGet && preferredTheme === "dark") || darkQuery.matches,
      }
    }
  }

  componentDidMount() {
    // const darkQuery = window.matchMedia("(prefers-color-scheme: dark)")
    // darkQuery.addListener(e => {
    //   this.setState({ theme: e.matches })
    // })
  }
  render() {
    const { title, children } = this.props
    const { theme } = this.state
    const header = (
      <h1
        style={{
          ...scale(1),
          margin: "0 auto",
          maxWidth: rhythm(24),
          padding: `10px ${rhythm(3 / 4)}`,
        }}
      >
        <img className={style.logo} src={logo} alt="logo" />
        <Link className={style.link} to={`/`}>
          {title}
        </Link>
        <input
          className={style.switchThemeInput}
          type="checkbox"
          checked={theme}
          id="theme"
          onChange={() => {
            if (typeof window !== `undefined`) {
              window.__setPreferredTheme(!theme ? "dark" : "light")
            }
            this.setState({ theme: !theme })
          }}
        ></input>
        <label htmlFor="theme" className={style.switchThemeLabel}></label>
      </h1>
    )

    return (
      <div>
        <header className={style.header}>{header}</header>
        <main
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
            minHeight: `calc(100vh - 10.9rem)`,
          }}
        >
          {children}
        </main>
        <footer
          style={{
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
          className={style.footer}
        >
          <div className={style.description}>
            level7in © {new Date().getFullYear()}, In ShenZhen, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>

          <img className={style.logoFooter} src={logo} alt="logo" />
        </footer>
      </div>
    )
  }
}

export default Layout
