import React, { useState } from 'react'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'
import './schedule.css'

export default () => {
  const [showSchedule, setShowSchedule] = useState(false)

  return (
    <>
      <button
        className="btn"
        style={{ marginBottom: 20 }}
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
            width: '80vw',
            height: '80vh',
            maxWidth: 1024,
            textAlign: 'center',
            boxShadow: '0px 10px 50px hsla(0, 0%, 0%, 0.33)',
            borderRadius: 8,
          }}
        >
          <h2 style={{ position: 'relative', fontSize: '2rem' }}>
            Schedule
            <button
              css={{
                position: 'absolute',
                top: 0,
                right: 0,
                border: 0,
                background: 'none',
                cursor: 'pointer',
                outline: 'none',
                transition: 'all 0.75s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
                ':hover': {
                  transform: 'rotateZ(90deg)',
                },
              }}
              onClick={() => setShowSchedule(false)}
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
          </h2>

          <ul className="timeline">
            <li className="event">
              <div className="event-time">5pm</div>
              <div>
                <div className="event-title">Ceremony</div>
                <div className="event-description">@ the fig tree</div>
              </div>
            </li>
            <li className="event">
              <div className="event-time">6pm</div>
              <div>
                <div className="event-title">Cocktail Hour</div>
                <div className="event-description">@ the barn</div>
              </div>
            </li>
            <li className="event">
              <div className="event-time">7pm</div>
              <div>
                <div className="event-title">Dinner Reception</div>
                <div className="event-description">@ the barn</div>
              </div>
            </li>
          </ul>
        </DialogContent>
      </DialogOverlay>
    </>
  )
}
