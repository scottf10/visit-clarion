import React from 'react'

import Layout from '../../components/Layout'
import EatRoll from '../../components/EatRoll'

export default class EatIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              boxShadow: '0.5rem 0 0 #df9508, -0.5rem 0 0 #df9508',
              backgroundColor: '#df9508',
              color: 'white',
              padding: '1rem',
            }}
          >
            Places to Eat
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <EatRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
