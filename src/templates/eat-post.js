import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const EatPostTemplate = ({
  address,
  content,
  contentComponent,
  description,
  email,
  phone,
  site,
  tags,
  title,
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
            <p>{phone}</p>
            <p>{email}</p>
            <p>{address}</p>
            <p>{site}</p>
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

EatPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  address: PropTypes.string,
  description: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const EatPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <EatPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        address={post.frontmatter.address}
        email={post.frontmatter.email}
        phone={post.frontmatter.phone}
        site={post.frontmatter.site}
        helmet={
          <Helmet titleTemplate="%s | Eat">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

EatPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default EatPost

export const pageQuery = graphql`
  query EatPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        phone
        email
        address
        site
        description
        tags
      }
    }
  }
`
