module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'import/no-unresolved': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'semi': [2, 'never'],
    "indent": [2, 4],
    "arrow-body-style": [2, "as-needed"],
    "no-param-reassign": [2, {"props": false}],
    "max-len": [1, 100],
  }
}
