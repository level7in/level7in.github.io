import React from "react"
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
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
        {posts.map(({ node, next }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <React.Fragment key={node.fields.slug}>
              <article key={node.fields.slug}>
                <header className={style.articleHeader}>
                  <small className={style.articleDate}>
                    {node.frontmatter.date}
                  </small>
                  <span className={style.articleTitle}>
                    <Link className={style.articleLink} to={node.fields.slug}>
                      {title}
                    </Link>
                  </span>
                </header>
                <section className={style.articleSubtitle}>
                  <div
                    className={style.articleExcerpt}
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                </section>
                <div className={style.articleFoot}>
                  <div className={style.minToRead}>
                    {node.timeToRead} min read
                  </div>
                  <div className={style.tags}>
                    {node.frontmatter.tags.map(tag => {
                      return (
                        <Link
                          to={`/tags/${kebabCase(tag)}`}
                          key={`${node.frontmatter.date}-${tag}`}
                        >
                          <span className={style.tag}>{tag}</span>
                        </Link>
                      )
                    })}
                    <Link to={`/tags/`} key={`${node.frontmatter.date}-more`}>
                      <span className={style.tag}>···</span>
                    </Link>
                  </div>
                </div>
              </article>
              {next &&
                node.frontmatter.date.slice(0, 4) !==
                  next.frontmatter.date.slice(0, 4) && (
                  <h1 className={style.years}>
                    {next.frontmatter.date.slice(0, 4)} &gt;
                  </h1>
                )}
            </React.Fragment>
          )
        })}
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
