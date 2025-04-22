const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const prettierPlugin = require("eslint-plugin-prettier");
const prettierConfig = require("eslint-config-prettier");

module.exports = [
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  // Você precisará usar o novo plugin/config do Prettier para ESLint v9.
  // Consulte a documentação do eslint-plugin-prettier para ESLint v9.
  // Exemplo (pode variar dependendo da versão e configuração):
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
  prettierConfig, // Pode ser necessário incluir a config também
  {
    // Configurações específicas do seu projeto ou overrides
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 11,
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      // Suas regras personalizadas aqui
      // Exemplo: '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
  // Outras configurações em arrays separados, se necessário
];
