module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'node'],
  settings: {
    'import/resolver': {
      'babel-module': {},
    },
  },
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    'prettier/prettier': ['error'],
    'comma-dangle': 0,
    'react/jsx-props-no-spreading': 0,
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['NextLink'],
      },
    ],
  },
}
