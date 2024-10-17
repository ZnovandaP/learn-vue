/* eslint-env node */

require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    '@vue/eslint-config-airbnb-with-typescript',
  ],

  parserOptions: {
    ecmaVersion: 'latest',
  },

  rules: {
    '@typescript-eslint/no-unused-vars': 1,
    'linebreak-style': 0,
    'import/no-extraneous-dependencies': 0,
    'import/order': ['error', {
      pathGroups: [
        {
          pattern: '@/**',
          group: 'external',
        },
      ],
    }],
  },

  ignorePatterns: [
    'tailwind.config.js',
    'vite.config.js',
  ],

  plugins: ['vue'],

};
