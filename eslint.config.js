// Configuración ESLint 9 (flat config) — se ejecuta con `npm run lint`
const js = require("@eslint/js");
const globals = require("globals");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const jsxA11y = require("eslint-plugin-jsx-a11y");

module.exports = [
  {
    ignores: [
      "node_modules/**",
      "build/**",
      "docs/**",
      "agente/**",
      "coverage/**",
      "plugins/**",
      "*.config.js",
    ],
  },
  {
    // Ficheros de test: globals de Jest
    files: ["**/*.{test,spec}.{js,jsx}"],
    languageOptions: {
      globals: { ...globals.jest },
    },
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.commonjs,
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.configs.recommended.rules,

      // Reglas del proyecto
      "react/prop-types": "off",
      "react/jsx-no-target-blank": "error",
      "react-hooks/exhaustive-deps": "error",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-empty": ["error", { allowEmptyCatch: true }],
      "prefer-const": "warn",
    },
  },
];
