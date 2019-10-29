/**
 * The theme context for a group card and its children,
 * which include the group dialog content
 *
 * Our <ThemeProvider> wraps the group and sets its value to
 * the color it should be. Then we can get to a group's theme
 * by grabbing `theme` from `useTheme`:
 * `const { theme } = useTheme()`
 *
 * Here's a great article on how to use Context effectively:
 * https://kentcdodds.com/blog/how-to-use-react-context-effectively
 */

import React from 'react'

export const ThemeContext = React.createContext()

/**
 * Our Context Provider that takes in the color and sets
 * the Context value to be the theme object
 *
 * @param {Object} props
 */
export function ThemeProvider(props) {
  const { darkMode } = props
  const value = React.useMemo(() => ({ darkMode }), [darkMode])

  return <ThemeContext.Provider value={value} {...props} />
}

/**
 * Extracts the theme from the nearest parent Context
 */
export function useTheme() {
  const context = React.useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return { darkMode: context.darkMode }
}
