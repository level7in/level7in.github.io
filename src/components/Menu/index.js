import React from "react"
import style from "./style.module.less"
import { Link } from "gatsby"
import { Spring } from "react-spring/renderprops"

export default class Menu extends React.Component {
  render() {
    const { visible } = this.props
    return visible ? (
      <div
        className={style.menu}
        onClick={() => this.props.close()}
        onKeyDown={() => this.props.close()}
        role="menu"
        tabIndex="0"
      >
        <Spring
          from={{ opacity: 0, transform: "translateY(-0.5rem)" }}
          to={{ opacity: 1, transform: "translateY(0)" }}
        >
          {props => (
            <div className={style.menuList} style={props}>
              <Link className={style.link} to={`/tags`}>
                标签
              </Link>
              <Link className={style.link} to={`/about`}>
                关于
              </Link>
              <a className={style.link} href="https://uptime.level7in.com" rel="noreferrer" target="_blank">
                状态
              </a>
            </div>
          )}
        </Spring>
      </div>
    ) : null
  }
}
