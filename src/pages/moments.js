import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { isMobile, isTablet, isIOS, isAndroid } from 'react-device-detect'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import { animateInDown, animateInUp } from '../utils/animations'
import SEO from '../components/seo'
import TrailerVideo from '../components/trailerVideo'

// This hook makes it easy to detect when the user is pressing a specific key on their keyboard
// https://usehooks.com/useKeyPress/
function useKeyPress(targetKey) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false)

  // If pressed key is our target key then set to true
  function downHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(true)
    }
  }

  // If released key is our target key then set to false
  function upHandler({ key }) {
    if (key === targetKey) {
      setKeyPressed(false)
    }
  }

  // Add event listeners
  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', downHandler)
      window.removeEventListener('keyup', upHandler)
    }
  }, []) // Empty array ensures that effect is only run on mount and unmount

  return keyPressed
}

const styles = {
  hover: (scale = 1.1) => ({
    transition: 'transform 0.35s cubic-bezier(0, -0.55, 0.25, 2) 0s',
    ':hover': {
      transform: `scale(${scale})`,
    },
  }),
  images: {
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
  },
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
  close: {
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
}

const Mark = () => {
  let fbUrl = 'https://www.facebook.com/MarkNicolasFilms/'

  if (isIOS) {
    fbUrl = 'fb://page/?id=1908468772771411'
  }
  if (isAndroid) {
    fbUrl = 'fb://page/1908468772771411'
  }

  return (
    <>
      <a
        href="https://www.marknicolasfilms.com/"
        target="_blank"
        rel="noopener noreferrer"
        css={{
          display: 'inline-block',
          fontSize: 24,
          textDecoration: 'none',
          ...animateInUp(1 / 4),
        }}
      >
        🎥 video by mark nicolas 🎥
      </a>
      <div
        css={{
          maxWidth: 300,
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'flex',
          justifyContent: 'space-around',
          ...animateInUp(2 / 4),
        }}
      >
        <a
          href="https://vimeo.com/user68584040"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            css={{
              width: 50,
              height: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg
              width="24"
              height="50"
              viewBox="0 0 256 223"
              css={styles.hover(1.2)}
            >
              <path
                d="M255.876213,51.662485 C254.737006,76.6303263 237.331453,110.819347 203.667236,154.211627 C168.861251,199.53928 139.413381,222.200547 115.323625,222.200547 C100.406409,222.200547 87.772727,208.402057 77.4609804,180.794839 C70.5694159,155.489076 63.6855314,130.185872 56.7965269,104.880109 C49.1343974,77.2882505 40.9193043,63.4744013 32.1358876,63.4744013 C30.2209952,63.4744013 23.5188719,67.5115474 12.0448778,75.5551193 L0,60.0081389 C12.6336816,48.884867 25.0984021,37.7641552 37.3608813,26.6280832 C54.2109102,12.038549 66.8599519,4.36617944 75.2900864,3.59049443 C95.2146951,1.67304204 107.477174,15.3179302 112.080084,44.5277189 C117.054196,76.0415225 120.494858,95.6435691 122.430231,103.315939 C128.172348,129.461388 134.490469,142.517472 141.394833,142.517472 C146.752948,142.517472 154.80164,134.038697 165.533229,117.081148 C176.254579,100.118478 181.996696,87.2134346 182.772381,78.3480974 C184.298151,63.7099228 178.553473,56.3729154 165.533229,56.3729154 C159.40455,56.3729154 153.086429,57.7860445 146.586547,60.5790226 C159.166468,19.2885158 183.205023,-0.764093703 218.686853,0.380233689 C244.991023,1.15335868 257.391743,18.2465891 255.876213,51.662485"
                fill="#3e3d4d"
              />
            </svg>
          </div>
        </a>
        <a href={fbUrl} target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 64 64" width="50" css={styles.hover(1.2)}>
            <path
              fill="#3e3d4d"
              d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
            ></path>
          </svg>
        </a>
        <a
          href="https://www.instagram.com/marknicolasfilms"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg viewBox="0 0 64 64" width="50" css={styles.hover(1.2)}>
            <path
              fill="#3e3d4d"
              d="M46.91,25.816c-0.073-1.597-0.326-2.687-0.697-3.641c-0.383-0.986-0.896-1.823-1.73-2.657c-0.834-0.834-1.67-1.347-2.657-1.73c-0.954-0.371-2.045-0.624-3.641-0.697C36.585,17.017,36.074,17,32,17s-4.585,0.017-6.184,0.09c-1.597,0.073-2.687,0.326-3.641,0.697c-0.986,0.383-1.823,0.896-2.657,1.73c-0.834,0.834-1.347,1.67-1.73,2.657c-0.371,0.954-0.624,2.045-0.697,3.641C17.017,27.415,17,27.926,17,32c0,4.074,0.017,4.585,0.09,6.184c0.073,1.597,0.326,2.687,0.697,3.641c0.383,0.986,0.896,1.823,1.73,2.657c0.834,0.834,1.67,1.347,2.657,1.73c0.954,0.371,2.045,0.624,3.641,0.697C27.415,46.983,27.926,47,32,47s4.585-0.017,6.184-0.09c1.597-0.073,2.687-0.326,3.641-0.697c0.986-0.383,1.823-0.896,2.657-1.73c0.834-0.834,1.347-1.67,1.73-2.657c0.371-0.954,0.624-2.045,0.697-3.641C46.983,36.585,47,36.074,47,32S46.983,27.415,46.91,25.816z M44.21,38.061c-0.067,1.462-0.311,2.257-0.516,2.785c-0.272,0.7-0.597,1.2-1.122,1.725c-0.525,0.525-1.025,0.85-1.725,1.122c-0.529,0.205-1.323,0.45-2.785,0.516c-1.581,0.072-2.056,0.087-6.061,0.087s-4.48-0.015-6.061-0.087c-1.462-0.067-2.257-0.311-2.785-0.516c-0.7-0.272-1.2-0.597-1.725-1.122c-0.525-0.525-0.85-1.025-1.122-1.725c-0.205-0.529-0.45-1.323-0.516-2.785c-0.072-1.582-0.087-2.056-0.087-6.061s0.015-4.48,0.087-6.061c0.067-1.462,0.311-2.257,0.516-2.785c0.272-0.7,0.597-1.2,1.122-1.725c0.525-0.525,1.025-0.85,1.725-1.122c0.529-0.205,1.323-0.45,2.785-0.516c1.582-0.072,2.056-0.087,6.061-0.087s4.48,0.015,6.061,0.087c1.462,0.067,2.257,0.311,2.785,0.516c0.7,0.272,1.2,0.597,1.725,1.122c0.525,0.525,0.85,1.025,1.122,1.725c0.205,0.529,0.45,1.323,0.516,2.785c0.072,1.582,0.087,2.056,0.087,6.061S44.282,36.48,44.21,38.061z M32,24.297c-4.254,0-7.703,3.449-7.703,7.703c0,4.254,3.449,7.703,7.703,7.703c4.254,0,7.703-3.449,7.703-7.703C39.703,27.746,36.254,24.297,32,24.297z M32,37c-2.761,0-5-2.239-5-5c0-2.761,2.239-5,5-5s5,2.239,5,5C37,34.761,34.761,37,32,37z M40.007,22.193c-0.994,0-1.8,0.806-1.8,1.8c0,0.994,0.806,1.8,1.8,1.8c0.994,0,1.8-0.806,1.8-1.8C41.807,22.999,41.001,22.193,40.007,22.193z"
            ></path>
          </svg>
        </a>
      </div>
    </>
  )
}

const Eugene = () => (
  <>
    <a
      href="https://www.eugenedavidyuk.com/"
      target="_blank"
      rel="noopener noreferrer"
      css={{
        display: 'inline-block',
        fontSize: 24,
        textDecoration: 'none',
        ...animateInUp(2 / 4),
      }}
    >
      📷 photos by eugene davidyuk 📸
    </a>
    <div
      css={{
        maxWidth: 300,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 4,
        display: 'flex',
        justifyContent: 'space-around',
        ...animateInUp(3 / 4),
      }}
    >
      <a
        href={
          isMobile || isTablet
            ? 'fb://profile/100000254539748'
            : 'https://www.facebook.com/davidyuk'
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 64 64" width="50" css={styles.hover(1.2)}>
          <path
            fill="#3e3d4d"
            d="M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"
          ></path>
        </svg>
      </a>
      <a
        href="mailto:eugenedavidyuk@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 64 64" width="50" css={styles.hover(1.2)}>
          <path
            fill="#3e3d4d"
            d="M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"
          ></path>
        </svg>
      </a>
      <a
        href="https://www.pinterest.com/Eugenedavidyuk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 64 64" width="50" css={styles.hover(1.2)}>
          <path
            fill="#3e3d4d"
            d="M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z"
          ></path>
        </svg>
      </a>
      <a
        href="https://instagram.com/eugene.davidyuk"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 64 64" width="50" css={styles.hover(1.2)}>
          <path
            fill="#3e3d4d"
            d="M46.91,25.816c-0.073-1.597-0.326-2.687-0.697-3.641c-0.383-0.986-0.896-1.823-1.73-2.657c-0.834-0.834-1.67-1.347-2.657-1.73c-0.954-0.371-2.045-0.624-3.641-0.697C36.585,17.017,36.074,17,32,17s-4.585,0.017-6.184,0.09c-1.597,0.073-2.687,0.326-3.641,0.697c-0.986,0.383-1.823,0.896-2.657,1.73c-0.834,0.834-1.347,1.67-1.73,2.657c-0.371,0.954-0.624,2.045-0.697,3.641C17.017,27.415,17,27.926,17,32c0,4.074,0.017,4.585,0.09,6.184c0.073,1.597,0.326,2.687,0.697,3.641c0.383,0.986,0.896,1.823,1.73,2.657c0.834,0.834,1.67,1.347,2.657,1.73c0.954,0.371,2.045,0.624,3.641,0.697C27.415,46.983,27.926,47,32,47s4.585-0.017,6.184-0.09c1.597-0.073,2.687-0.326,3.641-0.697c0.986-0.383,1.823-0.896,2.657-1.73c0.834-0.834,1.347-1.67,1.73-2.657c0.371-0.954,0.624-2.045,0.697-3.641C46.983,36.585,47,36.074,47,32S46.983,27.415,46.91,25.816z M44.21,38.061c-0.067,1.462-0.311,2.257-0.516,2.785c-0.272,0.7-0.597,1.2-1.122,1.725c-0.525,0.525-1.025,0.85-1.725,1.122c-0.529,0.205-1.323,0.45-2.785,0.516c-1.581,0.072-2.056,0.087-6.061,0.087s-4.48-0.015-6.061-0.087c-1.462-0.067-2.257-0.311-2.785-0.516c-0.7-0.272-1.2-0.597-1.725-1.122c-0.525-0.525-0.85-1.025-1.122-1.725c-0.205-0.529-0.45-1.323-0.516-2.785c-0.072-1.582-0.087-2.056-0.087-6.061s0.015-4.48,0.087-6.061c0.067-1.462,0.311-2.257,0.516-2.785c0.272-0.7,0.597-1.2,1.122-1.725c0.525-0.525,1.025-0.85,1.725-1.122c0.529-0.205,1.323-0.45,2.785-0.516c1.582-0.072,2.056-0.087,6.061-0.087s4.48,0.015,6.061,0.087c1.462,0.067,2.257,0.311,2.785,0.516c0.7,0.272,1.2,0.597,1.725,1.122c0.525,0.525,0.85,1.025,1.122,1.725c0.205,0.529,0.45,1.323,0.516,2.785c0.072,1.582,0.087,2.056,0.087,6.061S44.282,36.48,44.21,38.061z M32,24.297c-4.254,0-7.703,3.449-7.703,7.703c0,4.254,3.449,7.703,7.703,7.703c4.254,0,7.703-3.449,7.703-7.703C39.703,27.746,36.254,24.297,32,24.297z M32,37c-2.761,0-5-2.239-5-5c0-2.761,2.239-5,5-5s5,2.239,5,5C37,34.761,34.761,37,32,37z M40.007,22.193c-0.994,0-1.8,0.806-1.8,1.8c0,0.994,0.806,1.8,1.8,1.8c0.994,0,1.8-0.806,1.8-1.8C41.807,22.999,41.001,22.193,40.007,22.193z"
          ></path>
        </svg>
      </a>
    </div>
  </>
)

const CloseButton = () => (
  <svg
    width="22px"
    height="22px"
    css={{
      transition: 'all 0.75s cubic-bezier(0.68, -0.55, 0.27, 1.55)',

      ':hover': {
        transform: 'rotateZ(90deg)',
      },
    }}
  >
    <line x1="1" y1="20" x2="20" y2="1" stroke="#3E3D4D" strokeWidth="4" />
    <line x1="1" y1="1" x2="20" y2="20" stroke="#3E3D4D" strokeWidth="4" />
  </svg>
)

const BigImage = ({ images, activeImageIndex }) => {
  const { node: { childImageSharp: { fluid } = {} } = {} } = images.find(
    (_, index) => index === activeImageIndex
  )

  return (
    <Img
      key={fluid.src}
      fluid={fluid}
      css={{
        width: '100%',
        height: '100vh',
        ...animateInUp(),
      }}
      imgStyle={{ objectFit: 'contain' }}
    />
  )
}

export default () => {
  const {
    images: { edges: images },
  } = useStaticQuery(graphql`
    query {
      images: allFile(filter: { extension: { eq: "jpg" } }) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [showImageDialog, setShowImageDialog] = useState(false)
  const next = useKeyPress('ArrowRight')
  const prev = useKeyPress('ArrowLeft')

  // handle arrow keys to change photos
  useEffect(() => {
    if (next) {
      const imageIndex =
        activeImageIndex === images.length - 1 ? 0 : activeImageIndex + 1
      setActiveImageIndex(imageIndex)
    }
    if (prev) {
      const imageIndex =
        activeImageIndex === 0 ? images.length - 1 : activeImageIndex - 1
      setActiveImageIndex(imageIndex)
    }
  }, [next, prev])

  return (
    <>
      <SEO
        title="Moments"
        keywords={[
          'marknicolasfilms',
          'Mark Nicolas',
          'Mark Gonzales',
          'eugenedavidyuk',
          'Eugene Davidyuk',
        ]}
      />
      <div className="contents" css={{ marginBottom: 20 }}>
        <div
          css={{
            fontSize: '2.25rem',
            fontFamily: 'Shorelines',
            breakWord: 'keep-all',
            '@media(max-width: 414px)': { fontSize: 30 },
            '@media(max-width: 320px)': { fontSize: 26 },
            ...animateInDown(),
          }}
        >
          (moments)
        </div>

        <div css={animateInUp()}>
          Though one may be overpowered, two can defend themselves. A cord of
          three strands is not quickly broken.
        </div>
        <div css={animateInUp(1 / 4)}>‭‭ecclesiastes 4:12</div>

        <Mark />
        <TrailerVideo />

        <Eugene />

        <div css={styles.images}>
          {images.map(
            (
              { node: { childImageSharp: { fluid } = {} } = {} } = {},
              index
            ) => (
              <a
                key={fluid.src}
                href={fluid.src}
                css={{ ...styles.image, overflow: 'hidden' }}
                onClick={event => {
                  event.preventDefault()
                  setActiveImageIndex(index)
                  setShowImageDialog(true)
                }}
              >
                <Img
                  fluid={fluid}
                  css={[
                    styles.image,
                    styles.hover(),
                    animateInUp((index + 1) / 4),
                  ]}
                />
              </a>
            )
          )}
        </div>

        <div
          css={{
            marginTop: 40,
            marginBottom: 40,
            fontSize: 20,
            ...animateInUp(6 / 4),
          }}
        >
          ecclesiastes 4:12
        </div>
      </div>

      <DialogOverlay
        css={{ zIndex: 999, background: 'hsla(0, 100%, 100%, 0.9)' }}
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
            css={{
              position: 'relative',
              zIndex: 100,
              fontSize: '2rem',
              fontWeight: 600,
              ...animateInDown(),
            }}
          >
            <button
              css={styles.close}
              onClick={() => setShowImageDialog(false)}
            >
              <CloseButton />
            </button>
          </div>
          <BigImage images={images} activeImageIndex={activeImageIndex} />
        </DialogContent>
      </DialogOverlay>
    </>
  )
}
