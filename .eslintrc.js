module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [ 'eslint:recommended', 'eslint-config-egg' ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    strict: 0,
  },
};
