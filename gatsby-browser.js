/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

window.locations = []

exports.onRouteUpdate = () => {
  // store route locations so we can determine the transition direction
  window.locations = [
    ...window.locations,
    window.location.pathname.replace('/', '') || 'home',
  ]
}
