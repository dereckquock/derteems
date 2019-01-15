import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { TransitionGroup, Transition } from 'react-transition-group'
import { StaticQuery, graphql, Link } from 'gatsby'
import './layout.css'

const styles = {
  tab: {
    padding: 12,
    display: 'grid',
    background: '#000',
    color: '#fff',
    textDecoration: 'none',
  },
  activeTab: {
    background: '#0070BA',
  },
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
}

const Layout = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <TransitionGroup>
            <Transition key={currentPage} timeout={150}>
              {state => (
                <div
                  style={{
                    transition: 'opacity 150ms ease-in-out',
                    opacity: 0,
                    ...transitionStyles[state],
                  }}
                >
                  {children}
                </div>
              )}
            </Transition>
          </TransitionGroup>
          <div
            style={{
              width: '100%',
              height: 80,
              position: 'fixed',
              bottom: 0,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              alignContent: 'center',
              textAlign: 'center',
              background: '#000',
            }}
          >
            <div>
              <Link
                to="/"
                style={styles.tab}
                activeStyle={styles.activeTab}
                onClick={() => setCurrentPage('home')}
              >
                <div style={{ height: 36 }}>
                  <svg
                    x="0px"
                    y="0px"
                    viewBox="0 0 306.773 306.773"
                    width="24px"
                    height="30px"
                  >
                    <g>
                      <path
                        d="M302.93,149.794c5.561-6.116,5.024-15.49-1.199-20.932L164.63,8.898   c-6.223-5.442-16.2-5.328-22.292,0.257L4.771,135.258c-6.092,5.585-6.391,14.947-0.662,20.902l3.449,3.592   c5.722,5.955,14.971,6.665,20.645,1.581l10.281-9.207v134.792c0,8.27,6.701,14.965,14.965,14.965h53.624   c8.264,0,14.965-6.695,14.965-14.965v-94.3h68.398v94.3c-0.119,8.264,5.794,14.959,14.058,14.959h56.828   c8.264,0,14.965-6.695,14.965-14.965V154.024c0,0,2.84,2.488,6.343,5.567c3.497,3.073,10.842,0.609,16.403-5.513L302.93,149.794z"
                        fill="#FFFFFF"
                      />
                    </g>
                  </svg>
                </div>
                home
              </Link>
            </div>
            <div>
              <Link
                to="/wedding"
                style={styles.tab}
                activeStyle={styles.activeTab}
                onClick={() => setCurrentPage('wedding')}
              >
                <div style={{ height: 36 }}>
                  <svg
                    x="0px"
                    y="0px"
                    viewBox="0 0 512 512"
                    width="30px"
                    height="30px"
                  >
                    <path
                      d="M405.966,202.324l33.761-42.968c3.6-4.582,5.022-10.505,3.896-16.221
                	s-4.688-10.658-9.757-13.532l-29.975-17c-3.009-1.706-6.408-2.603-9.867-2.603h-53.923c-3.545,0-7.027,0.942-10.088,2.73l-29.102,17
                	c-4.992,2.917-8.479,7.851-9.56,13.53s0.349,11.549,3.921,16.096l33.585,42.744c-14.497,3.957-28.097,10.106-40.416,18.078
                	C257.804,190.383,216.012,172,170,172C76.262,172,0,248.262,0,342s76.262,170,170,170c21.51,0,42.483-3.97,62.337-11.799
                	c10.275-4.052,15.321-15.667,11.269-25.942c-4.053-10.276-15.666-15.32-25.943-11.269C202.502,468.969,186.465,472,170,472
                	c-71.682,0-130-58.318-130-130s58.318-130,130-130c33.933,0,64.865,13.074,88.04,34.442C235.617,271.978,222,305.426,222,342
                	c0,79.953,65.047,145,145,145c17.136,0,33.918-2.965,49.88-8.813c10.372-3.8,15.699-15.288,11.899-25.66
                	s-15.287-15.697-25.66-11.899C391.579,444.856,379.427,447,367,447c-57.897,0-105-47.103-105-105
                	c0-23.832,7.986-45.83,21.415-63.472C293.969,297.312,300,318.964,300,342c0,4.053-0.188,8.144-0.56,12.158
                	c-1.017,10.999,7.075,20.74,18.073,21.757c11.002,1.022,20.74-7.074,21.757-18.073c0.484-5.235,0.73-10.565,0.73-15.842
                	c0-33.245-9.601-64.286-26.163-90.512C329.44,242.288,347.613,237,367,237c57.897,0,105,47.103,105,105
                	c0,13.353-2.466,26.352-7.331,38.637c-4.066,10.27,0.962,21.892,11.232,25.958c10.272,4.068,21.892-0.962,25.958-11.232
                	C508.588,378.371,512,360.417,512,342C512,275.541,467.055,219.389,405.966,202.324z M345.516,150h43.232l5.16,2.927l-26.408,33.61
                	l-26.593-33.845L345.516,150z M246.747,69.142c-7.811-7.811-7.811-20.474,0-28.284s20.474-7.811,28.284,0l26,26
                	c7.811,7.811,7.811,20.474,0,28.284c-3.905,3.905-9.023,5.858-14.142,5.858s-10.237-1.953-14.142-5.858L246.747,69.142z
                	 M432.858,95.142c-7.811-7.811-7.811-20.474,0-28.284l26-26c7.811-7.811,20.474-7.811,28.284,0s7.811,20.474,0,28.284l-26,26
                	C457.237,99.047,452.119,101,447,101S436.763,99.047,432.858,95.142z M347,58V20c0-11.046,8.954-20,20-20s20,8.954,20,20v38
                	c0,11.046-8.954,20-20,20S347,69.046,347,58z"
                      fill="#fff"
                    />
                  </svg>
                </div>
                wedding
              </Link>
            </div>
            <div>
              <Link
                to="/info"
                style={styles.tab}
                activeStyle={styles.activeTab}
                onClick={() => setCurrentPage('info')}
              >
                <div style={{ height: 36, fontSize: 26 }}>💁‍♀️</div>
                info
              </Link>
            </div>
          </div>
        </>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
