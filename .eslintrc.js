module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
    'nuxt3-auto-import/nuxt': true
  },
  extends: [
    'eslint:recommended',
    'airbnb-base',
    'plugin:vue/vue3-recommended',
    'plugin:nuxt/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint', 'prettier', 'nuxt3-auto-import'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'comma-dangle': ['error', 'never'],
    semi: ['error', 'never'],
    'prettier/prettier': ['error'],
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    'vue/no-v-html': 'off',
    'vue/valid-attribute-name': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-explicit-any': ['off'],
    'class-methods-use-this': 'off',
    'global-require': 0
  },
  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue', '.ts']
      },
      typescript: {
        alwaysTryTypes: true
      }
    }
  }
}
