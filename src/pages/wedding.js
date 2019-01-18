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
          css={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            '@media(max-width: 414px)': { gridTemplateColumns: '1fr' },
          }}
        >
          <div className={css(animateInUp(1 / 4))}>
            <div style={{ fontSize: '2rem' }}>when</div>
            <div style={{ paddingBottom: 40, fontSize: '2rem' }}>
              <div style={{ marginBottom: 10 }}>November 2nd, 2019</div>
              <AddToCalendar event={event} />
            </div>
          </div>

          <div className={css(animateInUp(2 / 4))}>
            <div style={{ fontSize: '2rem' }}>where</div>
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
        </div>

        <div className={css(animateInUp(3 / 4))} style={{ fontSize: '2rem' }}>
          RSVP
        </div>
        <div
          className={css(animateInUp(4 / 4))}
          style={{ paddingBottom: 40, fontSize: '2rem' }}
        >
          <p>coming soon...</p>
        </div>

        <Schedule className={css(animateInUp(5 / 4))} />
      </div>
    </>
  )
}
