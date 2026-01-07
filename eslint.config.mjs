import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],

    extends: [
      js.configs.recommended
    ],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },

    rules: {
      
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "no-undef": "error",
      "no-unreachable": "error",

      eqeqeq: "error",
      curly: "error",

      "no-var": "error",
      "prefer-const": "error",
      "no-debugger": "error",
      "semi": "error",
      quotes: ["error", "double", { avoidEscape: true }]
    }
  }
]);
