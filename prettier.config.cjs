module.exports = {
  tailwindConfig: './tailwind.config.cjs',
  singleQuote: true,
  trailingComma: 'none',
  parser: "typescript",
  printWidth: 160,
  proseWrap: 'never',
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  semi: false,
  arrowParens: 'always',
  bracketSameLine: false,
  overrides: [
    {
      files: ['.prettierrc', '.eslintrc'],
      options: {
        parser: 'json'
      }
    },
    {
      files: ['package.json'],
      options: {
        printWidth: 180
      }
    }
  ],
  plugins: [
    require('prettier-plugin-tailwindcss')
  ]
}
