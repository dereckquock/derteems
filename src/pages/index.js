import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { css } from 'glamor'
import SEO from '../components/seo'
import { animateInDown } from '../utils/animations'

export default () => {
  const [done, setDone] = useState(false)

  return (
    <>
      <SEO title="🥂 fatima & dereck" />
      <div style={{ height: '100vh', paddingBottom: 95, position: 'relative' }}>
        <ReactPlayer
          url="https://vimeo.com/320916775/5b9da95da4"
          width="100%"
          height="100%"
          volume={0.35}
          playing={!done}
          config={{ vimeo: { preload: true } }}
          onEnded={() => setDone(true)}
        />

        {done && (
          <div
            className={css({
              width: '100%',
              height: '100%',
              padding: 124,
              position: 'absolute',
              top: 0,
              left: 0,
              display: 'grid',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              fontSize: 30,
              background: '#000',
              color: '#fff',

              '@media(max-width: 414px)': {
                padding: 30,
              },
            })}
          >
            <div>
              <div className={css(animateInDown(1 / 4))}>
                Though one may be overpowered, two can defend themselves. A cord
                of three strands is not quickly broken.
              </div>
              <div className={css({ fontSize: 22 }, animateInDown(3 / 4))}>
                ‭‭ecclesiastes 4:12
              </div>
              <button
                className={`btn ${css({ margin: 20 }, animateInDown(5 / 4))}`}
                onClick={() => setDone(false)}
              >
                Replay
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
