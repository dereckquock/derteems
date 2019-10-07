import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'
import { animateInDown, animateInUp } from '../utils/animations'
import SEO from '../components/seo'
import ThingsToDo from '../components/thingsToDo'
import FoodPlaces from '../components/foodPlaces'

export default ({ data }) => {
  return (
    <>
      <SEO title="SLO" />
      <div className="contents">
        <ParallaxProvider>
          <div
            css={{
              fontSize: '2.25rem',
              fontFamily: 'Shorelines',
              breakWord: 'keep-all',
              ...animateInDown(),
            }}
          >
            (slo)
          </div>

          <div
            css={{
              marginBottom: '2rem',
              fontSize: '2rem',
              fontWeight: 600,
              ...animateInUp(1 / 4),
            }}
          >
            Things to do around SLO
          </div>
          <div
            css={{
              paddingBottom: 40,
              fontSize: '2rem',
              ...animateInUp(2 / 4),
            }}
          >
            <ThingsToDo />
          </div>

          <div
            css={{
              marginTop: 20,
              marginBottom: '2rem',
              fontSize: '2rem',
              fontWeight: 600,
              ...animateInUp(3 / 4),
            }}
          >
            Food we love ♥
          </div>
          <div css={{ fontSize: '2rem', ...animateInUp(4 / 4) }}>
            <FoodPlaces />
          </div>

          <div
            css={{
              marginTop: 40,
              marginBottom: 40,
              fontSize: 20,
              ...animateInUp(6 / 4),
            }}
          >
            ‭‭1 john‬ ‭3:18
          </div>
        </ParallaxProvider>
      </div>
    </>
  )
}
