import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { isIOS, isAndroid } from 'react-device-detect'
import { animateInDown, animateInUp, animateGrowIn } from '../utils/animations'
import SEO from '../components/seo'
import RSVP from '../components/rsvp'
import AddToCalendar from '../components/addToCalendar'
import Schedule from '../components/schedule'

export default () => {
  const {
    logo: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  let instagramUrl = 'https://www.instagram.com/explore/tags/teemquock/'

  if (isIOS) {
    instagramUrl = 'instagram://tag?name=teemquock'
  }
  if (isAndroid) {
    instagramUrl =
      'intent://instagram.com/explore/tags/teemquock/#Intent;package=com.instagram.android;scheme=https;end'
  }

  return (
    <>
      <SEO title="The Wedding" />
      <div className="contents">
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
          (wedding)
        </div>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          css={[
            {
              width: 100,
              padding: 10,
              margin: '0 auto',
              display: 'block',
              overflow: 'hidden',
              borderRadius: 50,
              background: '#fff',
              transition: 'all 0.35s cubic-bezier(0, -0.55, 0.25, 2) 0s',
              ':hover': {
                marginBottom: 6,
                transform: 'scale(1.1)',
              },
            },
            animateGrowIn(),
          ]}
        >
          <Img fluid={fluid} />
        </a>

        <div
          css={[
            {
              marginTop: 0,
              marginBottom: 20,
              fontSize: 38,
              fontWeight: 600,
              transition: 'all 0.35s cubic-bezier(0, -0.55, 0.25, 2) 0s',
              ':hover': {
                marginTop: 6,
                transform: 'scale(1.1)',
              },
            },
            animateInUp(),
          ]}
        >
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            css={{ display: 'block' }}
          >
            #TeemQuock
          </a>
        </div>

        <div
          css={{
            width: '100%',
            maxWidth: 400,
            marginTop: 10,
            marginBottom: 20,
            display: 'inline-block',
            justifyContent: 'center',
            overflow: 'hidden',
            border: '1px solid #816D66',
            borderRadius: 26,
            ...animateInUp(1 / 4),
          }}
        >
          <RSVP />
        </div>

        <div
          css={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gridGap: 20,
            '@media(max-width: 414px)': { gridTemplateColumns: '1fr' },
          }}
        >
          <div>
            <div css={animateInUp(2 / 4)}>
              <div css={{ fontSize: '2rem', fontWeight: 600 }}>when</div>
              <div css={{ paddingBottom: 40, fontSize: '2rem' }}>
                <div css={{ marginBottom: 10 }}>November 2nd, 2019</div>
                <AddToCalendar
                  event={{
                    title: `Dereck and Fatima's Wedding`,
                    description: 'Celebrate with us! 🍾',
                    location: 'California',
                    duration: '0530',
                    startDatetime: '20191102T163000',
                    endDatetime: '20191102T220000',
                  }}
                />
              </div>
            </div>

            <div css={animateInUp(3 / 4)}>
              <div css={{ fontSize: '2rem', fontWeight: 600 }}>where</div>
              <div css={{ paddingBottom: 40, fontSize: '2rem' }}>
                <div css={{ paddingBottom: 10 }}>
                  <a
                    href="https://goo.gl/maps/atD3ofuWznq"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Higuera Ranch
                  </a>
                  <p css={{ marginTop: 10, marginBottom: 10 }}>
                    525 El Camino Real, San Luis Obispo, CA 93401, USA
                  </p>
                </div>
                <div>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Higuera+Ranch"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Directions
                  </a>
                </div>
              </div>
            </div>

            <div css={animateInUp(4 / 4)}>
              <div css={{ fontSize: '2rem', fontWeight: 600 }}>attire</div>
              <div css={{ marginBottom: 10, fontSize: '2rem' }}>
                semi-formal
              </div>
              <em css={{ marginBottom: 10, fontSize: '1.75rem' }}>
                we suggest leaving stilettos at home
              </em>
            </div>

            <Schedule css={animateInUp(5 / 4)} />
          </div>

          <div>
            <div css={{ maxWidth: 350, margin: 'auto', ...animateInUp(2 / 4) }}>
              <div
                css={{ marginBottom: 20, fontSize: '2rem', fontWeight: 600 }}
              >
                bridal party
              </div>
            </div>
            <div css={animateInUp(3 / 4)}>
              <div css={{ fontSize: '2rem' }}>
                <div
                  css={{
                    position: 'relative',
                    transform: 'rotateZ(-5deg)',
                  }}
                >
                  <div
                    css={{
                      width: '100%',
                      position: 'absolute',
                      top: 6,
                      fontWeight: 600,
                    }}
                  >
                    <div>HER</div>
                    <div css={{ marginTop: -10, fontSize: 26 }}>
                      bridesmaids
                    </div>
                  </div>
                  <div
                    css={{
                      overflow: 'hidden',
                      border: '20px solid #fff',
                      borderTopWidth: 80,
                      background: '#fff',
                      borderRadius: 4,
                      boxShadow: '2px 4px 16px 2px #000',
                    }}
                  >
                    <div
                      css={{
                        padding: 10,
                        background: '#3E3D4D',
                        color: '#fff',
                      }}
                    >
                      <div css={{ position: 'relative' }}>
                        jessica kataoka
                        <span
                          css={{
                            position: 'absolute',
                            color: 'transparent',
                            textShadow: '0 0 0 #fff',
                          }}
                        >
                          ✨
                        </span>
                      </div>
                      <div>sandy wong</div>
                      <div>megan kwang</div>
                      <div>joan batoon</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div css={animateInUp(4 / 4)}>
              <div css={{ fontSize: '2rem' }}>
                <div
                  css={{
                    position: 'relative',
                    transform: 'rotateZ(3deg)',
                  }}
                >
                  <div
                    css={{
                      width: '100%',
                      position: 'absolute',
                      top: 6,
                      fontWeight: 600,
                    }}
                  >
                    <div>HIS</div>
                    <div css={{ marginTop: -10, fontSize: 26 }}>
                      groomspeople
                    </div>
                  </div>
                  <div
                    css={{
                      overflow: 'hidden',
                      border: '20px solid #fff',
                      borderTopWidth: 80,
                      background: '#fff',
                      borderRadius: 4,
                      boxShadow: '2px 4px 16px 2px #000',
                    }}
                  >
                    <div
                      css={{
                        padding: 10,
                        background: '#3E3D4D',
                        color: '#fff',
                      }}
                    >
                      <div css={{ position: 'relative' }}>
                        aaron buenaobra
                        <span
                          css={{
                            position: 'absolute',
                            color: 'transparent',
                            textShadow: '0 0 0 #fff',
                          }}
                        >
                          ✨
                        </span>
                      </div>
                      <div>andrew cruz</div>
                      <div>ejay landicho</div>
                      <div>leilani quock</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          css={{
            marginTop: 40,
            marginBottom: 40,
            fontSize: 20,
            ...animateInUp(6 / 4),
          }}
        >
          romans 12:9-10
        </div>
      </div>
    </>
  )
}
