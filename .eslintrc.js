module.exports = {
  extends: ['standard', 'prettier'],
  plugins: ['standard', 'react'],
  rules: {
    'no-var': 'error', // optional, recommended when using es6+
    'no-unused-vars': 1, // recommended

    // standard plugin - options
    'standard/object-curly-even-spacing': ['error', 'either'],
    'standard/array-bracket-even-spacing': ['error', 'either'],
    'standard/computed-property-even-spacing': ['error', 'even'],
    'standard/no-callback-literal': ['error', ['cb', 'callback']],

    // react plugin - options
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8, // optional, recommended 6+
  },
}
