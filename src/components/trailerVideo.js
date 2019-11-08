import React from 'react'
import { animateInUp } from '../utils/animations'
import Trailer from '../images/trailer.mp4'

export default () => {
  return (
    <div css={[{ marginBottom: '2rem' }, animateInUp(1)]}>
      <video controls css={{ width: '100%' }}>
        <source src={Trailer} type="video/mp4" />
      </video>
    </div>
  )
}
