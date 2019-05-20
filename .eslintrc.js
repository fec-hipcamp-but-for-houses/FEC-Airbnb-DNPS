module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mongo: true,
    jest: true,
  },
  extends: [
    'airbnb',
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/extensions': {
      jsx: 'always',
    },
    'no-console': 0,
    'prefer-const': 0,
    'consistent-return': 0,
    'no-unused-vars': 0,
    'no-shadow': 0,
    "react/destructuring-assignment": 0,
    "react/prop-types": 0,
  },
};
