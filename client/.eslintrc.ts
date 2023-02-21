module.exports = {
  env: {
    browser: true, // Browser global variables like `window` etc.
    commonjs: true, // CommonJS global variables and CommonJS scoping.Allows require, exports and module.
    es6: true, // Enable all ECMAScript 6 features except for modules.
    jest: true, // Jest global variables like `it` etc.
    node: true // Defines things like process.env when generating through node
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:testing-library/react",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2021, // Allows for the parsing of modern ECMAScript features
    sourceType: "module" // Allows for the use of imports
  },
  plugins: [
    "import", // eslint-plugin-import plugin. https://www.npmjs.com/package/eslint-plugin-import
    "sort-destructure-keys"
  ],
  root: true, // For configuration cascading.
  rules: {
    indent: [
      "error",
      2
    ],
    quotes: [
      "warn",
      "double"
    ],
    "react/react-in-jsx-scope": "off",
    "jsx-quotes": [
      "warn",
      "prefer-double"
    ],
    "no-console": "warn",
    "no-duplicate-imports": "warn",
    "no-unused-vars": "warn",
    "object-curly-spacing": [
      "warn",
      "always"
    ],
    "react/jsx-curly-spacing": [
      "warn",
      {
        allowMultiline: true,
        children: {
          when: "always"
        },
        spacing: {
          objectLiterals: "always"
        },
        when: "always"
      }
    ],
    "react/jsx-indent": [
      "error",
      2,
      {
        checkAttributes: true,
        indentLogicalExpressions: true,
      }
    ],
    "react/jsx-indent-props": [
      "error",
      2
    ],
    "import/order": [
      "warn",
      {
        alphabetize: {
          caseInsensitive: true,
          order: "asc"
        },
        groups: [
          "builtin",
          "external",
          "index",
          "sibling",
          "parent",
          "internal"
        ]
      },
    ],
    "template-curly-spacing": ["warn", "always"],
    "no-multiple-empty-lines": ["warn", { "max": 2 }],
    "implicit-arrow-linebreak": ["warn", "beside"],
    "comma-style": ["warn", "last"],
    "no-var": "error",
    "no-unneeded-ternary": "error",
    "no-extra-semi": "error",
    "eqeqeq": "error",
    "no-invalid-regexp": "error",
    "no-fallthrough": "error",
    "react/prop-types": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "sort-destructure-keys/sort-destructure-keys": [2, { "caseSensitive": false }],
    "default-case": "on",
    "default-case-last": "on",
    "prefer-const": "on",
    "array-bracker-spacing": [
      "warn",
      "always",
      { "singleValue": false, "objectsInArrays": false },
    ],
    "array-element-newline": ["warn", { "multiline": true, "minItems": 4 }],
    "arrow-spacing": ["warn", { "before": true, "after": true }],
    "block-spacing": ["warn", "always"],
    "comma-dangle": ["warn", "always-multiline"]
  },
  settings: {
    react: {
      version: "detect" // Detect react version
    },
  },
};