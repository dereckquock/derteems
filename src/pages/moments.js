import React from 'react'
import SEO from '../components/seo'
import Image from '../components/image'

export default () => (
  <div style={{ background: '#DDD3C9' }}>
    <SEO title="Moments" />
    <div className="contents">
      <h1 style={{ marginTop: 20 }}>
        <div
          css={{
            fontFamily: 'Shorelines',
            breakWord: 'keep-all',
            '@media(max-width: 414px)': { fontSize: 32 },
          }}
        >
          (moments)
        </div>
      </h1>

      <Image />
    </div>
  </div>
)
