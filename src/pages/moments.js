import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { css } from 'glamor'
import { animateInDown } from '../utils/animations'
import SEO from '../components/seo'

const styles = {
  image: {
    width: '100%',
    height: '100%',
    maxWidth: 294,
    maxHeight: 294,
    '@media(max-width: 768px)': {
      maxWidth: 320,
      maxHeight: 320,
    },
  },
}

export default () => (
  <div style={{ background: '#DDD3C9' }}>
    <SEO title="Moments" />
    <div className="contents">
      <div
        className={css(
          {
            fontSize: '2.25rem',
            fontFamily: 'Shorelines',
            breakWord: 'keep-all',
            '@media(max-width: 414px)': { fontSize: 30 },
            '@media(max-width: 320px)': { fontSize: 26 },
          },
          animateInDown()
        )}
      >
        (moments)
      </div>

      <StaticQuery
        query={graphql`
          query {
            image1: file(relativePath: { eq: "fati.png" }) {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image2: file(relativePath: { eq: "main.png" }) {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            image3: file(relativePath: { eq: "pup.png" }) {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => {
          return (
            <div
              css={{
                display: 'grid',
                gridTemplateColumns: '294px 294px 294px',
                gridGap: 16,
                justifyItems: 'center',
                '@media(max-width: 768px)': {
                  gridTemplateColumns: '344px 344px',
                },
                '@media(max-width: 414px)': {
                  gridTemplateColumns: '1fr',
                },
              }}
            >
              {Object.values(data).map(({ childImageSharp: { fluid } }) => (
                <Img key={fluid.src} fluid={fluid} css={styles.image} />
              ))}
            </div>
          )
        }}
      />
    </div>
  </div>
)
