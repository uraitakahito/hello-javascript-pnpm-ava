import js from "@eslint/js";

export default [
  js.configs.all,
  {
    files: ["**/*.js"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
      },
    },
    rules: {
      // https://eslint.org/docs/latest/rules/id-length
      "id-length": ["error", { "min": 1 }]
    }
  },
];
