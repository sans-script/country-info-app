import globals from "globals";
import pluginJs from "@eslint/js";
import prettier from "eslint-config-prettier";
import eslintPluginPrettier from "eslint-plugin-prettier";

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
  {
    plugins: {
      prettier: eslintPluginPrettier,
    },
    rules: {
      "no-console": "off",
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      curly: ["error", "all"],
      indent: ["error", 2],
      quotes: ["error", "double"],
      semi: ["error", "always"],
      "prettier/prettier": [
        "error",
        {
          singleQuote: false,
          trailingComma: "all",
          semi: true,
          tabWidth: 2,
          useTabs: false,
          printWidth: 80,
          arrowParens: "always",
          endOfLine: "lf",
        },
      ],
    },
  },
  prettier,
];
