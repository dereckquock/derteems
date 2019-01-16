import React from 'react'
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
    <div style={{ background: '#DDD3C9' }}>
      <SEO title="The Wedding" />
      <div className="contents">
        <h1 style={{ marginTop: 20 }}>
          <div
            css={{
              fontFamily: 'Shorelines',
              breakWord: 'keep-all',
              '@media(max-width: 414px)': { fontSize: 30 },
            }}
          >
            (wedding)
          </div>
        </h1>

        <h2 style={{ fontSize: '2rem' }}>when</h2>
        <div style={{ paddingBottom: 40, fontSize: '2rem' }}>
          <div style={{ marginBottom: 10 }}>November 2nd, 2019</div>
          <AddToCalendar event={event} />
        </div>

        <h2 style={{ fontSize: '2rem' }}>where</h2>
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

        <h2 style={{ fontSize: '2rem' }}>RSVP</h2>
        <div style={{ paddingBottom: 40, fontSize: '2rem' }}>
          <p>coming soon...</p>
        </div>

        <Schedule />
      </div>
    </div>
  )
}
