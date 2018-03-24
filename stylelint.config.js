module.exports = {
  extends: ['stylelint-config-sass-guidelines'],
  plugins: ['stylelint-selector-bem-pattern'],
  rules: {
    'at-rule-whitelist': [
      'include',
      'import',
      'charset',
      'mixin',
      'media',
      'content',
      'return',
      'function'
    ],
    'plugin/selector-bem-pattern': {
      preset: 'bem',
      implicitComponents: true
    }
  }
};
