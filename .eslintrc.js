module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    'no-plusplus': 'off',
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'child',
        'e',
        'acc',
        'input',
      ],
    }],
    'class-methods-use-this': 'off',
    'no-nested-ternary': 'off',
    'no-alert': 'off',
  },
};
