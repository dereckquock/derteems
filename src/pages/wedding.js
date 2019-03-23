import React from 'react'
import { css } from 'glamor'
import { animateInDown, animateInUp } from '../utils/animations'
import SEO from '../components/seo'
import AddToCalendar from '../components/addToCalendar'
import Schedule from '../components/schedule'

const event = {
  title: `Dereck and Fatima's Wedding`,
  description: 'Celebrate with us! 🍾',
  location: 'California',
  duration: '0500',
  startDatetime: '20191102T170000',
  endDatetime: '20191102T220000',
}

export default () => {
  return (
    <>
      <SEO title="The Wedding" />
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
          (wedding)
        </div>

        <div
          className={css(
            { marginBottom: 20, fontSize: 30, fontWeight: 600 },
            animateInUp()
          )}
        >
          #TeemQuock
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
            <div className={css(animateInUp(1 / 4))}>
              <div style={{ fontSize: '2rem', fontWeight: 600 }}>when</div>
              <div style={{ paddingBottom: 40, fontSize: '2rem' }}>
                <div style={{ marginBottom: 10 }}>November 2nd, 2019</div>
                <AddToCalendar event={event} />
              </div>
            </div>

            <div className={css(animateInUp(2 / 4))}>
              <div style={{ fontSize: '2rem', fontWeight: 600 }}>where</div>
              <div style={{ paddingBottom: 40, fontSize: '2rem' }}>
                <div style={{ paddingBottom: 10 }}>
                  <a
                    href="https://goo.gl/maps/atD3ofuWznq"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Higuera Ranch
                  </a>
                  <p style={{ marginTop: 10, marginBottom: 10 }}>
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

            <div className={css(animateInUp(3 / 4))}>
              <div style={{ fontSize: '2rem', fontWeight: 600 }}>RSVP</div>
              <p style={{ paddingBottom: 40, fontSize: '2rem' }}>
                coming soon...
              </p>
            </div>

            <Schedule className={css(animateInUp(4 / 4))} />
          </div>

          <div>
            <div
              className={css(
                { maxWidth: 350, margin: 'auto' },
                animateInUp(1 / 4)
              )}
            >
              <div
                style={{ marginBottom: 20, fontSize: '2rem', fontWeight: 600 }}
              >
                bridal party
              </div>
            </div>
            <div className={css(animateInUp(2 / 4))}>
              <div style={{ fontSize: '2rem' }}>
                <div
                  css={{
                    position: 'relative',
                    transform: 'rotateZ(-5deg)',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      position: 'absolute',
                      top: 6,
                      fontWeight: 600,
                    }}
                  >
                    <div>HER</div>
                    <div style={{ marginTop: -10, fontSize: 26 }}>
                      bridesmaids
                    </div>
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
                    <div
                      style={{
                        padding: 10,
                        background: '#3E3D4D',
                        color: '#fff',
                      }}
                    >
                      <div style={{ position: 'relative' }}>
                        jessica kataoka
                        <span
                          style={{
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
            <div className={css(animateInUp(3 / 4))}>
              <div style={{ fontSize: '2rem' }}>
                <div
                  css={{
                    position: 'relative',
                    transform: 'rotateZ(3deg)',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      position: 'absolute',
                      top: 6,
                      fontWeight: 600,
                    }}
                  >
                    <div>HIS</div>
                    <div style={{ marginTop: -10, fontSize: 26 }}>
                      groomspeople
                    </div>
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
                    <div
                      style={{
                        padding: 10,
                        background: '#3E3D4D',
                        color: '#fff',
                      }}
                    >
                      <div style={{ position: 'relative' }}>
                        aaron buenaobra
                        <span
                          style={{
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
          className={css(
            { marginTop: 40, marginBottom: 40, fontSize: 20 },
            animateInUp(6 / 4)
          )}
        >
          romans 12:9-10
        </div>
      </div>
    </>
  )
}
