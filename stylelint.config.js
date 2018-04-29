module.exports = {
  extends: ['stylelint-config-recommended-scss'],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'order/properties-alphabetical-order': true
  },
  syntax: 'scss'
};
