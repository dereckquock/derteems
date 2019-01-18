import React from 'react'
import { css } from 'glamor'
import { animateInUp } from '../utils/animations'
import SEO from '../components/seo'
import Image from '../components/mainImage'

export default () => {
  return (
    <>
      <SEO
        title="Home"
        keywords={[`dereck`, `fatima`, `quock`, `wedding`, `fatquock`]}
      />
      <div style={{ height: '100vh', position: 'relative' }}>
        <div
          style={{ width: '100%', position: 'absolute', filter: 'blur(8px)' }}
        >
          <Image style={{ height: '100vh' }} />
        </div>

        <div
          css={{
            width: '100%',
            padding: '0 25%',
            marginTop: -200,
            position: 'absolute',
            top: '50%',
            textAlign: 'center',
            color: '#fff',
            fontSize: '6rem',
            fontWeight: 300,
            textShadow: '0 0 8px',
            '@media(max-width: 768px)': {
              padding: '0 40px',
              fontSize: '4rem',
            },
          }}
        >
          <div className={css({ display: 'inline-block' }, animateInUp(1 / 4))}>
            my
          </div>{' '}
          <div className={css({ display: 'inline-block' }, animateInUp(2 / 4))}>
            big
          </div>{' '}
          <div className={css({ display: 'inline-block' }, animateInUp(3 / 4))}>
            fat
          </div>{' '}
          <div className={css({ display: 'inline-block' }, animateInUp(5 / 4))}>
            quock
          </div>{' '}
          <div className={css({ display: 'inline-block' }, animateInUp(6 / 4))}>
            wedding
          </div>{' '}
          <div className={css({ display: 'inline-block' }, animateInUp(7 / 4))}>
            coming
          </div>{' '}
          <div className={css({ display: 'inline-block' }, animateInUp(8 / 4))}>
            soon
          </div>
          <div
            className={css(
              {
                marginLeft: 20,
                fontSize: '5rem',
                fontWeight: 300,
                letterSpacing: 20,
                textShadow: '0 0 8px',
                '@media(max-width: 768px)': {
                  fontSize: '2.5rem',
                },
              },
              animateInUp(9 / 4)
            )}
          >
            11/02/19
          </div>
        </div>
      </div>
    </>
  )
}
