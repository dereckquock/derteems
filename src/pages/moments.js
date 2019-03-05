import React from 'react'
import { css } from 'glamor'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { animateInDown, animateInUp } from '../utils/animations'
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
    <div className="contents" style={{ marginBottom: 20 }}>
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
            patriots: file(relativePath: { eq: "patriots.png" }) {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            p1: file(relativePath: { eq: "1.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            p2: file(relativePath: { eq: "2.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            p3: file(relativePath: { eq: "3.jpg" }) {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            p5: file(relativePath: { eq: "5.jpg" }) {
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
              {Object.values(data).map(
                ({ childImageSharp: { fluid } }, index) => (
                  <Img
                    key={fluid.src}
                    fluid={fluid}
                    className={css(styles.image, animateInUp((index + 1) / 4))}
                  />
                )
              )}
            </div>
          )
        }}
      />
    </div>
  </div>
)
