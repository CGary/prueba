module.exports = {
  root: true,  
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  globals: {},
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  plugins: ["react", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/extensions": [".js", ".jsx", "ts", "tsx"],
  },
  rules: {
    "react/prop-types": 0,
    "no-duplicate-case": 0,
    "no-extra-boolean-cast": 0,
    "no-fallthrough": 0,
    "no-async-promise-executor": 0,    
    "no-case-declarations": 0,
    "react/react-in-jsx-scope": 0,
    "no-console": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-var-requires": 0,
  },
}
