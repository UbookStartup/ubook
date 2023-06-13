module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'tailwindcss'],
  rules: {
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 0,
    'react/button-has-type': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'import/order': 0,
    'prefer-destructuring': 0,
    'import/extensions': 0,
    'react/require-default-props': 0,
    'react/function-component-definition': 0,
    'no-restricted-imports': ['error', { patterns: ['@/features/*/*'] }],
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
};
