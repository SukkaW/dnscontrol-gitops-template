'use strict';

module.exports = require('eslint-config-sukka').sukka({
  ignores: {
    customGlobs: [
      'types-dnscontrol.d.ts'
    ]
  },
  ts: {
    enable: true,
    allowJs: true,
    allowDefaultProject: ['eslint.config.js']
  }
}, {
  files: ['dnsconfig.js'],
  languageOptions: {
    ecmaVersion: 5
  },
  rules: {
    // dnscontrol doesn not support const/let
    'no-var': 'off',
    // dnscontrol do not have bundler, there is no import
    '@typescript-eslint/triple-slash-reference': 'off',
    // dnscontrol uses otto, which means no ES6+, so no arrow functions
    'prefer-arrow-callback': 'off',
    // dnscontrol prefer upper case for functions
    '@typescript-eslint/naming-convention': 'off',
    // dnscontrol does not support default assignments
    'sukka/unicorn/prefer-default-parameters': 'off',
    // with dncontrol it is better to always have trailing commas
    '@stylistic/comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'always-multiline',
      importAttributes: 'never',
      dynamicImports: 'never',
      enums: 'never',
      generics: 'never',
      tuples: 'never'
    }]
  }
});
