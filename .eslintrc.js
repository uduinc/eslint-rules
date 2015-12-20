'use strict';
/**
* See http://eslint.org/docs/rules for the rules that eslint:recommended turns on by default.
* Rule Settings:
*  0 - off
*  1 - warning
*  2 - error
*/

// Make these global so that other ESLint config files can use them.
global.MAX_STATEMENTS_IN_FN = 20;
global.NUM_SPACES_INDENT = 2;

module.exports = {
  extends: [
    'eslint:recommended',
    './possible_errors.js',
    './best_practices.js',
    './strict.js',
    './variables.js',
    './nodejs_commonjs.js',
    './stylistic_issues.js'
    // [Optional] Any rules in eslint-local.json override the udu defaults cloned from the repository
    // '../.eslint-local.json'
  ],
  env: {
    es6: true,
    node: true
  }
};