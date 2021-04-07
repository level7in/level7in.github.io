import React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import { motion } from "framer-motion"

import Bio from "components/bio"
import Layout from "components/layout/layout"
import SEO from "components/seo"
import style from "theme/normal.module.less"
export default function BlogIndex(props) {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges
  return (
    <Layout location={props.location} title={siteTitle}>
      <SEO title="Index" />
      <Bio />

      {posts.map(({ node, next }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <React.Fragment key={node.fields.slug}>
            <motion.div
              animate={{ y: ["20px", "0px"] }}
              transition={{
                type: "inertia",
                velocity: 50,
              }}
              className={style.article}
            >
              <Link className={style.jumpArticle} to={node.fields.slug}>
                <header className={style.articleHeader}>
                  <small className={style.articleDate}>
                    {node.frontmatter.date}
                  </small>
                  <span className={style.articleTitle}>{title}</span>
                </header>
                <section className={style.articleSubtitle}>
                  <div
                    className={style.articleExcerpt}
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
              </Link>
              <div className={style.articleFoot}>
                <div className={style.minToRead}>
                  {node.timeToRead} min read
                </div>
                <div className={style.tags}>
                  {node.frontmatter.tags.map((tag) => {
                    return (
                      <Link
                        to={`/tags/${kebabCase(tag)}`}
                        key={`${node.frontmatter.date}-${tag}`}
                        style={{
                          textDecoration: "none",
                          color: "var(--color)",
                        }}
                      >
                        <span className={style.tag}>{tag}</span>
                      </Link>
                    )
                  })}
                  <Link
                    to={`/tags/`}
                    key={`${node.frontmatter.date}-more`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className={style.tagMore}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                        <line x1="7" y1="7" x2="7.01" y2="7"></line>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* {next &&
              node.frontmatter.date.slice(0, 4) !==
                next.frontmatter.date.slice(0, 4) && (
                <h1 className={style.years}>
                  C.E. {next.frontmatter.date.slice(0, 4)}
                </h1>
              )} */}
          </React.Fragment>
        )
      })}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
        description
        siteUrl
      }
      buildTime(fromNow: true)
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            title
            description
            tags
          }
          wordCount {
            words
          }
          fields {
            slug
          }
          timeToRead
          excerpt(pruneLength: 30, truncate: true)
        }
        next {
          slug
        }
      }
    }
  }
`
