import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    let header

    header = (
      <h1
        style={{
          ...scale(1.5),
          margin: "0 auto",
          maxWidth: rhythm(24),
          padding: `10px ${rhythm(3 / 4)}`
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )

    return (
      <div>
        <header
          style={{
            position: "sticky",
            top: 0,
            background: "transparent",
            color: "#000",
            zIndex: 1,
            backdropFilter: "saturate(180%) blur(20px)",
            borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
          }}
        >
          {header}
        </header>
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
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
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
