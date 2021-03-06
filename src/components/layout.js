import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup, Transition } from 'react-transition-group'
import { Link } from 'gatsby'
import { keyframes } from '@emotion/core'
import { isIE, isEdge } from 'react-device-detect'
import './layout.css'
import '@reach/dialog/styles.css'
import ReactGA from 'react-ga'
import { ThemeProvider } from '../utils/theme-context'
import { animateGrowIn, animateInDown } from '../utils/animations'

ReactGA.initialize('UA-137879047-1')

const styles = {
  tab: {
    padding: 12,
    display: 'grid',
    background: '#3E3D4D',
    color: '#fff',
    textDecoration: 'none',
    transition: 'all 0.5s ease-in-out 0s',
  },
  activeTab: {
    background: '#816D66',
  },
}
const orange = '#eb6123'
const crawlAnimation = keyframes({
  '0%': { transform: 'translateY(220px)' },
  '10%': { transform: 'translateY(200px) rotate(10deg)' },
  '20%': { transform: 'translateY(180px) rotate(-10deg)' },
  '30%': { transform: 'translateY(160px) rotate(10deg)', opacity: 1 },
  '40%': { transform: 'translateY(140px) rotate(-10deg)', opacity: 1 },
  '50%': { transform: 'translateY(120px) rotate(10deg)', opacity: 1 },
  '60%': { transform: 'translateY(100px) rotate(-10deg)', opacity: 1 },
  '70%': { transform: 'translateY(80px) rotate(10deg)', opacity: 1 },
  '80%': { transform: 'translateY(40px) rotate(-10deg)' },
  '90%': { transform: 'translateY(20px) rotate(10deg)' },
  '100%': { transform: 'translateY(10px) rotate(-10deg)' },
})

const transitionStyles = {
  entering: { position: 'absolute', opacity: 0 },
  entered: { opacity: 1 },
}

const UpdateBrowser = () => (
  <div style={{ padding: 40, textAlign: 'center' }}>
    <h2 style={{ fontSize: 40, textAlign: 'center' }}>
      update your browser for more security, speed, and the best experience
    </h2>
    <a
      href="https://www.google.com/chrome/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: '100%',
        marginBottom: 40,
        display: 'inline-block',
        textAlign: 'center',
        textDecoration: 'none',
      }}
    >
      <img
        src="https://www.google.com/chrome/static/images/chrome-logo.svg"
        alt="Google Chrome"
        width="100px"
      />
      <div className="btn" style={{ width: 250, margin: 'auto' }}>
        Download Google Chrome
      </div>
    </a>
    <a
      href="https://www.google.com/chrome/"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        width: '100%',
        marginBottom: 40,
        display: 'inline-block',
        textAlign: 'center',
        textDecoration: 'none',
      }}
    >
      <img
        src="https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png"
        alt="Mozilla Firefox"
        width="100px"
      />
      <div className="btn" style={{ width: 250, margin: 'auto' }}>
        Download Mozilla Firefox
      </div>
    </a>
  </div>
)

const Layout = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('')
  const [showBoos, setShowBoos] = useState(false)

  useEffect(() => {
    const initialPage = window.location.pathname.replace(/\//g, '') || 'home'

    setCurrentPage(initialPage)
    ReactGA.pageview(`/${initialPage}`)
  }, [])

  const handleChangeTab = page => {
    setCurrentPage(page)
    ReactGA.pageview(`/${page}`)
  }

  if (isIE || isEdge) {
    return <UpdateBrowser />
  }

  return (
    <>
      <div
        css={{
          position: 'absolute',
          top: 0,
          right: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          zIndex: 88,
        }}
      >
        <button
          css={[
            {
              padding: '10px 14px',
              border: 0,
              background: 'transparent',
              outline: 'none',
              cursor: 'pointer',
            },
            animateInDown(1),
          ]}
          onClick={() => {
            ReactGA.event({
              category: 'Boos',
              action: 'Show',
            })
            setShowBoos(!showBoos)
          }}
        >
          <div
            css={[
              {
                fontSize: showBoos ? 36 : 30,
                transform: `rotate(${showBoos ? '200deg' : '0'})`,
                transition: 'all 0.25s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
              },
              animateGrowIn(1.25),
            ]}
          >
            👻
          </div>
          <div
            css={{
              width: 48,
              fontSize: 24,
              lineHeight: '18px',
              color: orange,
              fontWeight: 600,
            }}
          >
            here's the boos
          </div>
        </button>
        {showBoos && (
          <>
            <ul
              css={[
                {
                  width: 326,
                  padding: 20,
                  margin: 0,
                  fontSize: 28,
                  background: '#fff',
                  listStyle: 'none',
                  borderTopLeftRadius: 10,
                  borderBottomLeftRadius: 10,
                  boxShadow: '0 2px 16px 10px rgb(129, 109, 102)',
                },
                animateInDown(),
              ]}
            >
              <li css={{ display: 'flex' }}>
                <span css={{ marginRight: 4 }}>🎃</span>
                <span>
                  <b>Thursday</b> – we went to Farmers and it was delicious
                </span>
              </li>
              <li css={{ display: 'flex' }}>
                <span css={{ marginRight: 4 }}>🎃</span>
                <span>
                  <b>Friday</b> – we went downtown to the bars and we were saucy
                  🌮🌶🔥
                </span>
              </li>
              <li css={{ margin: 0, display: 'flex' }}>
                <span css={{ marginRight: 4 }}>🎃</span>
                <span>
                  <b>THANK YOU ALL FOR COMING 🔥</b> we love you and we're
                  blessed to have you in our lives
                </span>
              </li>
            </ul>

            <div
              css={{
                position: 'absolute',
                top: 130,
                right: 0,
                fontSize: 30,
                opacity: 0,
                animation: `${crawlAnimation} 3s ease-in 0.5s infinite normal backwards`,
              }}
            >
              🕷
            </div>
          </>
        )}
      </div>

      <TransitionGroup>
        <Transition key={currentPage} timeout={150}>
          {state => (
            <div
              className={showBoos ? 'darkMode' : ''}
              css={[
                {
                  width: '100%',
                  height: '100%',
                  transition: 'all 1.25s ease-in-out',
                  opacity: 0,
                },
                transitionStyles[state],
              ]}
            >
              <ThemeProvider key={currentPage} darkMode={showBoos}>
                {children}
              </ThemeProvider>
            </div>
          )}
        </Transition>
      </TransitionGroup>
      <div
        style={{
          width: '100vw',
          position: 'fixed',
          bottom: 0,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          alignContent: 'center',
          textAlign: 'center',
          fontSize: '1.75rem',
        }}
      >
        <Link
          to="/"
          css={[styles.tab, showBoos ? { background: orange } : {}]}
          activeStyle={styles.activeTab}
          onClick={() => handleChangeTab('home')}
        >
          <div style={{ height: 36 }}>
            <svg width="36px" height="36px" viewBox="-41 0 512 512.00138">
              <path
                d="m303.679688 332.148438c5.332031-1.429688 8.5-6.910157 7.070312-12.238282v-.011718c-1.4375-5.328126-6.917969-8.488282-12.25-7.058594-5.328125 1.429687-8.5 6.910156-7.070312 12.238281 1.429687 5.339844 6.910156 8.5 12.25 7.070313zm0 0"
                fill="#FFFFFF"
              />
              <path
                d="m131.960938 312.839844c-5.328126-1.429688-10.808594 1.730468-12.25 7.058594v.011718c-1.429688 5.328125 1.742187 10.808594 7.070312 12.238282 5.339844 1.429687 10.820312-1.730469 12.25-7.070313 1.429688-5.328125-1.738281-10.808594-7.070312-12.238281zm0 0"
                fill="#FFFFFF"
              />
              <path
                d="m215.230469 0c-5.519531 0-10 4.476562-10 10v46c0 5.523438 4.480469 10 10 10 5.523437 0 10-4.476562 10-10v-46c0-5.523438-4.476563-10-10-10zm0 0"
                fill="#FFFFFF"
              />
              <path
                d="m263.722656 61.652344 28.289063-28.292969c3.90625-3.902344 3.90625-10.234375 0-14.140625s-10.234375-3.90625-14.140625 0l-28.292969 28.289062c-3.902344 3.90625-3.902344 10.238282 0 14.144532 3.90625 3.902344 10.238281 3.90625 14.144531 0zm0 0"
                fill="#FFFFFF"
              />
              <path
                d="m152.59375 19.21875c-3.90625-3.90625-10.238281-3.90625-14.144531 0-3.902344 3.90625-3.902344 10.238281 0 14.144531l28.292969 28.289063c3.902343 3.90625 10.234374 3.90625 14.140624 0s3.90625-10.238282 0-14.144532zm0 0"
                fill="#FFFFFF"
              />
              <path
                d="m224.832031 115.167969 7.757813 28.980469c.546875 2.039062 1.730468 3.855468 3.375 5.1875l6.277344 5.074218c2.398437 19.300782 5.636718 43.429688 8.328124 56.746094 3.898438 19.265625 11.894532 46.183594 14.753907 55.589844-11.90625 31.679687-13.28125 65.84375-4.761719 97.675781 3.617188 13.472656 29.933594 111.53125 33.640625 125.335937 4.332031 16.160157 20.890625 25.460938 36.71875 21.21875l77.300781-20.488281c16.011719-4.292969 25.503906-20.71875 21.207032-36.734375-1.820313-6.804687-30.714844-114.667968-33.636719-125.570312-8.925781-33.34375-28.152344-61.789063-52.964844-82.203125-3.785156-16.253907-9.699219-39.683594-15.019531-55.523438-4.28125-12.753906-13.5625-35.320312-21.164063-53.304687l2.898438-7.53125c.761719-1.972656.875-4.136719.328125-6.179688l-7.773438-28.980468c-1.429687-5.335938-6.90625-8.5-12.246094-7.070313l-57.949218 15.53125c-5.335938 1.429687-8.5 6.910156-7.070313 12.246094zm185.28125 343.761719c1.449219 5.414062-1.820312 10.832031-7.042969 12.230468l-77.296874 20.488282c-5.332032 1.433593-10.824219-1.742188-12.253907-7.070313l-7.71875-28.757813 96.546875-25.875zm-124.742187-349.632813 4.339844 16.179687-3.183594 8.261719c-.929688 2.417969-.886719 5.109375.128906 7.5 11.050781 26.039063 18.726562 45.261719 22.195312 55.585938 5.492188 16.355469 11.375 40.253906 15.253907 56.976562.507812 2.242188 1.773437 4.242188 3.578125 5.664063 12.945312 10.164062 24.113281 22.726562 32.773437 36.769531l-23.320312 6.246094c-5.332031 1.429687-8.5 6.914062-7.070313 12.25 1.429688 5.335937 6.917969 8.5 12.246094 7.070312l27.582031-7.390625c2.644531 6.167969 4.855469 12.507813 6.578125 18.949219l20.699219 77.269531-96.554687 25.875-20.734376-77.257812c-7.585937-28.328125-6.351562-59.355469 5.300782-88.390625.855468-2.136719.949218-4.5.265625-6.695313-.105469-.34375-10.777344-34.757812-15.277344-56.972656-2.753906-13.625-6.183594-39.730469-8.574219-59.234375-.316406-2.574219-1.621094-4.929687-3.640625-6.5625l-6.890625-5.5625-4.328125-16.175781zm0 0"
                fill="#FFFFFF"
              />
              <path
                d="m306.960938 383.039062c4.277343 15.953126 20.738281 25.496094 36.738281 21.210938 16.011719-4.292969 25.503906-20.714844 21.210937-36.730469-4.277344-16.015625-20.710937-25.511719-36.730468-21.222656-16.023438 4.28125-25.511719 20.71875-21.21875 36.742187zm26.390624-17.421874c5.386719-1.445313 10.828126 1.785156 12.238282 7.0625v.007812c1.433594 5.335938-1.726563 10.808594-7.066406 12.242188-5.339844 1.429687-10.8125-1.730469-12.242188-7.070313-1.414062-5.277344 1.667969-10.796875 7.070312-12.242187zm0 0"
                fill="#FFFFFF"
              />
              <path
                d="m198.558594 102.921875-57.949219-15.53125c-5.328125-1.429687-10.816406 1.734375-12.246094 7.070313l-7.769531 28.980468c-.546875 2.039063-.433594 4.203125.324219 6.175782.054687.136718 2.859375 7.425781 2.902343 7.53125-10.542968 24.945312-17.660156 42.867187-21.167968 53.308593-6.257813 18.640625-12.792969 45.953125-15.019532 55.523438-26.714843 21.953125-44.65625 51.167969-52.960937 82.203125-3.207031 11.972656-28.785156 107.453125-33.640625 125.566406-4.285156 15.996094 5.167969 32.4375 21.238281 36.746094l77.242188 20.472656c16.003906 4.292969 32.453125-5.183594 36.75-21.207031 3.71875-13.855469 30.011719-111.828125 33.640625-125.34375 8.722656-32.597657 6.816406-66.789063-4.765625-97.671875 4.808593-15.84375 11.460937-39.277344 14.757812-55.59375 2.691407-13.320313 5.929688-37.445313 8.328125-56.742188l6.273438-5.070312c1.644531-1.332032 2.828125-3.148438 3.375-5.191406l7.761718-28.980469c1.425782-5.335938-1.738281-10.816407-7.074218-12.246094zm-81.617188 381.65625c-1.425781 5.328125-6.925781 8.5-12.277344 7.066406l-77.242187-20.472656c-5.339844-1.433594-8.503906-6.90625-7.070313-12.246094l7.761719-28.980469 96.546875 25.875zm62.453125-348.75-6.886719 5.5625c-2.019531 1.632813-3.328124 3.984375-3.640624 6.5625-2.390626 19.496094-5.820313 45.597656-8.578126 59.238281-3.277343 16.222656-10.699218 42.238282-15.277343 56.96875-.683594 2.195313-.585938 4.558594.269531 6.691406 10.898438 27.167969 13.371094 58.246094 5.300781 88.386719l-20.738281 77.265625-96.554688-25.875 20.703126-77.273437c1.722656-6.441407 3.933593-12.78125 6.578124-18.945313l27.25 7.308594c5.355469 1.4375 10.824219-1.753906 12.25-7.066406 1.433594-5.335938-1.734374-10.820313-7.066406-12.25l-23.011718-6.175782c8.703124-14.144531 19.757812-26.53125 32.785156-36.761718 1.808594-1.421875 3.074218-3.417969 3.582031-5.664063.078125-.351562 8.042969-35.507812 15.253906-56.976562 3.464844-10.316407 11.140625-29.539063 22.195313-55.585938 1.011718-2.386719 1.058594-5.078125.128906-7.496093-.734375-1.90625-2.152344-5.597657-3.183594-8.265626l4.335938-16.179687 38.636718 10.355469zm0 0"
                fill="#FFFFFF"
              />
              <path
                d="m102.289062 346.300781c-16.003906-4.289062-32.457031 5.1875-36.738281 21.210938-4.28125 15.972656 5.234375 32.453125 21.210938 36.738281 15.824219 4.238281 32.398437-5.015625 36.738281-21.210938 4.292969-16.007812-5.1875-32.457031-21.210938-36.738281zm1.894532 31.558594c-1.429688 5.335937-6.902344 8.503906-12.242188 7.070313-5.3125-1.421876-8.507812-6.875-7.070312-12.25 1.421875-5.308594 6.875-8.496094 12.25-7.058594 5.261718 1.40625 8.507812 6.835937 7.0625 12.238281zm0 0"
                fill="#FFFFFF"
              />
            </svg>
          </div>
          wedding
        </Link>
        <Link
          to="/slo"
          css={[styles.tab, showBoos ? { background: orange } : {}]}
          activeStyle={styles.activeTab}
          partiallyActive
          onClick={() => handleChangeTab('slo')}
        >
          <div style={{ height: 36 }}>
            <svg width="34px" height="34px" viewBox="-91 0 512 512">
              <path
                d="m254.421875 146.394531c0-31.0625-22.933594-55.394531-52.210937-55.394531-14.488282 0-27.234376 5.894531-37.210938 17.125-9.976562-11.230469-22.722656-17.125-37.210938-17.125-29.277343 0-52.210937 24.332031-52.210937 55.394531 0 38.417969 32.929687 59.496094 89.421875 108.457031 55.304688-47.933593 89.421875-69.976562 89.421875-108.457031zm-148.84375 0c0-12.621093 7.628906-25.394531 22.210937-25.394531 16.09375 0 22.324219 19.816406 22.765626 21.292969l3.785156 14.546875c11.328125.007812 9.960937.007812 21.289062.019531l3.816406-14.566406c.4375-1.457031 6.664063-21.292969 22.769532-21.292969 14.582031 0 22.210937 12.773438 22.210937 25.394531 0 20.128907-20.929687 36.113281-59.425781 68.84375-36.636719-31.148437-59.421875-48.378906-59.421875-68.84375zm0 0"
                fill="#FFFFFF"
              />
              <path
                d="m229.222656 367.480469c73.902344-111.179688 100.777344-138.007813 100.777344-201.480469 0-91.53125-74.019531-166-165-166s-165 74.46875-165 166c0 63.617188 27.363281 91.027344 100.777344 201.480469-61.972656 11.058593-100.777344 37.277343-100.777344 69.519531 0 57.460938 107.15625 75 165 75 57.832031 0 165-17.535156 165-75 0-32.242188-38.804688-58.460938-100.777344-69.519531zm-199.222656-201.480469c0-74.992188 60.5625-136 135-136s135 61.007812 135 136c0 54.125-17.269531 66.785156-135 243.902344-40.085938-60.304688-135-172.59375-135-243.902344zm135 316c-47.496094 0-135-16.246094-135-45 0-12.566406 28.386719-33.902344 89.070312-42l45.929688 69.097656 45.929688-69.097656c60.683593 8.097656 89.070312 29.433594 89.070312 42 0 30.773438-94.941406 45-135 45zm0 0"
                fill="#FFFFFF"
              />
            </svg>
          </div>
          slo
        </Link>
        <Link
          to="/moments"
          css={[styles.tab, showBoos ? { background: orange } : {}]}
          activeStyle={styles.activeTab}
          partiallyActive
          onClick={() => handleChangeTab('moments')}
        >
          <div style={{ height: 36 }}>
            <svg
              x="0px"
              y="0px"
              viewBox="0 0 489.4 489.4"
              width="30px"
              height="30px"
            >
              <path
                d="M0,437.8c0,28.5,23.2,51.6,51.6,51.6h386.2c28.5,0,51.6-23.2,51.6-51.6V51.6c0-28.5-23.2-51.6-51.6-51.6H51.6    C23.1,0,0,23.2,0,51.6C0,51.6,0,437.8,0,437.8z M437.8,464.9H51.6c-14.9,0-27.1-12.2-27.1-27.1v-64.5l92.8-92.8l79.3,79.3    c4.8,4.8,12.5,4.8,17.3,0l143.2-143.2l107.8,107.8v113.4C464.9,452.7,452.7,464.9,437.8,464.9z M51.6,24.5h386.2    c14.9,0,27.1,12.2,27.1,27.1v238.1l-99.2-99.1c-4.8-4.8-12.5-4.8-17.3,0L205.2,333.8l-79.3-79.3c-4.8-4.8-12.5-4.8-17.3,0    l-84.1,84.1v-287C24.5,36.7,36.7,24.5,51.6,24.5z"
                fill="#FFFFFF"
              />
              <path
                d="M151.7,196.1c34.4,0,62.3-28,62.3-62.3s-28-62.3-62.3-62.3s-62.3,28-62.3,62.3S117.3,196.1,151.7,196.1z M151.7,96    c20.9,0,37.8,17,37.8,37.8s-17,37.8-37.8,37.8s-37.8-17-37.8-37.8S130.8,96,151.7,96z"
                fill="#FFFFFF"
              />
            </svg>
          </div>
          moments
        </Link>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
