import React from 'react'
import { css } from 'glamor'

export default ({ checked }) => (
  <svg
    fill="#3e3d4d"
    preserveAspectRatio="xMidYMid meet"
    height="24"
    width="24"
    viewBox="0 0 24 24"
    className={css({ verticalAlign: 'middle' })}
  >
    <circle
      cx="12"
      cy="12"
      r="11"
      fill="none"
      stroke="#3e3d4d"
      className={css({
        strokeWidth: checked ? 1 : 2,
        transition: 'all 0.5s ease',
      })}
    />
    <circle
      cx="12"
      cy="12"
      className={css({
        r: checked ? 8 : 0,
        fill: checked ? '#3e3d4d' : '#6a6884',
        transition: 'all 0.5s ease',
      })}
    />
  </svg>
)
