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
    blockquote: {
      "border-left": ` 0.2625rem solid var(--color)`,
    },
    "td, th": {
      "border-bottom": `1px solid var(--border-2-color)`,
    },
    hr: {
      background: `var(--border-2-color)`,
    },
    // 代码高亮
    'code[class*="language-"], pre[class*="language-"]': {
      "font-size": `.7rem !important`,
    },
    /**
     * If you only want to use line numbering
     */
    '.gatsby-highlight pre[class*="language-"].line-numbers': {
      padding: "0",
      "padding-left": "2.8em",
      overflow: "initial",
    },
    // 代码行高亮
    ".gatsby-highlight-code-line": {
      "background-color": "rgba(0, 90, 255, 0.7)",
      display: "block",
      "margin-right": "-1em",
      "margin-left": "-1em",
      "padding-right": "1em",
      "padding-left": "0.75em",
      " border-left": "0.25em solid #ffcd00",
    },
    /**
     * Add back the container background-color, border-radius, padding, margin
     * and overflow that we removed from <pre>.
     */
    ".gatsby-highlight": {
      "background-color": "#011627",
      "border-radius": "0.3em",
      margin: "0.5em 0",
      padding: "1em",
      overflow: "auto",
      position: "relative",
      "box-shadow": "0 0 0 1px inset rgba(155, 125, 4, 0.5)",
    },

    /**
     * Remove the default PrismJS theme background-color, border-radius, margin,
     * padding and overflow.
     * 1. Make the element just wide enough to fit its content.
     * 2. Always fill the visible space in .gatsby-highlight.
     * 3. Adjust the position of the line numbers
     */
    '.gatsby-highlight pre[class*="language-"]': {
      "background-color": "transparent",
      margin: "0",
      padding: "0",
      overflow: "initial",
      float: "left" /* 1 */,
      "min-width": "100%" /* 2 */,
    },
    // `inlineCode`
    ':not(pre) > code[class*="language-"]': {
      color: "var(--color)",
      padding: ".15em .2em .05em !important",
      background: "var(--inlineCode-bg) !important",
      "border-radius": ".3em !important",
      "white-space": "normal",
      "font-family": "var(--font) !important",
      "font-size": "1rem !important",
    },
  }
}

// delete Wordpress2016.googleFonts

const typography = new Typography(funstonTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
