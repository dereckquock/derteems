import React from 'react'
import { css } from 'glamor'
import { ParallaxProvider } from 'react-scroll-parallax'
import { animateInDown, animateInUp } from '../utils/animations'
import SEO from '../components/seo'
import ThingsToDo from '../components/thingsToDo'
import FoodPlaces from '../components/foodPlaces'

export default () => (
  <ParallaxProvider>
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

      <div
        className={css(
          { fontSize: '2rem', fontWeight: 600 },
          animateInUp(1 / 4)
        )}
      >
        Accommodations
      </div>
      <div
        className={css(
          { paddingBottom: 40, fontSize: '2rem' },
          animateInUp(2 / 4)
        )}
      >
        <div>TBD</div>
      </div>

      <div
        className={css(
          { fontSize: '2rem', fontWeight: 600 },
          animateInUp(3 / 4)
        )}
      >
        Things to do around SLO
      </div>
      <div
        className={css(
          {
            paddingTop: '6vw',
            paddingBottom: 40,
            fontSize: '2rem',
          },
          animateInUp(4 / 4)
        )}
      >
        <ThingsToDo />
      </div>

      <div
        className={css(
          { marginTop: 20, fontSize: '2rem', fontWeight: 600 },
          animateInUp(3 / 4)
        )}
      >
        Food that we love
      </div>
      <div
        className={css(
          {
            paddingTop: '6vw',
            paddingBottom: 40,
            fontSize: '2rem',
          },
          animateInUp(5 / 4)
        )}
      >
        <FoodPlaces />
      </div>
    </div>
  </ParallaxProvider>
)
