import React from 'react'
import { css } from 'glamor'

export default ({ checked }) => (
  <svg
    width="18px"
    height="18px"
    viewBox="0 0 18 18"
    className={css({
      marginLeft: 10,
      position: 'relative',
      zIndex: '1',
      fill: 'none',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      stroke: '#3e3d4d',
      strokeWidth: '1.5',
      transform: 'translate3d(0, 0, 0) scale(1.25)',
      transition: 'all 0.2s ease',
    })}
  >
    <path
      className={css({
        strokeDasharray: 60,
        strokeDashoffset: checked ? 60 : 0,
        transition: 'all 0.3s linear',
      })}
      d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"
    />
    <polyline
      className={css({
        strokeDasharray: 22,
        strokeDashoffset: checked ? 42 : 66,
        transition: 'all 0.2s linear',
        transitionDelay: '0.15s',
      })}
      points="1 9 7 14 15 4"
    />
  </svg>
)