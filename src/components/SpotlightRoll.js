import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

class SpotlightRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="container">
        {posts &&
          posts.map(({ node: post }) => (
            <div class="tile is-ancestor">
              <div class="tile is-parent is-vertical">
                {post.frontmatter.featuredimage ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage,
                        alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                      }}
                    />
                  </div>
                ) : null}
                <article
                  className={`tile is-child ${
                    post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`}
                >
                  <header>
                    <p className="post-meta">
                      <Link
                        className="title has-text-primary is-size-4"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                      <span className="is-size-5 is-block">
                        {post.frontmatter.description}
                      </span>
                    </p>
                  </header>
                </article>
                <Link className="button" to="http://www.youtube.com" target="_blank">
                  More Info →
                  </Link>
              </div>
              <div class="tile is-parent is-vertical">
                {post.frontmatter.featuredimage2 ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage2,
                        alt: `featured image thumbnail for post ${post.frontmatter.title2}`,
                      }}
                    />
                  </div>
                ) : null}
                <article
                  className={`tile is-child ${
                    post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`}
                >
                  <header>
                    <p className="post-meta">
                      <Link
                        className="title has-text-primary is-size-4"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title2}
                      </Link>
                      <span className="is-size-5 is-block">
                        {post.frontmatter.description2}
                      </span>
                    </p>
                  </header>
                </article>
                <Link className="button" to="http://www.youtube.com" target="_blank">
                  More Info →
                  </Link>
              </div>
              <div class="tile is-parent is-vertical">
                {post.frontmatter.featuredimage3 ? (
                  <div className="featured-thumbnail">
                    <PreviewCompatibleImage
                      imageInfo={{
                        image: post.frontmatter.featuredimage3,
                        alt: `featured image thumbnail for post ${post.frontmatter.title3}`,
                      }}
                    />
                  </div>
                ) : null}
                <article
                  className={`tile is-child ${
                    post.frontmatter.featuredpost ? 'is-featured' : ''
                    }`}
                >
                  <header>
                    <p className="post-meta">
                      <Link
                        className="title has-text-primary is-size-4"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title3}
                      </Link>
                      <span className="is-size-5 is-block">
                        {post.frontmatter.description3}
                      </span>
                    </p>
                  </header>
                </article>
                <Link className="button" to="http://www.youtube.com" target="_blank">
                  More Info →
                  </Link>
              </div>
            </div>

          ))}
      </div>
    )
  }
}

SpotlightRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query SpotlightRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "spotlight-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
                
              }
              frontmatter {
                description
                description2
                description3
                title
                title2
                title3
                templateKey
                featuredpost
                featuredpost2
                featuredpost3
                featuredimage{
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <SpotlightRoll data={data} count={count} />}
  />
)
