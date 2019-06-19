/**
 * Use Emotion for animations
 * @flow
 */

import { keyframes } from '@emotion/core'

/**
 * Fade in animation keyframes
 */
const growIn = keyframes({
  '0%': { transform: 'scale(0.5)', opacity: 0 },
  '100%': { transform: 'scale(1)', opacity: 1 },
})

/**
 * Fade up animation keyframes
 * @type {[type]}
 */
const fadeInUp = keyframes({
  '0%': { transform: 'translateY(10px)', opacity: 0 },
  '100%': { transform: 'translateY(0)', opacity: 1 },
})

/**
 * Fade down animation keyframes
 * @type {[type]}
 */
const fadeInDown = keyframes({
  '0%': { transform: 'translateY(-10px)', opacity: 0 },
  '100%': { transform: 'translateY(0)', opacity: 1 },
})

/**
 * Fade down animation keyframes
 * @type {[type]}
 */
const fadeFooterOutDown = keyframes({
  '0%': { transform: 'translateY(0)' },
  '100%': { transform: 'translateY(200px)' },
})

/**
 * Fade up animation keyframes
 * @type {[type]}
 */
const fadeFooterInUp = keyframes({
  '0%': { transform: 'translateY(200px)' },
  '100%': { transform: 'translateY(0)' },
})

/**
 * Fade up animation keyframes
 * @type {[type]}
 */
const fadePanelInUp = keyframes({
  '0%': { transform: 'translateY(100%)' },
  '100%': { transform: 'translateY(0)' },
})

/**
 * Fade out animation keyframes
 * @type {[type]}
 */
const fadePanelOutDown = keyframes({
  '0%': { transform: 'translateY(0)' },
  '100%': { transform: 'translateY(100%)' },
})

/**
 * Animate in
 * @param  {Number} [delay=0] the delay in seconds
 * @return {Object}           the animation rule
 */
export const animateGrowIn = (delay = 0) => ({
  animation: `${growIn} 1s ${delay}s 1 normal backwards`,
})

/**
 * Animate up
 * @param  {Number} [delay=0] the delay in seconds
 * @return {Object}           the animation rule
 */
export const animateInUp = (delay = 0) => ({
  animation: `${fadeInUp} 1s ${delay}s 1 normal backwards`,
})

/**
 * Animate down
 * @param  {Number} [delay=0] the delay in seconds
 * @return {Object}           the animation rule
 */
export const animateInDown = (delay = 0) => ({
  animation: `${fadeInDown} 1s ${delay}s 1 normal backwards`,
})

/**
 * Animate footer down
 * @param  {Number} [delay=0] the delay in seconds
 * @return {Object}           the animation rule
 */
export const animateFooterOutDown = (delay = 0) => ({
  animation: `${fadeFooterOutDown} 1s ${delay}s 1 normal backwards`,
})

/**
 * Animate footer up
 * @param  {Number} [delay=0] the delay in seconds
 * @return {Object}           the animation rule
 */
export const animateFooterInUp = (delay = 0) => ({
  animation: `${fadeFooterInUp} 1.25s ${delay}s 1 normal backwards`,
})

/**
 * Animate panel up
 * @param  {Number} [delay=0] the delay in seconds
 * @return {Object}           the animation rule
 */
export const animatePanelInUp = (delay = 0) => ({
  animation: `${fadePanelInUp} 1.25s ${delay}s 1 normal`,
})

/**
 * Animate panel down
 * @param  {Number} [delay=0] the delay in seconds
 * @return {Object}           the animation rule
 */
export const animatePanelOutDown = (delay = 0) => ({
  animation: `${fadePanelOutDown} 1.25s ${delay}s 1 normal`,
})
