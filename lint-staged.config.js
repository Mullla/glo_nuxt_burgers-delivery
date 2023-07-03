module.exports = {
  '*.{js,jsx,vue,ts,tsx}': 'eslint',
  '**/*.{css,scss,sass,html,vue}': 'stylelint',
  '*.**': 'prettier --check --ignore-unknown'
}
