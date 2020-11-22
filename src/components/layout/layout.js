import React from "react"
import { Link } from "gatsby"
import { Spring } from "react-spring/renderprops"

import Menu from "../Menu"
import logo from "img/7in.svg"
import { rhythm } from "../../utils/typography"
import style from "./style.module.less"

const useWindow = typeof window !== `undefined` // https://gatsby.dev/debug-html

const darkQuery = useWindow && window.matchMedia("(prefers-color-scheme: dark)")
if (useWindow) {
  window.__setPreferredTheme = function (newTheme) {
    localStorage.theme = newTheme
    document.body.className = newTheme
  }
}

class Layout extends React.Component {
  constructor(props) {
    super(props)
    // 夜间模式切换
    const themeMatches = darkQuery.matches ? "dark" : "light"
    let theme = themeMatches
    if (useWindow) {
      const themeDate = new Date(localStorage.themeDate || "")
      if (localStorage.themeDate !== undefined) {
        let nextDay = themeDate
        nextDay.setDate(nextDay.getDate() + 1)
        nextDay.setHours(6)
        nextDay.setMinutes(0)
        nextDay.setMilliseconds(0)
        if (nextDay.getTime() >= new Date().getTime()) {
          theme = localStorage.theme || themeMatches
        } else {
          theme = themeMatches
        }
      }
      window.__setPreferredTheme(theme)
    }
    // theme初始值
    this.state = {
      theme,
      menuVisible: false,
    }
  }

  componentDidMount() {
    darkQuery.addListener(this.changeTheme.bind(this))
  }

  componentWillUnmount() {
    darkQuery.removeListener(this.changeTheme.bind(this))
  }

  changeTheme(e) {
    useWindow && window.__setPreferredTheme(e.matches ? "dark" : "light")
    this.setState({ theme: e.matches ? "dark" : "light" })
  }

  switchTheme() {
    const { theme } = this.state
    const themeTarget = theme === "dark" ? "light" : "dark"
    const themeMatches = darkQuery.matches ? "dark" : "light"
    useWindow && window.__setPreferredTheme(themeTarget)
    this.setState({ theme: themeTarget })
    // 匹配
    if (useWindow) {
      if (themeTarget === themeMatches) {
        localStorage.removeItem("themeDate")
      } else {
        localStorage.themeDate = new Date()
      }
    }
  }

  render() {
    const { title, children } = this.props
    const { theme, menuVisible } = this.state
    const header = (
      <div
        style={{
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
            {(props) => (
              <div
                className={`${style.switchTheme} ${style[theme]}`}
                style={{...props, 'backgroundSize': '100%'}}
                onClick={this.switchTheme.bind(this)}
                onKeyDown={this.switchTheme.bind(this)}
                role="button"
                aria-label="switch theme"
                tabIndex="0"
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
          {/* 状态页 */}
          <div className={style.jumpLink}>
            <a className={style.link} style={{cursor: 'alias'}} href="https://uptime.level7in.com" rel="noreferrer" target="_blank">
              状态
            </a>
          </div>
          {/* menu */}
          <div
            className={style.more}
            onClick={() => this.setState({ menuVisible: true })}
            onKeyDown={this.switchTheme.bind(this)}
            role="button"
            tabIndex="0"
          >
            <Spring
              from={{ opacity: 0, x2: 0, x1: 12 }}
              to={{ opacity: 1, x2: 21, x1: 3 }}
              config={{ duration: 300 }}
            >
              {(props) => (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4rem"
                  height="1.4rem"
                  viewBox="0 0 24 24"
                  fill="none"
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
          {(props) => (
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
            &nbsp;
            <a
              href="https://www.gatsbyjs.org"
              target="_blank"
              rel="noopener noreferrer"
              style={{ verticalAlign: "middle" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 106 28"
                width="106"
                height="28"
                focusable="false"
              >
                <title>Gatsby</title>
                <path
                  fill="#fff"
                  d="M62.9 12h2.8v10h-2.8v-1.3c-1 1.5-2.3 1.6-3.1 1.6-3.1 0-5.1-2.4-5.1-5.3 0-3 2-5.3 4.9-5.3.8 0 2.3.1 3.2 1.6V12zm-5.2 5c0 1.6 1.1 2.8 2.8 2.8 1.6 0 2.8-1.2 2.8-2.8 0-1.6-1.1-2.8-2.8-2.8-1.6 0-2.8 1.2-2.8 2.8zm13.5-2.6V22h-2.8v-7.6h-1.1V12h1.1V8.6h2.8V12h1.9v2.4h-1.9zm8.5 0c-.7-.6-1.3-.7-1.6-.7-.7 0-1.1.3-1.1.8 0 .3.1.6.9.9l.7.2c.8.3 2 .6 2.5 1.4.3.4.5 1 .5 1.7 0 .9-.3 1.8-1.1 2.5s-1.8 1.1-3 1.1c-2.1 0-3.2-1-3.9-1.7l1.5-1.7c.6.6 1.4 1.2 2.2 1.2.8 0 1.4-.4 1.4-1.1 0-.6-.5-.9-.9-1l-.6-.2c-.7-.3-1.5-.6-2.1-1.2-.5-.5-.8-1.1-.8-1.9 0-1 .5-1.8 1-2.3.8-.6 1.8-.7 2.6-.7.7 0 1.9.1 3.2 1.1l-1.4 1.6zm6.1-1.1c1-1.4 2.4-1.6 3.2-1.6 2.9 0 4.9 2.3 4.9 5.3s-2 5.3-5 5.3c-.6 0-2.1-.1-3.2-1.6V22H83V5.2h2.8v8.1zm-.3 3.7c0 1.6 1.1 2.8 2.8 2.8 1.6 0 2.8-1.2 2.8-2.8 0-1.6-1.1-2.8-2.8-2.8-1.7 0-2.8 1.2-2.8 2.8zm13 3.5L93.7 12H97l3.1 5.7 2.8-5.7h3.2l-8 15.3h-3.2l3.6-6.8zM54 13.7h-7v2.8h3.7c-.6 1.9-2 3.2-4.6 3.2-2.9 0-5-2.4-5-5.3S43.1 9 46 9c1.6 0 3.2.8 4.2 2.1l2.3-1.5C51 7.5 48.6 6.3 46 6.3c-4.4 0-8 3.6-8 8.1s3.4 8.1 8 8.1 8-3.6 8-8.1c.1-.3 0-.5 0-.7z"
                />
                <path
                  fill="var(--theme-blue)"
                  d="M25 14h-7v2h4.8c-.7 3-2.9 5.5-5.8 6.5L5.5 11c1.2-3.5 4.6-6 8.5-6 3 0 5.7 1.5 7.4 3.8l1.5-1.3C20.9 4.8 17.7 3 14 3 8.8 3 4.4 6.7 3.3 11.6l13.2 13.2C21.3 23.6 25 19.2 25 14zm-22 .1c0 2.8 1.1 5.5 3.2 7.6 2.1 2.1 4.9 3.2 7.6 3.2L3 14.1z"
                />
                <path
                  d="M14 0C6.3 0 0 6.3 0 14s6.3 14 14 14 14-6.3 14-14S21.7 0 14 0zM6.2 21.8C4.1 19.7 3 16.9 3 14.2L13.9 25c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9L3.3 11.6C4.4 6.7 8.8 3 14 3c3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3C19.7 6.5 17 5 14 5c-3.9 0-7.2 2.5-8.5 6L17 22.5c2.9-1 5.1-3.5 5.8-6.5H18v-2h7c0 5.2-3.7 9.6-8.6 10.7z"
                  fill="#fff"
                />
              </svg>
            </a>
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
