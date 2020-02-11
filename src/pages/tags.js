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
                  <svg
                    fill="currentColor"
                    preserveAspectRatio="xMidYMid meet"
                    height="1em"
                    width="1em"
                    viewBox="0 0 40 40"
                    style={{ verticalAlign: "middle" }}
                  >
                    <g>
                      <path d="m22.2 12.2c-0.7 0.6-0.7 1.7 0 2.3l3.8 3.8h-12.7c-0.9 0-1.6 0.8-1.6 1.7s0.7 1.7 1.6 1.7h12.7l-3.8 3.8c-0.7 0.6-0.7 1.7 0 2.3 0.3 0.4 0.7 0.5 1.1 0.5s0.9-0.1 1.2-0.5l7.9-7.8-7.9-7.8c-0.6-0.7-1.7-0.7-2.3 0z"></path>
                    </g>
                  </svg>
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
