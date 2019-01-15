import React from 'react'
import SEO from '../components/seo'

const SecondPage = () => (
  <div style={{ background: '#E8DFC5' }}>
    <SEO title="The Wedding" />
    <div
      css={{
        height: '100vh',
        maxWidth: 1024,
        padding: 40,
        margin: 'auto',
        textAlign: 'center',
        '@media(max-width: 667px)': {
          padding: 20,
        },
      }}
    >
      <h1 style={{ paddingBottom: 20 }}>The Wedding👰🤵</h1>
      <h2>when</h2>
      <div style={{ paddingBottom: 40, fontSize: 20 }}>
        <div style={{ marginBottom: 10 }}>November 2nd, 2019</div>
        <div title="Add to Calendar" className="addeventatc">
          Add to Calendar
          <span className="start">11/02/2019 05:00 PM</span>
          <span className="end">11/02/2019 10:00 PM</span>
          <span className="timezone">America/Los_Angeles</span>
          <span className="title">Dereck and Fatima's Wedding</span>
          <span className="description">Please celebrate with us! 🍾</span>
          <span className="location">Higuera Ranch</span>
        </div>
      </div>

      <h2>where</h2>
      <div style={{ paddingBottom: 40, fontSize: 20 }}>
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

      <h2>RSVP</h2>
      <p>coming soon...</p>
    </div>
  </div>
)

export default SecondPage
