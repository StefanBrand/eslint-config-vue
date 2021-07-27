module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  extends: [
    'plugin:vue/strongly-recommended', '@vue/airbnb',
  ],
  plugins: [
    'modules-newline',
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'global-require': 'off',
    'import/no-dynamic-require': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-underscore-dangle': 'off',
    'no-prototype-builtins': 'off',
    'no-plusplus': 'off',
    'no-return-assign': 'off',
    'no-mixed-operators': 'off',
    'no-bitwise': 'off',
    'array-element-newline': ['error', 'always'],
    'array-bracket-newline': ['error', 'always'],
    'vue/array-bracket-newline': ['error', 'always'],
    'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': false }],
    'vue/object-property-newline': 'error',
    'object-curly-newline': ['error','always'],
    'modules-newline/import-declaration-newline': 'error',
    'modules-newline/export-declaration-newline': 'error',
  },
};
