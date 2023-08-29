/** @type {import("prettier").Config} */
const config = {
  plugins: [
    require("prettier-plugin-tailwindcss"),
    "@trivago/prettier-plugin-sort-imports",
  ],
  semi: true,
  tabWidth: 4,
  printWidth: 100,
  singleQuote: true,
  trailingComma: "all",
  endOfLine: "auto",
  singleAttributePerLine: true,
  // @ts-ignore
  importOrder: ["<THIRD_PARTY_MODULES>", "^@/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

module.exports = config;
