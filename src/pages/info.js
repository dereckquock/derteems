import React from 'react'
import SEO from '../components/seo'

const SecondPage = () => (
  <div style={{ background: '#DDD3C9' }}>
    <SEO title="Things to do" />
    <div className="contents">
      <h1 style={{ paddingBottom: 20 }}>Information 💁‍♀️</h1>

      <h2 style={{ fontSize: '2rem' }}>Things to do around SLO</h2>
      <div style={{ paddingBottom: 40, fontSize: '2rem' }}>
        <h3 style={{ fontSize: '2rem', fontWeight: 'regular' }}>Cal Poly</h3>
        <h3 style={{ fontSize: '2rem', fontWeight: 'regular' }}>
          Farmers Market
        </h3>
        <h3 style={{ fontSize: '2rem', fontWeight: 'regular' }}>
          Firestone Grill
        </h3>
        <h3 style={{ fontSize: '2rem', fontWeight: 'regular' }}>Pismo Beach</h3>
      </div>

      <h2 style={{ fontSize: '2rem' }}>Accommodations</h2>
      <div style={{ paddingBottom: 40, fontSize: '2rem' }}>
        <p>some hotel somewhere</p>
      </div>
    </div>
  </div>
)

export default SecondPage
