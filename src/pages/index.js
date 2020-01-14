import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import style from "../theme/normal.module.less"
class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="首页" />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const prevDate = node.frontmatter.date
          const flag = node.frontmatter.date
          return (
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
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </article>
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
          }
        }
      }
    }
  }
`
