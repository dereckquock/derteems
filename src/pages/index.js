import React from 'react'
import Image from '../components/mainImage'
import SEO from '../components/seo'

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
            '@media(max-width: 667px)': {
              padding: '0 40px',
            },
          }}
        >
          <h1
            css={{
              width: '100%',
              fontSize: '6rem',
              fontWeight: 300,
              textShadow: '0 0 8px',
              '@media(max-width: 667px)': {
                fontSize: '4rem',
              },
            }}
          >
            my big fat quock wedding coming soon
          </h1>
          <h2
            css={{
              marginLeft: 20,
              fontSize: '5rem',
              fontWeight: 300,
              letterSpacing: 20,
              textShadow: '0 0 8px',
              '@media(max-width: 667px)': {
                fontSize: '2.5rem',
              },
            }}
          >
            11/02/19
          </h2>
        </div>
      </div>
    </>
  )
}
