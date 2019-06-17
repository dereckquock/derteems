import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { css } from 'glamor'
import AnimateHeight from 'react-animate-height'
import VisuallyHidden from '@reach/visually-hidden'
import Alert from '@reach/alert'
import qs from 'qs'
import Checkbox from './checkbox'
import Radio from './radio'

function getRsvpData(data) {
  return data.reduce((formData, { guest, isGoing, protein }) => {
    return {
      ...formData,
      [`${guest} Is Going`]: isGoing,
      [`${guest} Protein`]: protein,
    }
  }, {})
}

const useError = (initialError = '') => {
  const [errorMessage, setErrorMessage] = useState(initialError)

  const setError = message => {
    setErrorMessage(message)

    // hide the error Alert after 5s
    setTimeout(() => setErrorMessage(''), 5000)
  }

  return [errorMessage, setError]
}

export default () => {
  const {
    allGoogleSheetRsvpRow: { edges },
  } = useStaticQuery(graphql`
    query GuestsQuery {
      allGoogleSheetRsvpRow {
        edges {
          node {
            guest
            party
          }
        }
      }
    }
  `)
  const [error, setError] = useError('')
  const [showForm, setShowForm] = useState(false)
  const [showFindButton, setShowFindButton] = useState(false)
  const [name, setName] = useState('')
  const [party, setParty] = useState([]) // `party` is the data we wanna submit
  const [showRsvpSuccess, setRsvpSuccess] = useState(false)
  const guests = edges.map(({ node }) => node)

  const handleChangeName = ({ target: { value } }) => setName(value)
  const findParty = () => {
    if (!name) {
      return
    }

    const data = guests.find(({ guest: guestName }) => {
      if (guestName) {
        return guestName.toLowerCase().includes(name)
      }
    })

    if (!data) {
      setError('🤔 Make sure you spell your name correctly')
      return
    }

    const { guest, party: others = '' } = data

    setParty(
      [guest, ...(others && others.split(','))]
        .map((person = '') => {
          if (person) {
            return {
              guest: person.trim(),
              isGoing: false,
              protein: 'redMeat',
            }
          }
        })
        .filter(Boolean)
    )
  }
  const handleChangeRSVP = (guest, isGoing) => {
    setParty(
      party.map(data => {
        if (data.guest === guest) {
          return { ...data, isGoing }
        }
        return data
      })
    )
  }
  const handleChangeProtein = (guest, protein) => {
    setParty(
      party.map(data => {
        if (data.guest === guest) {
          return { ...data, protein }
        }
        return data
      })
    )
  }
  const handleSubmit = event => {
    event.preventDefault()

    if (!party.length) {
      setError('😭 Something went wrong...try again')
      return
    }

    if (process.env.NODE_ENV === 'development') {
      return setRsvpSuccess(true)
    }

    const rsvpData = getRsvpData(party)

    window
      .fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: qs.stringify({
          'form-name': 'rsvp',
          name,
          rsvpData: JSON.stringify(rsvpData),
        }),
      })
      .then(() => setRsvpSuccess(true))
      .catch(() => setError('😭 Something went wrong...try again'))
  }

  return (
    <>
      <AnimateHeight duration={500} height={error ? 'auto' : 0}>
        <Alert
          className={css({
            background: 'hsla(10, 50%, 50%, .10)',
          })}
        >
          <div
            className={css({
              padding: 10,
              fontSize: 24,
              fontWeight: 600,
            })}
          >
            {error}
          </div>
        </Alert>
      </AnimateHeight>

      {showForm ? (
        <div
          className={css({
            width: '100%',
            padding: '10px 40px',
            fontSize: '2rem',
            fontWeight: 600,
          })}
        >
          RSVP
        </div>
      ) : (
        <button
          className="btn"
          style={{
            width: '100%',
            padding: '10px 40px',
            fontSize: '1.75rem',
            fontWeight: 600,
          }}
          onClick={() => setShowForm(true)}
        >
          RSVP
        </button>
      )}

      <AnimateHeight duration={500} height={showRsvpSuccess ? 'auto' : 0}>
        <div className={css({ padding: 10, fontSize: '2.25rem' })}>
          Thanks! We're excited to see you!! 🤗🍻🥂🎉
        </div>
      </AnimateHeight>

      <AnimateHeight
        duration={500}
        height={showForm && !showRsvpSuccess ? 'auto' : 0}
        style={{
          width: showForm ? '100%' : 'auto',
        }}
      >
        <form
          name="rsvp"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          className={css({ margin: 0 })}
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="rsvp" />
          <label hidden>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>

          <input type="hidden" name="rsvpData" />

          <input
            name="name"
            className={css({
              width: '100%',
              padding: 10,
              margin: 'auto',
              display: 'block',
              border: 0,
              fontSize: '1.75rem',
              outline: 'none',
            })}
            autoCorrect="off"
            spellCheck="false"
            placeholder="Enter Your Full Name"
            value={name}
            onFocus={() => setShowFindButton(true)}
            onBlur={() => setShowFindButton(false)}
            onChange={handleChangeName}
          />

          <AnimateHeight
            duration={500}
            delay={500}
            height={showFindButton ? 'auto' : 0}
          >
            <button
              type="button"
              className="btn"
              style={{ width: '100%', borderRadius: 0 }}
              onClick={() => findParty()}
            >
              Find Your Invitation
            </button>
          </AnimateHeight>

          <AnimateHeight
            duration={500}
            height={party.length ? 'auto' : 0}
            style={{ width: '100%', textAlign: 'left' }}
          >
            <div className={css({ padding: 10 })}>
              {party.map(({ guest, isGoing, protein }) => (
                <div
                  key={guest}
                  className={css({
                    paddingBottom: 8,
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr',
                    alignItems: 'center',

                    ':not(:last-child)': {
                      borderBottom: '1px solid #fff',
                    },
                  })}
                >
                  <div className={css({ fontSize: '2rem' })}>{guest}</div>
                  <div
                    className={css({ fontSize: '1.5rem', textAlign: 'right' })}
                  >
                    <label
                      className={css({
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        cursor: 'pointer',
                        WebkitTapHighlightColor: 'transparent',
                        transform: 'translate3d(0, 0, 0)',
                      })}
                    >
                      going
                      <VisuallyHidden>
                        <input
                          type="checkbox"
                          name="going"
                          checked={isGoing}
                          onChange={({ target: { checked } }) =>
                            handleChangeRSVP(guest, checked)
                          }
                        />
                      </VisuallyHidden>
                      <Checkbox checked={isGoing} />
                    </label>

                    <AnimateHeight duration={500} height={isGoing ? 'auto' : 0}>
                      <label className={css({ fontSize: '1.5rem' })}>
                        <span className={css({ marginRight: 4 })}>
                          Short Ribs
                        </span>
                        <VisuallyHidden>
                          <input
                            type="radio"
                            value="redMeat"
                            checked={protein === 'redMeat'}
                            onChange={({ target: { value } }) =>
                              handleChangeProtein(guest, value)
                            }
                          />
                        </VisuallyHidden>
                        <Radio checked={protein === 'redMeat'} />
                      </label>
                      <label className={css({ fontSize: '1.5rem' })}>
                        <span className={css({ marginRight: 4 })}>Halibut</span>
                        <VisuallyHidden>
                          <input
                            type="radio"
                            value="fish"
                            checked={protein === 'fish'}
                            onChange={({ target: { value } }) =>
                              handleChangeProtein(guest, value)
                            }
                          />
                        </VisuallyHidden>
                        <Radio checked={protein === 'fish'} />
                      </label>
                    </AnimateHeight>
                  </div>
                </div>
              ))}
            </div>

            <input
              type="submit"
              className="btn"
              value="Submit"
              style={{ width: '100%', borderRadius: 0 }}
            />
          </AnimateHeight>
        </form>
      </AnimateHeight>
    </>
  )
}
