module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mongo: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
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
  },
};
