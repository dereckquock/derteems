import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'

export default () => (
  <div style={{ background: '#DDD3C9' }}>
    <SEO title="Moments" />
    <div className="contents">
      <h1 style={{ marginTop: 20 }}>
        <div
          css={{
            fontFamily: 'Shorelines',
            breakWord: 'keep-all',
            '@media(max-width: 414px)': { fontSize: 32 },
          }}
        >
          (moments)
        </div>
      </h1>

      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "fati.png" }) {
              childImageSharp {
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        )}
      />
    </div>
  </div>
)
