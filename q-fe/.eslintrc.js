module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint', 'prettier', 'simple-import-sort'],
  ignorePatterns: ['.eslintrc.js'],
  extends: [
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
        usePrettierrc: true,
      },
    ],
    '@typescript-eslint/no-floating-promises': ['warn', { ignoreVoid: true }],
    '@typescript-eslint/no-unsafe-assignment': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'no-param-reassign': 'off',
    'no-void': 'off',
    'react-hooks/exhaustive-deps': 'off',
  },
};
