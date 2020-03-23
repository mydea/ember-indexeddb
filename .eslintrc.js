module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },

  plugins: ['ember', 'ember-es6-class'],

  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:prettier/recommended',
  ],

  env: {
    browser: true,
  },

  rules: {
    'ember/no-deeply-nested-dependent-keys-with-each': 2,
    'ember/no-ember-super-in-es-classes': 2,
    'ember-es6-class/no-object-extend': 2,
    'no-console': 2,
    'ember/no-invalid-debug-function-arguments': 2,
    'ember/require-return-from-computed': 2,
    'ember/no-new-mixins': 2,
    'ember/no-jquery': 2,
    'ember/route-path-style': 2,
    'lines-between-class-members': [
      'error',
      'always',
      { exceptAfterSingleLine: true },
    ],
  },

  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        '.ember-cli.js',
        'index.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js',
      ],
      excludedFiles: [
        'addon/**',
        'addon-test-support/**',
        'app/**',
        'tests/dummy/app/**',
      ],
      parserOptions: {
        sourceType: 'script',
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      rules: Object.assign(
        {},
        require('eslint-plugin-node').configs.recommended.rules
      ),
    },
    {
      files: ['tests/**/*.js'],
      rules: {
        'ember/avoid-leaking-state-in-ember-objects': 'off',
      },
    },
  ],
};
