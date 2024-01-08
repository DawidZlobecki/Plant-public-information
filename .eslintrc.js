module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react-native/no-unused-styles': 1,
    'react-native/no-inline-styles': 0,
    'no-shadow': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.ts', '**/*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              // `react` first, `react-native` second, then packages starting with a character
              ['^react$', '^react-native', '^[a-z]'],
              // Packages starting with `@`
              ['^@'],
              // Packages starting with `~`
              ['^~'],
              // `_` shortcuts
              ['^_'],
              // Imports starting with `../`
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Imports starting with `./`
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports
              ['^.+\\.s?css$'],
              // Side effect imports
              ['^\\u0000'],
            ],
          },
        ],
      },
    },
  ],
  plugins: ['simple-import-sort'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _atoms: './src/components/atoms',
          _molecules: './src/components/molecules',
          _organisms: './src/components/organisms',
          _navigations: './src/navigations',
          _scenes: './src/scenes',
          _nativeModules: './src/NativeModules',
          _services: './src/services',
          _styles: './src/styles',
          _utils: './src/utils',
          _types: './src/types',
          _hooks: './src/hooks',
          _helpers: './src/helpers',
          _store: './src/store',
          _constants: './src/constants',
          _test: './src/test',
          _locales: './src/locales',
        },
      },
    },
  },
};
