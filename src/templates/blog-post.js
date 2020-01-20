import React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Bio from "components/bio"
import Layout from "components/layout/layout"
import SEO from "components/seo"
import { rhythm, scale } from "../utils/typography"
import style from "theme/normal.module.less"
class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
              }}
            >
              {post.frontmatter.title}
            </h1>
            <div
              style={{
                ...scale(-1 / 5),
                marginBottom: rhythm(1),
                marginTop: rhythm(1 / 4),
              }}
              className={style.postMeta}
            >
              <div>{post.frontmatter.date}</div>
              <div className={style.postReadTime}>· {post.timeToRead} min </div>
              <div className={style.postTags}>
                {post.frontmatter.tags.map(tag => (
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
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />

          <Bio />
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
        tags
      }
    }
  }
`
