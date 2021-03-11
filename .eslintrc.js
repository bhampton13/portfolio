module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier", "jest"],
  parser: "babel-eslint",
  env: {
    es6: true,
    browser: true,
    amd: true,
    node: true,
    "jest/globals": true,
  },
  parser: "babel-eslint",
  rules: {
    indent: 0,
    "no-console": 1,
    "no-tabs": 0,
    "eol-last": ["error", "always"],
    "no-underscore-dangle": 0,
    "react/jsx-indent": 0,
    "react/jsx-indent-props": 0,
    "react/jsx-filename-extension": 0,
    "react/forbid-prop-types": 0,
    "react/require-default-props": 0,
    "react/prop-types": 0,
    "react/no-children-prop": 2,
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],
  },
};
