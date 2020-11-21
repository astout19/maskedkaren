module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommeneded',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
  },
  parser: 'babel-eslint',
};
