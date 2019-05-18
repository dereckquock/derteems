import React, { useState } from 'react'
import { css } from 'glamor'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import Carousel from 'nuka-carousel'
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
  const [images, setImages] = useState([])
  const [activeImage, setActiveImage] = useState(0)
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
              images: allFile(filter: { extension: { eq: "jpg" } }) {
                edges {
                  node {
                    extension
                    relativePath
                    childImageSharp {
                      fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          `}
          render={({ images: { edges } }) => {
            setImages(edges)

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
                {edges.map(
                  (
                    { node: { childImageSharp: { fluid } = {} } = {} } = {},
                    index
                  ) => (
                    <a
                      key={fluid.src}
                      href={fluid.src}
                      className={css(styles.image, { overflow: 'hidden' })}
                      onClick={event => {
                        event.preventDefault()
                        setActiveImage(index)
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

        <div
          className={css(
            { marginTop: 40, marginBottom: 40, fontSize: 20 },
            animateInUp(6 / 4)
          )}
        >
          ecclesiastes 4:12
        </div>
      </div>

      <DialogOverlay
        style={{ background: 'hsla(0, 100%, 100%, 0.9)' }}
        isOpen={showImageDialog}
        onDismiss={() => setShowImageDialog(false)}
      >
        <DialogContent
          css={{
            width: '100% !important',
            height: '100% !important',
            padding: '0 !important',
            margin: '0 !important',
            background: 'transparent !important',
          }}
        >
          <div
            className={animateInDown()}
            style={{
              position: 'relative',
              zIndex: 100,
              fontSize: '2rem',
              fontWeight: 600,
            }}
          >
            <button
              className={css(
                {
                  width: 44,
                  height: 44,
                  padding: 0,
                  position: 'absolute',
                  top: 4,
                  right: 4,
                  border: 0,
                  borderRadius: 22,
                  background: '#816D66',
                  boxShadow: '0 1px 4px 1px #000',
                  cursor: 'pointer',
                  outline: 'none',
                },
                animateInDown()
              )}
              onClick={() => setShowImageDialog(false)}
            >
              <svg
                width="22px"
                height="22px"
                className={css({
                  transition: 'all 0.75s cubic-bezier(0.68, -0.55, 0.27, 1.55)',

                  ':hover': {
                    transform: 'rotateZ(90deg)',
                  },
                })}
              >
                <line
                  x1="1"
                  y1="20"
                  x2="20"
                  y2="1"
                  stroke="#3E3D4D"
                  strokeWidth="4"
                />
                <line
                  x1="1"
                  y1="1"
                  x2="20"
                  y2="20"
                  stroke="#3E3D4D"
                  strokeWidth="4"
                />
              </svg>
            </button>
          </div>

          <Carousel
            enableKeyboardControls
            dragging
            swiping
            withoutControls
            wrapAround
            slideIndex={activeImage}
            style={{ width: '100%', height: '100%' }}
          >
            {images.map(
              (
                { node: { childImageSharp: { fluid } = {} } = {} } = {},
                index
              ) => (
                <Img
                  key={fluid.src}
                  fluid={fluid}
                  className={css(
                    {
                      width: '100%',
                      height: '100vh',
                    },
                    animateInUp()
                  )}
                  imgStyle={{ objectFit: 'contain' }}
                />
              )
            )}
          </Carousel>
        </DialogContent>
      </DialogOverlay>
    </div>
  )
}
