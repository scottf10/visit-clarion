import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const SpotlightPostTemplate = ({
  content,
  contentComponent,
  description,
  description2,
  description3,
  tags,
  title,
  title2,
  title3,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="section">
      {helmet || ''}
      <div className="container content">

        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
            <p>{description}</p>
            <p>{description2}</p>
            <p>{description3}</p>
            <PostContent content={content} />
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  )
}

SpotlightPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  address: PropTypes.string,
  description: PropTypes.string,
  description2: PropTypes.string,
  description3: PropTypes.string,
  title: PropTypes.string,
  title2: PropTypes.string,
  title3: PropTypes.string,
  helmet: PropTypes.object,
}

const SpotlightPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <SpotlightPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        address={post.frontmatter.address}
        email={post.frontmatter.email}
        phone={post.frontmatter.phone}
        site={post.frontmatter.site}
        helmet={
          <Helmet titleTemplate="%s | Spotlight">
            <title>{`${post.frontmatter.title}`}</title>
            <title>{`${post.frontmatter.title2}`}</title>
            <title>{`${post.frontmatter.title3}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
              name="description2"
              content={`${post.frontmatter.description2}`}
              name="description3"
              content={`${post.frontmatter.description3}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

SpotlightPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default SpotlightPost

export const pageQuery = graphql`
  query SpotlightPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        title2
        title3
        phone
        email
        address
        site
        description
        description2
        description3
        tags
      }
    }
  }
`
