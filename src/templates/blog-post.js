import React, { useEffect, useRef } from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import kebabCase from "lodash/kebabCase"
import Bio from "components/bio"
import Layout from "components/layout/layout"
import SEO from "components/seo"
import style from "theme/normal.module.less"
export default function BlogPostTemplate(props) {
  const post = props.data.mdx
  const siteTitle = props.data.site.siteMetadata.title
  const { previous, next } = props.pageContext

  return (
    <>
      <Layout location={props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1
              style={{
                marginTop: "1.4rem",
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <div className={style.postMeta}>
              <div>{post.frontmatter.date}</div>
              <div className={style.postReadTime}>· {post.timeToRead} min </div>
              <div className={style.postTags}>
                {post.frontmatter.tags.map((tag) => (
                  <Link
                    to={`/tags/${kebabCase(tag)}`}
                    style={{ textDecoration: "none" }}
                    key={`${post.frontmatter.date}-${tag}`}
                  >
                    <div className={style.tag}>{tag}</div>
                  </Link>
                ))}
              </div>
            </div>
          </header>
          <MDXRenderer>{post.body}</MDXRenderer>
          <hr
            style={{
              marginBottom: "1.4rem",
            }}
          />

          <Bio />
        </article>

        <nav className={style.prevNext}>
          {previous && (
            <Link to={previous.fields.slug} rel="prev" className={style.prev}>
              {previous.frontmatter.title}
            </Link>
          )}

          {next && (
            <Link to={next.fields.slug} rel="next" className={style.next}>
              {next.frontmatter.title}
            </Link>
          )}
        </nav>
        <Utterances />
      </Layout>
      {/* 目录 */}
      {post.tableOfContents && (
        <div
          className={style.toc}
          // tabIndex="1"
          dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
        />
      )}
    </>
  )
}

/**
 * @description: utterances 评论
 */
function Utterances() {
  const commentBox = useRef()
  useEffect(() => {
    const dom = commentBox.current
    const scriptEl = document.createElement("script")
    scriptEl.async = true
    scriptEl.src = "https://utteranc.es/client.js"
    scriptEl.setAttribute("repo", "level7in/level7in.github.io")
    scriptEl.setAttribute("issue-term", "title")
    scriptEl.setAttribute("label", "comment :speech_balloon:")
    scriptEl.setAttribute("theme", "preferred-color-scheme")
    scriptEl.setAttribute("crossorigin", "anonymous")
    if (commentBox && dom) {
      dom.appendChild(scriptEl)
    } else {
      console.log(`Error adding utterances comments on: ${commentBox}`)
    }
    return () => {
      // clean
      dom.firstChild.remove()
    }
  }, [])

  return <div ref={commentBox}></div>
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      timeToRead
      tableOfContents
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        tags
      }
    }
  }
`
