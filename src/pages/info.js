import React from 'react'
import SEO from '../components/seo'

const SecondPage = () => (
  <div style={{ background: '#DDD3C9' }}>
    <SEO title="Things to do" />
    <div
      css={{
        height: '100vh',
        maxWidth: 1024,
        padding: 40,
        margin: 'auto',
        textAlign: 'center',
        '@media(max-width: 667px)': {
          padding: 20,
        },
      }}
    >
      <h1 style={{ paddingBottom: 20 }}>Information 💁‍♀️</h1>

      <h2>Things to do around SLO</h2>
      <div style={{ paddingBottom: 40, fontSize: 20 }}>
        <h3>Cal Poly</h3>
        <h3>Farmers Market</h3>
        <h3>Firestone Grill</h3>
        <h3>Pismo Beach</h3>
      </div>

      <h2>Accommodations</h2>
      <div style={{ paddingBottom: 40, fontSize: 20 }}>
        <p>some hotel somewhere</p>
      </div>
    </div>
  </div>
)

export default SecondPage
