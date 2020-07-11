module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    browser: true
  },
<<<<<<< HEAD
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
=======
  rules: {},
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'server/**/*.js'
      ],
      parserOptions: {
        sourceType: 'script'
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      extends: ['plugin:node/recommended'],
      rules: {
        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off'
      }
>>>>>>> e098042... message
    }
  }
};
