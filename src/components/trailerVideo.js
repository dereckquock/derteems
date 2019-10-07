import React from 'react'
import ReactPlayer from 'react-player/lib/players/Vimeo'
import { animateInUp } from '../utils/animations'

export default () => {
  return (
    <div css={[{ marginBottom: '2rem' }, animateInUp(1)]}>
      <ReactPlayer
        url="https://vimeo.com/328272334"
        volume={0.35}
        width="100%"
        height={200}
        style={{ margin: 'auto' }}
        config={{ vimeo: { preload: true } }}
      />
    </div>
  )
}
