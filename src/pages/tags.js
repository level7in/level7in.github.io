import React from "react"
import PropTypes from "prop-types"
import { Trail } from "react-spring/renderprops"
// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "components/layout/layout"
import SEO from "components/seo"

import style from "theme/normal.module.less"
const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout title={title}>
    <SEO title="Tags" />
    <div className={style.tagsPage}>
      <Helmet title={title} />
      <div>
        <h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
            <line x1="7" y1="7" x2="7.01" y2="7"></line>
          </svg>
          &nbsp; 所有标签（{group.length}）
        </h3>
        <div className={style.tagsField}>
          <Trail
            items={group}
            keys={tag => tag.fieldValue}
            from={{ transform: "translate3d(-10px,0,0)" }}
            to={{ transform: "translate3d(0,0,0)" }}
          >
            {tag => props => (
              <Link
                key={tag.fieldValue}
                to={`/tags/${kebabCase(tag.fieldValue)}/`}
                style={props}
              >
                <div className={style.tags}>
                  {tag.fieldValue} ({tag.totalCount})
                </div>
              </Link>
            )}
          </Trail>
        </div>
      </div>
    </div>
  </Layout>
)

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
