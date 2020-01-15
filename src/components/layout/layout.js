import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../../utils/typography"
import style from "./style.module.less"
class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    let header

    header = (
      <h1
        style={{
          ...scale(1),
          margin: "0 auto",
          maxWidth: rhythm(24),
          padding: `10px ${rhythm(3 / 4)}`,
        }}
      >
        <Link className={style.link} to={`/`}>
          {title}
        </Link>
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
          level7in © {new Date().getFullYear()}, In ShenZhen, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
