import React, { useState } from 'react'
import { css } from 'glamor'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import { animateInDown, animateInUp } from '../utils/animations'
import SEO from '../components/seo'

const styles = {
  image: {
    width: '100%',
    height: '100%',
    maxWidth: 294,
    maxHeight: 294,
    cursor: 'pointer',

    '@media(max-width: 768px)': {
      maxWidth: 320,
      maxHeight: 320,
    },
  },
}

export default () => {
  const [fluidImage, setFluidImage] = useState(null)
  const [showImageDialog, setShowImageDialog] = useState(false)

  return (
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
                    <a
                      key={fluid.src}
                      href={fluid.src}
                      className={css(styles.image, { overflow: 'hidden' })}
                      onClick={event => {
                        event.preventDefault()
                        setFluidImage(fluid)
                        setShowImageDialog(true)
                      }}
                    >
                      <Img
                        fluid={fluid}
                        className={css(
                          styles.image,
                          {
                            transition: 'all 0.5s ease',

                            ':hover': {
                              transform: 'scale(1.1)',
                            },
                          },
                          animateInUp((index + 1) / 4)
                        )}
                      />
                    </a>
                  )
                )}
              </div>
            )
          }}
        />
      </div>

      <DialogOverlay
        style={{
          display: 'grid',
          alignItems: 'center',
          background: 'hsla(0, 100%, 100%, 0.9)',
        }}
        isOpen={showImageDialog}
        onDismiss={() => setShowImageDialog(false)}
      >
        <DialogContent
          css={{
            width: '600px !important',
            height: '600px !important',
            background: 'transparent !important',
          }}
        >
          <div
            className={animateInDown()}
            style={{
              position: 'relative',
              fontSize: '2rem',
              fontWeight: 600,
            }}
          >
            <button
              className={css(
                {
                  position: 'absolute',
                  top: -40,
                  right: -40,
                  border: 0,
                  background: 'none',
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'all 0.75s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
                  ':hover': {
                    transform: 'rotateZ(90deg)',
                  },
                },
                animateInDown()
              )}
              onClick={() => setShowImageDialog(false)}
            >
              <svg width="22px" height="22px">
                <line
                  x1="1"
                  y1="20"
                  x2="20"
                  y2="1"
                  stroke="#3E3D4D"
                  strokeWidth="2"
                />
                <line
                  x1="1"
                  y1="1"
                  x2="20"
                  y2="20"
                  stroke="#3E3D4D"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>

          <Img
            fluid={fluidImage}
            className={css(
              {
                width: '100%',
                height: '100%',
              },
              animateInUp()
            )}
          />
        </DialogContent>
      </DialogOverlay>
    </div>
  )
}
