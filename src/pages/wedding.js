import React from 'react'
import AddToCalendarHOC from 'react-add-to-calendar-hoc'
import SEO from '../components/seo'

const event = {
  title: `Dereck and Fatima's Wedding`,
  description: 'Celebrate with us! 🍾',
  location: 'California',
  duration: '0500',
  startDatetime: '20191102T170000',
  endDatetime: '20191102T220000',
}

function Button({ children, onClick }) {
  return (
    <button
      css={{
        width: 200,
        padding: 10,
        border: '1px solid #e5e5e5',
        color: '#e42d2d',
        fontSize: 16,
        borderRadius: 5,
        cursor: 'pointer',
        '&:focus': {
          outline: 'none',
        },
      }}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

function Dropdown({ children }) {
  return (
    <div
      css={{
        width: 200,
        padding: 10,
        margin: '0 auto',
        display: 'grid',
        gridGap: 6,
        border: '1px solid #e5e5e5',
        borderTop: 'none',
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: '#fff',
      }}
    >
      {children}
    </div>
  )
}

const AddToCalendar = AddToCalendarHOC(Button, Dropdown)

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
      <h1 style={{ paddingBottom: 20 }}>
        <div>The Wedding</div>
        👰🤵
      </h1>
      <h2>when</h2>
      <div style={{ paddingBottom: 40, fontSize: 20 }}>
        <div style={{ marginBottom: 10 }}>November 2nd, 2019</div>
        <AddToCalendar event={event} />
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
