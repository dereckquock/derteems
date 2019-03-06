import React, { useState } from 'react'
import PropTypes from 'prop-types'
import 'typeface-amatic-sc'
import { TransitionGroup, Transition } from 'react-transition-group'
import { StaticQuery, graphql, Link } from 'gatsby'
import './layout.css'
import '@reach/dialog/styles.css'

const styles = {
  tab: {
    padding: 12,
    display: 'grid',
    background: '#3E3D4D',
    color: '#fff',
    textDecoration: 'none',
  },
  activeTab: {
    background: '#816D66',
  },
}

const transitionStyles = {
  entering: { position: 'absolute', opacity: 0 },
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
                    width: '100%',
                    height: '100%',
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
              position: 'fixed',
              bottom: 0,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
              alignContent: 'center',
              textAlign: 'center',
              fontSize: '1.75rem',
            }}
          >
            <Link
              to="/"
              style={
                currentPage === 'home'
                  ? { ...styles.tab, ...styles.activeTab }
                  : styles.tab
              }
              activeStyle={styles.activeTab}
              onClick={() => setCurrentPage('home')}
            >
              <div style={{ height: 36 }}>
                <svg width="36px" height="36px" viewBox="-11 0 512 512">
                  <path
                    d="m153.9375 395.691406c-4.144531 0-7.5 3.359375-7.5 7.5v16.515625c0 4.140625 3.355469 7.5 7.5 7.5 4.140625 0 7.5-3.359375 7.5-7.5v-16.515625c0-4.140625-3.359375-7.5-7.5-7.5zm0 0"
                    fill="#FFFFFF"
                  />
                  <path
                    d="m336.425781 395.691406c-4.144531 0-7.5 3.359375-7.5 7.5v16.515625c0 4.140625 3.355469 7.5 7.5 7.5 4.140625 0 7.5-3.359375 7.5-7.5v-16.515625c0-4.140625-3.359375-7.5-7.5-7.5zm0 0"
                    fill="#FFFFFF"
                  />
                  <path
                    d="m272.636719 412.910156c-3.121094-2.726562-7.859375-2.40625-10.582031.710938-4.113282 4.703125-10.261719 7.402344-16.875 7.402344-6.613282 0-12.761719-2.699219-16.875-7.402344-2.726563-3.117188-7.464844-3.4375-10.582032-.710938-3.117187 2.726563-3.4375 7.464844-.710937 10.582032 6.960937 7.960937 17.226562 12.53125 28.167969 12.53125 10.941406 0 21.207031-4.566407 28.167968-12.53125 2.726563-3.117188 2.40625-7.855469-.710937-10.582032zm0 0"
                    fill="#FFFFFF"
                  />
                  <path
                    d="m204.0625 14.957031c-5.148438 0-10.292969.921875-15.363281 2.75-8.226563-11.199219-20.191407-17.707031-33.0625-17.707031-14.28125 0-26.488281 8.015625-31.855469 20.917969-4.253906 10.226562-3.882812 22.675781 1.078125 36.003906 5.445313 14.640625 16.257813 30.164063 32.136719 46.140625 2.652344 2.667969 6.582031 3.871094 10.269531 3.140625 25.578125-5.054687 45.0625-13.335937 57.925781-24.617187 11.578125-10.160157 17.289063-22.59375 16.074219-35.007813-1.769531-18.027344-17.761719-31.621094-37.203125-31.621094zm-37.796875 76.144531c-24.363281-24.992187-35.054687-48.988281-28.632813-64.421874 2.996094-7.203126 9.894532-11.679688 18.003907-11.679688 9.394531 0 18.21875 5.882812 23.605469 15.734375 1.953124 3.578125 6.40625 4.9375 10.023437 3.066406 4.9375-2.550781 9.914063-3.847656 14.792969-3.847656 11.691406 0 21.265625 7.777344 22.273437 18.085937 2.167969 22.113282-30.570312 36.890626-60.066406 43.0625zm0 0"
                    fill="#FFFFFF"
                  />
                  <path
                    d="m84.378906 34.4375c-9.792968 0-18.882812 4.730469-25.292968 12.925781-3.464844-1.078125-6.96875-1.625-10.480469-1.625-15.46875 0-28.167969 10.871094-29.53125 25.28125-.933594 9.851563 3.570312 19.632813 12.683593 27.542969 9.835938 8.542969 24.628907 14.746094 43.960938 18.441406 3.371094.644532 6.941406-.46875 9.347656-2.921875 31.144532-31.738281 28.8125-53.113281 24.652344-63.03125-4.300781-10.246093-14.011719-16.613281-25.339844-16.613281zm-8.285156 67.347656c-32.417969-6.730468-42.980469-19.921875-42.085938-29.351562.628907-6.667969 6.90625-11.695313 14.601563-11.695313 3.261719 0 6.617187.867188 9.964844 2.570313 3.628906 1.847656 8.074219.460937 10.003906-3.128906 3.621094-6.726563 9.527344-10.742188 15.800781-10.742188 5.257813 0 9.558594 2.773438 11.507813 7.417969 1.671875 3.984375 5.058593 18.800781-19.792969 44.929687zm0 0"
                    fill="#FFFFFF"
                  />
                  <path
                    d="m481.03125 302.222656-210.355469-135.980468c-15.488281-10.011719-35.5-10.011719-50.988281 0l-72.566406 46.910156v-16.21875c10.09375-.296875 18.21875-8.578125 18.21875-18.742188v-31.964844c0-10.347656-8.421875-18.769531-18.769532-18.769531h-18.0625c-4.144531 0-7.5 3.359375-7.5 7.5 0 4.144531 3.355469 7.5 7.5 7.5h18.0625c2.078126 0 3.769532 1.691407 3.769532 3.769531v31.964844c0 2.078125-1.691406 3.769532-3.769532 3.769532h-90.882812c-2.078125 0-3.769531-1.691407-3.769531-3.769532v-31.964844c0-2.078124 1.691406-3.769531 3.769531-3.769531h42.9375c4.144531 0 7.5-3.355469 7.5-7.5 0-4.140625-3.355469-7.5-7.5-7.5h-42.9375c-10.351562 0-18.769531 8.421875-18.769531 18.769531v31.964844c0 10.164063 8.125 18.445313 18.21875 18.742188v75.675781l-45.808594 29.613281c-9.457031 6.113282-12.175781 18.773438-6.0625 28.230469l28.824219 44.585937c5.046875 7.808594 14.558594 11.007813 23.046875 8.445313v121.015625c0 4.140625 3.355469 7.5 7.5 7.5h365.085937c4.144532 0 7.5-3.359375 7.5-7.5v-121.003906c1.925782.582031 3.902344.871094 5.871094.871094 6.703125 0 13.273438-3.289063 17.175781-9.328126l28.824219-44.585937c6.113281-9.453125 3.390625-22.117187-6.0625-28.230469zm-410.894531-105.261718h61.980469v25.886718l-61.980469 40.066406zm404.359375 125.347656-28.824219 44.589844c-1.621094 2.507812-4.980469 3.226562-7.488281 1.609374l-58.945313-38.105468c-3.480469-2.25-8.121093-1.253906-10.371093 2.226562-2.191407 3.394532-1.15625 8.179688 2.226562 10.367188l49.128906 31.761718v122.242188h-350.085937v-122.242188l175.042969-113.15625 100.144531 64.738282c3.480469 2.25 8.125 1.253906 10.371093-2.226563 2.214844-3.425781 1.195313-8.160156-2.226562-10.367187l-104.21875-67.371094c-2.4375-1.578125-5.707031-1.558594-8.144531 0l-188.929688 122.132812c-2.507812 1.621094-5.867187.898438-7.488281-1.609374l-28.824219-44.585938c-1.621093-2.507812-.898437-5.871094 1.609375-7.492188l210.355469-135.980468c10.539063-6.8125 24.164063-6.8125 34.703125 0l210.359375 135.980468c2.507813 1.621094 3.226563 4.980469 1.605469 7.488282zm0 0"
                    fill="#FFFFFF"
                  />
                </svg>
              </div>
              home
            </Link>
            <Link
              to="/wedding"
              style={styles.tab}
              activeStyle={styles.activeTab}
              onClick={() => setCurrentPage('wedding')}
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
              style={styles.tab}
              activeStyle={styles.activeTab}
              onClick={() => setCurrentPage('slo')}
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
              style={styles.tab}
              activeStyle={styles.activeTab}
              onClick={() => setCurrentPage('moments')}
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
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
