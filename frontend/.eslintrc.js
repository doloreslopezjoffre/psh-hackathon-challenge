module.exports = {
  // Configuration for JavaScript files
  parser: '@typescript-eslint/parser',
  extends: ['plugin:prettier/recommended'],
  plugins: ['html'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
      },
    ],
  },
  overrides: [
    // Configuration for TypeScript files
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['react', '@typescript-eslint', 'import', 'prettier', 'unused-imports'],
      extends: [
        'plugin:import/errors',
        'plugin:import/warnings',
        'eslint:recommended',
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'prettier',
      ],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },
      settings: {
        'import/resolver': {
          alias: {
            extensions: ['.ts', '.tsx'],
            map: [
              ['@pages', './src/pages'],
              ['@components', './src/components'],
              ['@', './src'],
            ],
          },
        },
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
      },
      rules: {
        'prettier/prettier': [
          'error',
          {
            singleQuote: true,
          },
        ],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
        'react/require-default-props': 'off', // Allow non-defined react props as undefined
        'react/jsx-props-no-spreading': 'off', // app.tsx uses spread operator and also, react-hook-form
        '@typescript-eslint/comma-dangle': 'off', // Avoid conflict rule between Eslint and Prettier
        'import/prefer-default-export': 'off', // Named export is easier to refactor automatically
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
        'unused-imports/no-unused-imports': 'warn',
      },
    },
  ],
}
