module.exports = {
  env: {
    node: true,
    es2021: true,
    browser: true,
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    withDefaults: 'readonly',
  },
  extends: [
    '@vue/typescript/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'eslint:recommended',
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 'error',
  },
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true,
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'no-unused-vars': 'off',
      },
    },
  ],
}