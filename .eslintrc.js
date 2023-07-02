module.exports = {
  extends: [
    'react-app',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: '999.999.999',
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        quoteProps: 'consistent',
        singleQuote: true,
        semi: false,
        tabWidth: 4,
        trailingComma: 'es5',
        useTabs: false,
        arrowParens: 'avoid',
      },
    ],
  },
}
