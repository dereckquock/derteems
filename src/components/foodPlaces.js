import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const foodPlaces = [
  {
    title: 'Firestone Grill',
    url: 'https://www.yelp.com/biz/firestone-grill-san-luis-obispo',
  },
  {
    title: 'SLO Brew Rock',
    url: 'https://www.yelp.com/biz/slo-brew-rock-san-luis-obispo-3',
  },
  {
    title: 'Splash Café',
    url:
      'https://www.yelp.com/biz/splash-caf%C3%A9-monterey-st-san-luis-obispo-37',
  },

  {
    title: 'Thai Boat',
    url: 'https://www.yelp.com/biz/thai-boat-san-luis-obispo',
  },
  {
    title: 'High Street Market & Deli',
    url: 'https://www.yelp.com/biz/high-street-market-and-deli-san-luis-obispo',
  },
  {
    title: 'Petra',
    url: 'https://www.yelp.com/biz/petra-san-luis-obispo',
  },
  {
    title: 'Fatte’s Pizza',
    url: 'https://www.yelp.com/biz/fattes-pizza-san-luis-obispo',
  },
  {
    title: 'Ruddell’s Smokehouse',
    url: 'https://www.yelp.com/biz/ruddells-smokehouse-cayucos-2',
  },
  {
    title: 'Nautical Bean',
    url:
      'https://www.yelp.com/biz/the-nautical-bean-coffee-house-and-bistro-san-luis-obispo-2',
  },
]

export default () => (
  <StaticQuery
    query={graphql`
      query {
        image0: file(relativePath: { eq: "firestone.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image1: file(relativePath: { eq: "slobrew.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image2: file(relativePath: { eq: "splash.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image3: file(relativePath: { eq: "thaiboat.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image4: file(relativePath: { eq: "highstreet.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image5: file(relativePath: { eq: "petra.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image6: file(relativePath: { eq: "fattes.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image7: file(relativePath: { eq: "uts.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        image8: file(relativePath: { eq: "nauttybean.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div
        css={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 300px)',
          gridGap: 20,
          alignItems: 'center',
          justifyContent: 'center',
          '@media(max-width: 768px)': {
            gridTemplateColumns: '300px 300px',
          },
          '@media(max-width: 414px)': { gridTemplateColumns: '1fr' },
        }}
      >
        {Object.values(data).map(({ childImageSharp: { fluid } }, index) => {
          let rotation = 'rotateZ(0deg)'

          switch (index) {
            case 1:
              rotation = 'rotateZ(-10deg)'
              break
            case 3:
              rotation = 'rotateZ(10deg)'
              break
            case 5:
              rotation = 'rotateZ(-10deg)'
              break
            case 7:
              rotation = 'rotateZ(10deg)'
              break
            default:
          }

          return (
            <div
              key={foodPlaces[index].title}
              css={{
                position: 'relative',
                transform: rotation,
              }}
            >
              <div
                style={{
                  width: '100%',
                  position: 'absolute',
                  top: 16,
                }}
              >
                <a
                  href={foodPlaces[index].url}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {foodPlaces[index].title}
                </a>
              </div>
              <div
                style={{
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
                  offsetYMax={20}
                  offsetYMin={-20}
                  slowerScrollRate
                  styleOuter={{ height: 200 }}
                  styleInner={{ width: '100%', height: '100%' }}
                >
                  <Img
                    fluid={fluid}
                    style={{ width: '100%', height: '100%' }}
                  />
                </Parallax>
              </div>
            </div>
          )
        })}
      </div>
    )}
  />
)
