'use strict';

module.exports = {
  root: true,
  parserOptions: {
<<<<<<< HEAD
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    browser: true
  },
  rules: {
  },
  overrides: {
    // node files
    files: [
      '.eslintrc.js',
      '.template-lintrc.js',
      'ember-cli-build.js',
      'testem.js',
      'blueprints/*/index.js',
      'config/**/*.js',
      'lib/*/index.js'
    ],
    parserOptions: {
      sourceType: 'script',
      ecmaVersion: 2017
    },
    env: {
      browser: false,
      node: true
    }
  }
=======
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  plugins: ['ember'],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
  },
  rules: {},
  overrides: [
    // node files
    {
      files: [
        './.eslintrc.js',
        './.prettierrc.js',
        './.template-lintrc.js',
        './ember-cli-build.js',
        './testem.js',
        './blueprints/*/index.js',
        './config/**/*.js',
        './lib/*/index.js',
        './server/**/*.js',
      ],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      extends: ['plugin:n/recommended'],
    },
    {
      // test files
      files: ['tests/**/*-test.{js,ts}'],
      extends: ['plugin:qunit/recommended'],
    },
  ],
>>>>>>> 9097a7f (message)
};
