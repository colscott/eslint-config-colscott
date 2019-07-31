// ESLint configuration
// http://eslint.org/docs/user-guide/configuring

module.exports = {
    parser: 'babel-eslint',
  
    extends: ['airbnb-base', 'prettier'],
  
    plugins: ['prettier'],

    settings : {
      "import/resolver": {
        node: {
          extensions: [ 'js', 'mjs' ]
        },
        alias: {
          map: [
            ["/node_modules", "./node_modules"]
          ],
          expressions: [ 'js', 'mjs' ]
        }
      }
    },
  
    parserOptions: {
      ecmaVersion: 2017,
      sourceType: 'module'
    },
  
    env: {
      browser: true,
      es6: true,
    },
  
    rules: {
      'import/extensions': [
        '.js',
        '.jsx',
        '.mjs'
      ],
      'import/external-module-folders': ["node_modules"],
      'import/no-absolute-path': 0,
      'no-useless-constructor': 0,
      'no-use-before-define': 0,
      'no-plusplus': ["error", { "allowForLoopAfterthoughts": true }],
      'no-param-reassign': ["error", { "props": false }],
      'no-unused-expressions': ["error", {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true
      }],
      'no-useless-escape': 0,
      'no-unused-vars': ["error", { "vars": "all", "args": "none", "ignoreRestSiblings": false }],
      'linebreak-style': 0,

      "require-jsdoc": [
        "error", {
          "require": {
              "FunctionDeclaration": true,
              "MethodDefinition": true,
              "ClassDeclaration": true,
              "ArrowFunctionExpression": true,
              "FunctionExpression": true
          }
      }],

      // Enforce that class methods utilize `this`.
      // Enable using private class methods without `this`.
      // https://eslint.org/docs/rules/class-methods-use-this
      'class-methods-use-this': 0,
  
      // Forbid the use of extraneous packages.
      // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
      'import/no-extraneous-dependencies': 0,
  
      // When there is only a single export from a module, prefer using default export over named export.
      // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/prefer-default-export.md
      'import/prefer-default-export': 0,
  
      // Recommend not to leave any console.log in your code.
      // Use console.error, console.warn and console.info instead.
      // https://eslint.org/docs/rules/no-console
      'no-console': [
        'error',
        {
          allow: ['warn', 'error', 'info'],
        },
      ],

      'no-restricted-globals': ['error', 'isFinite'],
  
      // Polymer using dangling underscores to indicate "private" members of objects.
      // https://eslint.org/docs/rules/no-underscore-dangle
      'no-underscore-dangle': 0,
  
      // ESLint plugin for prettier formatting.
      // https://github.com/prettier/eslint-plugin-prettier
      'prettier/prettier': 'error',
    },
  };