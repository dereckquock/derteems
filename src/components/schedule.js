import React, { useState } from 'react'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'
import './schedule.css'
import { css } from 'glamor'
import { animateInDown, animateInUp } from '../utils/animations'

export default props => {
  const [showSchedule, setShowSchedule] = useState(false)

  return (
    <>
      <button
        className={`btn ${props.className}`}
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
          css={{
            width: '80vw !important',
            height: '80vh !important',
            maxWidth: 1024,
            textAlign: 'center',
            boxShadow: '0px 10px 50px hsla(0, 0%, 0%, 0.33)',
            borderRadius: 8,
            overflow: 'scroll',
            WebkitOverflowScrolling: 'touch',

            '@media(max-width: 414px)': {
              width: '90vw !important',
              height: '90vh !important',
              margin: '20px auto !important',
            },
          }}
        >
          <div
            className={animateInDown()}
            style={{ position: 'relative', fontSize: '2rem', fontWeight: 600 }}
          >
            Schedule
            <button
              className={css(
                {
                  position: 'absolute',
                  top: -20,
                  right: -20,
                  border: 0,
                  background: 'none',
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'all 0.75s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
                  ':hover': {
                    transform: 'rotateZ(90deg)',
                  },
                },
                animateInDown()
              )}
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
          </div>

          <ul className="timeline">
            <li className={`event ${css(animateInUp(1 / 3))}`}>
              <div className="event-time">5pm</div>
              <div>
                <div className="event-title">Ceremony</div>
                <div className="event-description">@ the fig tree</div>
              </div>
            </li>
            <li className={`event ${css(animateInUp(2 / 3))}`}>
              <div className="event-time">6pm</div>
              <div>
                <div className="event-title">Cocktail Hour</div>
                <div className="event-description">@ the barn</div>
              </div>
            </li>
            <li className={`event ${css(animateInUp(3 / 3))}`}>
              <div className="event-time">7pm</div>
              <div>
                <div className="event-title">Dinner Reception</div>
                <div className="event-description">@ the barn</div>
              </div>
            </li>
            <li className={`event ${css(animateInUp(4 / 3))}`}>
              <div className="event-time">9pm</div>
              <div>
                <div className="event-title">Party!</div>
                <div className="event-description">@ the barn</div>
              </div>
            </li>
          </ul>
        </DialogContent>
      </DialogOverlay>
    </>
  )
}
