import React from "react"
import { Link } from "gatsby"
import { Spring } from "react-spring/renderprops"

import Menu from "../Menu"
import logo from "img/final0.png"
import { rhythm } from "../../utils/typography"
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
        this.setState({ theme: e.matches, menuVisible: false })
      })

      setTheme(preferredTheme || (darkQuery.matches ? "dark" : "light"))
      const isGet = typeof preferredTheme === "object" ? false : true
      // theme初始值
      this.state = {
        theme: isGet ? preferredTheme === "dark" : darkQuery.matches,
      }
    } else {
      // theme初始值
      this.state = {
        theme: false,
        menuVisible: false,
      }
    }
  }
  switchTheme() {
    const { theme } = this.state
    if (typeof window !== `undefined`) {
      window.__setPreferredTheme(!theme ? "dark" : "light")
    }
    this.setState({ theme: !theme })
  }

  render() {
    const { title, children } = this.props
    const { theme, menuVisible } = this.state
    const header = (
      <div
        style={{
          // ...scale(1),
          maxWidth: rhythm(24),
          padding: `10px ${rhythm(3 / 4)}`,
        }}
        className={style.headerContent}
      >
        {/* logo */}
        <img className={style.logo} src={logo} alt="logo" />
        {/* 站名 */}
        <h1 style={{ margin: "0" }}>
          <Link className={style.link} to={`/`}>
            {title}
          </Link>
        </h1>
        {/* 导航 */}
        <div className={style.nav}>
          {/* dark mode */}
          <Spring
            from={{ opacity: 0, transform: "rotate(0deg)" }}
            to={{ opacity: 1, transform: "rotate(360deg)" }}
            config={{ duration: 700 }}
          >
            {props => (
              <div
                className={`${style.switchTheme} ${
                  theme ? style.dark : style.light
                }`}
                style={props}
                onClick={this.switchTheme.bind(this)}
                onKeyDown={this.switchTheme.bind(this)}
              />
            )}
          </Spring>
          {/* 标签页 */}
          <div className={style.jumpLink}>
            <Link className={style.link} to={`/tags`}>
              标签
            </Link>
          </div>
          {/* 关于 */}
          <div className={style.jumpLink}>
            <Link className={style.link} to={`/about`}>
              关于
            </Link>
          </div>
          {/* menu */}
          <div
            className={style.more}
            onClick={() => this.setState({ menuVisible: true })}
          >
            <Spring
              from={{ opacity: 0, x2: 0, x1: 12 }}
              to={{ opacity: 1, x2: 21, x1: 3 }}
              config={{ duration: 300 }}
            >
              {props => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill={theme ? "#fff" : "#000"}
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line y1="12" {...props} y2="12"></line>
                  <line y1="6" {...props} y2="6"></line>
                  <line y1="18" {...props} y2="18"></line>
                </svg>
              )}
            </Spring>
          </div>
        </div>
      </div>
    )

    return (
      <div>
        <header className={style.header}>{header}</header>
        <Spring
          from={{ opacity: 0, transform: "translateY(-0.5rem)" }}
          to={{ opacity: 1, transform: "translateY(0)" }}
        >
          {props => (
            <main
              style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(24),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                minHeight: `calc(100vh - 10.3rem)`,
                ...props,
              }}
            >
              {children}
            </main>
          )}
        </Spring>
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
        <Menu
          visible={menuVisible}
          close={() => this.setState({ menuVisible: false })}
        />
      </div>
    )
  }
}

export default Layout
