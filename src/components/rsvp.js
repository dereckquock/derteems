import React, { useState, useReducer, useRef } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import ReactGA from 'react-ga'
import AnimateHeight from 'react-animate-height'
import VisuallyHidden from '@reach/visually-hidden'
import Alert from '@reach/alert'
import qs from 'qs'
import Checkbox from './checkbox'
import Radio from './radio'
import Success from './rsvpSuccess'

const isDev = process.env.NODE_ENV === 'development'

const initialState = {
  showForm: false,
  showFindButton: false,
  name: '',
  party: [],
  isPartyAttending: false,
  showRsvpSuccess: false,
  showAlreadyRSVPd: false,
}

function reducer(state, action) {
  if (isDev) {
    console.log(
      `%c${action.type}%c${JSON.stringify(action.value, null, 2)}`,
      'padding: 6px 8px; margin-right: 10px; background: #00C6FF; color: #fff; border-radius: 4px;',
      'color: #0078FF'
    )
  }

  switch (action.type) {
    case 'setShowForm':
      return { ...state, showForm: action.value }
    case 'setShowFindButton':
      return { ...state, showFindButton: action.value }
    case 'setName':
      return { ...state, name: action.value }
    case 'setParty':
      return { ...state, party: action.value }
    case 'setIsPartyAttending':
      return { ...state, isPartyAttending: action.value }
    case 'setShowRsvpSuccess':
      return { ...state, showRsvpSuccess: action.value }
    case 'setShowAlreadyRSVPd':
      return { ...state, showAlreadyRSVPd: action.value }
    default:
      console.log(`action "${action.type}" not handled`)
      return state
  }
}

function useError(initialError = '') {
  const [errorMessage, setErrorMessage] = useState(initialError)

  const setError = message => {
    setErrorMessage(message)

    // hide the error Alert after 5s
    setTimeout(() => setErrorMessage(''), 5000)
  }

  return [errorMessage, setError]
}

function getRsvpData(data) {
  return data.reduce((formData, { guest, isGoing, protein }) => {
    return {
      ...formData,
      [`${guest} Is Going`]: isGoing,
      [`${guest} Protein`]: protein,
    }
  }, {})
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
            hasrsvpd
          }
        }
      }
    }
  `)
  const [error, setError] = useError('')
  const [
    {
      showForm,
      showFindButton,
      name,
      party, // `party` is the data we wanna submit
      isPartyAttending,
      showRsvpSuccess,
      showAlreadyRSVPd,
    },
    dispatch,
  ] = useReducer(reducer, initialState)
  const nameRef = useRef(null)

  const guests = edges.map(({ node }) => node)
  const startRSVP = () => {
    dispatch({ type: 'setShowForm', value: true })
    setTimeout(() => nameRef.current.focus(), 0)
    ReactGA.event({
      category: 'RSVP',
      action: 'Start RSVP',
    })
  }
  const handleChangeName = ({ target: { value } }) =>
    dispatch({ type: 'setName', value })

  const findParty = () => {
    if (!name) {
      return
    }

    ReactGA.event({
      category: 'RSVP',
      action: 'Find Invitation',
    })

    const data = guests.find(({ guest: guestName }) => {
      if (guestName) {
        return guestName.toLowerCase().includes(name.toLowerCase())
      }
    })

    if (!data) {
      setError('🤔 Make sure you spell your name correctly')
      ReactGA.event({
        category: 'RSVP',
        action: 'Error finding invitation',
        label: name,
      })
      return
    }

    // data from google sheets
    const { guest, party: others = '', hasrsvpd = false } = data

    if (hasrsvpd) {
      dispatch({ type: 'setShowAlreadyRSVPd', value: true })
      ReactGA.event({
        category: 'RSVP',
        action: 'Already RSVPd',
        label: name,
      })
      return
    }

    dispatch({
      type: 'setParty',
      value: [guest, ...((others && others.split(',')) || [])]
        .map((person = '') => {
          if (person) {
            return {
              guest: person.trim(),
              isGoing: false,
              protein: 'redMeat',
            }
          }
        })
        .filter(Boolean),
    })
  }
  const handleChangeRSVP = (guest, isGoing) => {
    dispatch({
      type: 'setParty',
      value: party.map(data => {
        if (data.guest === guest) {
          return { ...data, isGoing }
        }
        return data
      }),
    })
  }
  const handleChangeProtein = (guest, protein) => {
    dispatch({
      type: 'setParty',
      value: party.map(data => {
        if (data.guest === guest) {
          return { ...data, protein }
        }
        return data
      }),
    })
  }
  const handleSubmit = event => {
    event.preventDefault()

    if (!party.length) {
      setError('😭 Something went wrong...try again')
      ReactGA.event({
        category: 'RSVP',
        action: 'Error with party data',
      })
      return
    }

    dispatch({
      type: 'setIsPartyAttending',
      value: party.some(({ isGoing }) => isGoing),
    })

    const rsvpData = getRsvpData(party)

    if (isDev) {
      console.log('rsvpData', rsvpData)
      return dispatch({ type: 'setShowRsvpSuccess', value: true })
    }

    ReactGA.event({
      category: 'RSVP',
      action: 'Submit RSVP',
    })

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
      .then(() => {
        dispatch({ type: 'setShowRsvpSuccess', value: true })
        ReactGA.event({
          category: 'RSVP',
          action: 'Success',
        })
      })
      .catch(() => {
        setError('😭 Something went wrong...try again')
        ReactGA.event({
          category: 'RSVP',
          action: 'Error submitting',
        })
      })
  }

  return (
    <>
      <AnimateHeight duration={500} height={error ? 'auto' : 0}>
        <Alert css={{ background: 'hsla(10, 50%, 50%, .10)' }}>
          <div css={{ padding: 10, fontSize: 24, fontWeight: 600 }}>
            {error}
          </div>
        </Alert>
      </AnimateHeight>

      {showForm ? (
        <div
          css={{
            width: '100%',
            padding: '10px 40px',
            fontSize: '2rem',
            fontWeight: 600,
          }}
        >
          RSVP
        </div>
      ) : (
        <button
          className="btn"
          css={{
            width: '100%',
            padding: '10px 40px',
            fontSize: '1.75rem',
            fontWeight: 600,
          }}
          onClick={startRSVP}
        >
          RSVP
        </button>
      )}

      <AnimateHeight duration={500} height={showRsvpSuccess ? 'auto' : 0}>
        <Success isPartyAttending={isPartyAttending} />
      </AnimateHeight>

      <AnimateHeight duration={500} height={showAlreadyRSVPd ? 'auto' : 0}>
        <div css={{ padding: 10, fontSize: '2.25rem' }}>
          You've already RSVP'd! Thanks 🍻
        </div>
      </AnimateHeight>

      <AnimateHeight
        duration={500}
        height={showForm && !showRsvpSuccess && !showAlreadyRSVPd ? 'auto' : 0}
        style={{
          width: showForm ? '100%' : 'auto',
        }}
      >
        <form
          name="rsvp"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          css={{ margin: 0 }}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="rsvp" />
          <label hidden>
            Don’t fill this out if you're human: <input name="bot-field" />
          </label>

          <input type="hidden" name="rsvpData" />

          <input
            ref={nameRef}
            name="name"
            css={{
              width: '100%',
              padding: 10,
              margin: 'auto',
              display: 'block',
              border: 0,
              fontSize: '1.75rem',
              outline: 'none',
              caretColor: '#3e3d4d',
              WebkitAppearance: 'none',
            }}
            autoCorrect="off"
            spellCheck="false"
            placeholder="Enter Your Full Name"
            value={name}
            onFocus={() => dispatch({ type: 'setShowFindButton', value: true })}
            onBlur={() => dispatch({ type: 'setShowFindButton', value: false })}
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
            <div css={{ padding: 10 }}>
              {party.map(({ guest, isGoing, protein }) => (
                <div
                  key={guest}
                  css={{
                    paddingBottom: 8,
                    display: 'grid',
                    gridTemplateColumns: '2fr 1fr',
                    alignItems: 'center',

                    ':not(:last-child)': {
                      borderBottom: '1px solid #fff',
                    },
                  }}
                >
                  <div css={{ fontSize: '2rem' }}>{guest}</div>
                  <div css={{ fontSize: '1.5rem', textAlign: 'right' }}>
                    <label
                      css={{
                        marginTop: 10,
                        marginBottom: 10,
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        cursor: 'pointer',
                        WebkitTapHighlightColor: 'transparent',
                        transform: 'translate3d(0, 0, 0)',
                      }}
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
                      <label
                        css={{
                          marginBottom: 10,
                          display: 'inline-block',
                          fontSize: '1.5rem',
                        }}
                      >
                        <span css={{ marginRight: 4 }}>Short Ribs</span>
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
                      <label
                        css={{
                          marginBottom: 10,
                          display: 'inline-block',
                          fontSize: '1.5rem',
                        }}
                      >
                        <span css={{ marginRight: 4 }}>Halibut</span>
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
              type="button"
              className="btn"
              value="Submit"
              onClick={handleSubmit}
              css={{ width: '100%', borderRadius: 0 }}
            />
          </AnimateHeight>
        </form>
      </AnimateHeight>
    </>
  )
}
