import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import { animateInDown, animateInUp } from '../utils/animations'
import SEO from '../components/seo'
import ThingsToDo from '../components/thingsToDo'
import FoodPlaces from '../components/foodPlaces'

export default ({ data }) => {
  const {
    appleFarm: {
      childImageSharp: { fluid },
    },
  } = data

  return (
    <ParallaxProvider>
      <SEO title="SLO" />
      <div className="contents">
        <div
          css={{
            fontSize: '2.25rem',
            fontFamily: 'Shorelines',
            breakWord: 'keep-all',
            ...animateInDown(),
          }}
        >
          (slo)
        </div>

        <div css={{ fontSize: '2rem', fontWeight: 600, ...animateInUp(1 / 4) }}>
          Accommodations
        </div>
        <div
          css={{ paddingBottom: 40, fontSize: '2rem', ...animateInUp(2 / 4) }}
        >
          <div
            css={{ maxWidth: 500, margin: '20px auto 0', position: 'relative' }}
          >
            <div
              style={{
                width: '100%',
                position: 'absolute',
                top: 16,
              }}
            >
              <a
                href={'https://www.applefarm.com/'}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple Farm
              </a>
            </div>
            <a
              href={'https://www.applefarm.com/'}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'block',
                overflow: 'hidden',
                border: '20px solid #fff',
                borderTopWidth: 80,
                background: '#fff',
                borderRadius: 4,
                boxShadow: '2px 4px 16px 2px #000',
              }}
            >
              <Parallax
                key={fluid.src}
                y={[30, -30]}
                styleOuter={{ height: 200 }}
                styleInner={{ width: '100%', height: '100%' }}
              >
                <Img fluid={fluid} style={{ marginTop: 50 }} />
              </Parallax>
            </a>
          </div>
          <div css={{ margin: '2rem 0 1rem' }}>
            Please call{' '}
            <a href="tel:805-544-2040" style={{ fontWeight: 600 }}>
              805-544-2040
            </a>{' '}
            anytime <b>Monday - Friday, 8:30am - 4:30pm</b>
          </div>
          <div css={{ margin: '1rem 0 1rem' }}>
            Book under the <b>Bantayan Quock Wedding Block</b>
            <div>
              Reservation ID/number: <b>936191</b>
            </div>
          </div>
        </div>

        <div css={{ fontSize: '2rem', fontWeight: 600, ...animateInUp(3 / 4) }}>
          Things to do around SLO
        </div>
        <div
          css={{
            paddingTop: '7vw',
            paddingBottom: 40,
            fontSize: '2rem',
            ...animateInUp(4 / 4),
          }}
        >
          <ThingsToDo />
        </div>

        <div
          css={{
            marginTop: 20,
            fontSize: '2rem',
            fontWeight: 600,
            ...animateInUp(3 / 4),
          }}
        >
          Food we love ♥
        </div>
        <div
          css={{ paddingTop: '6vw', fontSize: '2rem', ...animateInUp(5 / 4) }}
        >
          <FoodPlaces />
        </div>

        <div
          css={{
            marginTop: 40,
            marginBottom: 40,
            fontSize: 20,
            ...animateInUp(6 / 4),
          }}
        >
          ‭‭1 john‬ ‭3:18
        </div>
      </div>
    </ParallaxProvider>
  )
}

export const query = graphql`
  query SloPageQuery {
    appleFarm: file(relativePath: { eq: "apple-farm.png" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
