import React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import { Trail } from "react-spring/renderprops"

import Bio from "components/bio"
import Layout from "components/layout/layout"
import SEO from "components/seo"
import style from "theme/normal.module.less"
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Index" />
        <Bio />
        <Trail
          items={posts}
          keys={({ node }) => node.fields.slug}
          from={{ transform: "translate3d(0,-10px,0)" }}
          to={{ transform: "translate3d(0,0,0)" }}
        >
          {({ node, next }) => (props) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <>
                <article
                  key={node.fields.slug}
                  style={props}
                  className={style.article}
                >
                  <Link
                    className={style.jumpArticle}
                    to={node.fields.slug}
                  >
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
                </article>

                {next &&
                  node.frontmatter.date.slice(0, 4) !==
                    next.frontmatter.date.slice(0, 4) && (
                    <h1 className={style.years} style={props}>
                      {next.frontmatter.date.slice(0, 4)} &gt;
                    </h1>
                  )}
              </>
            )
          }}
        </Trail>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY-MM-DD")
            title
            description
            tags
          }
          timeToRead
        }
        next {
          frontmatter {
            date(formatString: "YYYY-MM-DD")
          }
        }
      }
    }
  }
`
