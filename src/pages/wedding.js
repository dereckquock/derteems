import React, { useState } from 'react'
import AddToCalendarHOC from 'react-add-to-calendar-hoc'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'
import SEO from '../components/seo'

const styles = {
  button: {
    padding: '10px 16px',
    fontSize: '1.5rem',
    border: 0,
    borderRadius: 25,
    backgroundColor: '#3E3D4D',
    color: '#fff',
    cursor: 'pointer',
    ':focus': {
      outline: 'none',
    },
    ':active': {
      backgroundColor: '#F7DBCA',
      fontWeight: 'bold',
    },
  },
}

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
        background: '#3E3D4D',
        color: '#fff',
        fontSize: '1.5rem',
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

const SecondPage = () => {
  const [showSchedule, setShowSchedule] = useState(false)

  return (
    <div style={{ background: '#DDD3C9' }}>
      <SEO title="The Wedding" />
      <div className="contents">
        <h1 style={{ paddingBottom: 20 }}>
          <div>The Wedding</div>
          👰🤵
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

        <button
          css={{ ...styles.button, marginBottom: 20 }}
          onClick={() => setShowSchedule(true)}
        >
          Schedule
        </button>
        <DialogOverlay
          style={{ background: 'hsla(0, 100%, 100%, 0.9)' }}
          isOpen={showSchedule}
        >
          <DialogContent
            style={{
              textAlign: 'center',
              boxShadow: '0px 10px 50px hsla(0, 0%, 0%, 0.33)',
              borderRadius: 8,
            }}
          >
            <p>Wedding schedule coming soon...</p>
            <button
              css={{
                ...styles.button,
                fontSize: '2rem',
                backgroundColor: '#3E3D4D',
              }}
              onClick={() => setShowSchedule(false)}
            >
              Done
            </button>
          </DialogContent>
        </DialogOverlay>
      </div>
    </div>
  )
}

export default SecondPage
