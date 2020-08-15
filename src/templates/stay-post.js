import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const StayPostTemplate = ({
  address,
  content,
  contentComponent,
  description,
<<<<<<< HEAD
  email,
=======

>>>>>>> origin/master
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
<<<<<<< HEAD
            <p>{email}</p>
=======
   
>>>>>>> origin/master
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

StayPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  address: PropTypes.string,
  description: PropTypes.string,
<<<<<<< HEAD
  email: PropTypes.string,
  phone: PropTypes.string,
=======

>>>>>>> origin/master
  phone: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const StayPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <StayPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        address={post.frontmatter.address}
<<<<<<< HEAD
        email={post.frontmatter.email}
=======
 
>>>>>>> origin/master
        phone={post.frontmatter.phone}
        site={post.frontmatter.site}
        helmet={
          <Helmet titleTemplate="%s | Stay">
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

StayPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default StayPost

export const pageQuery = graphql`
  query StayPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        phone
<<<<<<< HEAD
        email
=======
  
>>>>>>> origin/master
        address
        site
        description
        tags
      }
    }
  }
`
