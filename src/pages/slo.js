import React from 'react'
import { css } from 'glamor'
import { animateInDown } from '../utils/animations'
import SEO from '../components/seo'

export default () => (
  <>
    <SEO title="SLO" />
    <div className="contents">
      <div
        className={css(
          {
            fontSize: '2.25rem',
            fontFamily: 'Shorelines',
            breakWord: 'keep-all',
          },
          animateInDown()
        )}
      >
        (slo)
      </div>

      <div style={{ fontSize: '2rem' }}>Things to do around SLO</div>
      <div style={{ paddingBottom: 40, fontSize: '2rem' }}>
        <div style={{ fontSize: '2rem' }}>Cal Poly</div>
        <div style={{ fontSize: '2rem' }}>Farmers Market</div>
        <div style={{ fontSize: '2rem' }}>Firestone Grill</div>
        <div style={{ fontSize: '2rem' }}>Pismo Beach</div>
      </div>

      <div style={{ fontSize: '2rem' }}>Accommodations</div>
      <div style={{ paddingBottom: 40, fontSize: '2rem' }}>
        <p>some hotel somewhere</p>
      </div>
    </div>
  </>
)
