import React from 'react'
import { css } from 'glamor'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { animateInDown, animateInUp } from '../utils/animations'
import SEO from '../components/seo'

const thingsToDo = [
  {
    title: 'Cal Poly',
    url: 'https://viewbook.calpoly.edu/visit/',
  },
  {
    title: 'Downtown SLO',
    url: 'https://downtownslo.com/visit/',
  },
  {
    title: 'Downtown Farmers Market',
    url: 'https://downtownslo.com/farmers-market/',
  },
  {
    title: 'Hiking',
    url:
      'https://sanluisobispovacations.com/things-to-do/outdoor-recreation/hiking/',
  },
  {
    title: 'Pismo Beach',
    url: 'http://www.classiccalifornia.com/things-to-do-in-pismo-beach/',
  },
  {
    title: 'ATVing',
    url: 'https://www.yelp.com/search?cflt=atvrentals&find_loc=Oceano%2C+CA',
  },
]

export default () => (
  <ParallaxProvider>
    <SEO title="SLO" />
    <div className="contents">
      <div
        className={css(
          {
            fontSize: '2.25rem',
            fontFamily: 'Shorelines',
            breakWord: 'keep-all',
          },
          animateInDown()
        )}
      >
        (slo)
      </div>

      <div
        className={css(
          { fontSize: '2rem', fontWeight: 600 },
          animateInUp(1 / 4)
        )}
      >
        Accommodations
      </div>
      <div
        className={css(
          { paddingBottom: 40, fontSize: '2rem' },
          animateInUp(2 / 4)
        )}
      >
        <div>TBD</div>
      </div>

      <div
        className={css(
          { fontSize: '2rem', fontWeight: 600 },
          animateInUp(3 / 4)
        )}
      >
        Things to do around SLO
      </div>
      <div
        className={css(
          {
            paddingTop: '6vw',
            paddingBottom: 40,
            fontSize: '2rem',
          },
          animateInUp(4 / 4)
        )}
      >
        <StaticQuery
          query={graphql`
            query {
              image1: file(relativePath: { eq: "calpoly.png" }) {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              image2: file(relativePath: { eq: "downtown.png" }) {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              image3: file(relativePath: { eq: "farmers.png" }) {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              image4: file(relativePath: { eq: "bishop.png" }) {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              image5: file(relativePath: { eq: "pismo.png" }) {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              image6: file(relativePath: { eq: "dunes.png" }) {
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
                gridTemplateColumns: '300px 300px 300px',
                gridGap: 20,
                alignItems: 'center',
                justifyContent: 'center',
                '@media(max-width: 768px)': {
                  gridTemplateColumns: '300px 300px',
                },
                '@media(max-width: 414px)': { gridTemplateColumns: '1fr' },
              }}
            >
              {Object.values(data).map(
                ({ childImageSharp: { fluid } }, index) => {
                  let rotation = 'rotateZ(0deg)'

                  switch (index) {
                    case 0:
                      rotation = 'rotateZ(-10deg)'
                      break
                    case 2:
                      rotation = 'rotateZ(10deg)'
                      break
                    case 4:
                      rotation = 'rotateZ(-10deg)'
                      break
                    default:
                  }

                  return (
                    <div
                      className={css({
                        position: 'relative',
                        transform: rotation,
                      })}
                    >
                      <div
                        key={thingsToDo[index].title}
                        style={{
                          width: '100%',
                          position: 'absolute',
                          top: 16,
                        }}
                      >
                        <a
                          href={thingsToDo[index].url}
                          className="btn"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {thingsToDo[index].title}
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
                }
              )}
            </div>
          )}
        />
      </div>
    </div>
  </ParallaxProvider>
)
