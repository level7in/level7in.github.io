import React from "react"
import style from "./style.module.less"
import { Link } from "gatsby"

export default function Menu(props) {
  const { visible } = props
  return visible ? (
    <div
      className={style.menu}
      onClick={props.close()}
      onKeyDown={props.close()}
      role="menu"
      tabIndex="0"
    >
      <div className={style.menuList}>
        <Link className={style.link} to={`/tags`}>
          标签
        </Link>
        <Link className={style.link} to={`/about`}>
          关于
        </Link>
        <a
          className={style.link}
          href="https://uptime.level7in.com"
          rel="noreferrer"
          target="_blank"
        >
          状态
        </a>
      </div>
    </div>
  ) : null
}
