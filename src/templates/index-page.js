import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import SpotlightRoll from '../components/SpotlightRoll'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import logo from '../../static/img/logo.png'
import football from '../../static/img/football.jpg'
import county from '../../static/img/county.jpg'
import cook from '../../static/img/cookforest-logo.png'

export const IndexPageTemplate = ({
  image,
  fullImage,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
    <div>
      <div
        className="full-width-image margin-top-0"
        style={{
          backgroundImage: `url(${
            !!image.childImageSharp ? image.childImageSharp.fluid.src : image
            })`,
          backgroundPosition: `top left`,
          backgroundAttachment: `fixed`,
        }}
      >
        <div
          style={{
            display: 'flex',
            height: '150px',
            lineHeight: '1',
            justifyContent: 'space-around',
            alignItems: 'left',
            flexDirection: 'column',
          }}
        >

          <img className="is-size-3-mobile is-size-2-tablet is-size-1-widescreen" src={logo} alt="Visit Clarion"></img>

        </div>
      </div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">

                  {/* <div className="content">
                    <div className="tile">
                      <h1 className="title">{mainpitch.title}</h1>
                    </div>
                    <div className="tile">
                      <h3 className="subtitle">{mainpitch.description}</h3>
                    </div>
                  </div> */}

                  <section class="section">
                    <div class="container">
                      <div class="tile is-ancestor">
                        <div class="tile image is-parent is-7">
                          <img class="tile is-child hoverito"></img> 
                        </div>
                        <div class="tile image is-parent is-vertical">
                           <a href="http://cookforest.com"><img class="tile is-child hoverito" src={cook} alt="Cook Forest" target="_blank" ></img> </a>
                           <a href="http://www.co.clarion.pa.us/Pages/Default.aspx"><img class="tile is-child hoverito" src={county} alt="Clarion County" target="_blank" ></img> </a>
                        </div>
                      </div>
                    </div>
                  </section>

                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest storiess
                  </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="button" to="/blog">
                        Read more
                    </Link>
                    </div>
                  </div>
                  <div
                    className="full-width-image-container margin-top-60"
                    style={{
                      backgroundImage: `url(${
                        fullImage.childImageSharp
                          ? fullImage.childImageSharp.fluid.src
                          : fullImage
                        })`,
                    }}
                  />
                  {/* <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div> */}

                  {/* <div className="column is-12">
                    <h3 className="has-text-weight-semibold has-text-centered is-size-2">
                      Spotlight
                  </h3>
                    <SpotlightRoll />
                    <div className="column is-12 has-text-centered">

                    </div>
                  </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
        fullImage={frontmatter.full_image}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
