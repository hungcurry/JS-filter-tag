module.exports = {
  env: {
    browser: true,
    es2024: true,
    commonjs: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/stylistic"],
  parser: "@typescript-eslint/parser",
  plugins: ["import", "@typescript-eslint"],
  root: true,
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  // 規則說明 ( https://eslint.org/docs/latest/use/configure/rules )
  // 所有的規則 ( https://eslint.org/docs/latest/rules/ )
  rules: {
    "no-console": "off",
    "no-promise-executor-return": "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-loop-func": "off",
    "array-callback-return": "error",
    "object-curly-newline": "off",
    "max-len": ["error", { code: 140 }],
    quotes: ["error", "double"],

    // import 副檔名是否需要 ( https://github.com/import-js/eslint-plugin-import#eslint-plugin-import )
    "import/extensions": "off",

    // 模組是否要導出預設值 ( https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md )
    "import/prefer-default-export": "off",

    // 隱式箭頭換行符 ( https://eslint.org/docs/latest/rules/implicit-arrow-linebreak )
    "implicit-arrow-linebreak": "off",

    // https://github.com/import-js/eslint-plugin-import/blob/v2.28.1/docs/rules/no-extraneous-dependencies.md
    "import/no-extraneous-dependencies": ["error", { devDependencies: ["vite.config.js"] }],

    // https://stackoverflow.com/questions/37826449/expected-linebreaks-to-be-lf-but-found-crlf-linebreak-style
    "linebreak-style": ["off", "windows"],

    // ts 的規則
    "import/no-extraneous-dependencies": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/prefer-for-of": "off",
  },
};
