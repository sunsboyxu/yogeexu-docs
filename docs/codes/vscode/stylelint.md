# stylelint

- [stylelint](https://stylelint.io/)
- [stylelint rules](https://stylelint.io/user-guide/rules)

安装相关依赖

``` bash
yarn add stylelint stylelint-scss stylelint-config-standard-scss stylelint-config-prettier -D
```

新建 .stylelintrc.js

``` js
module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier'],
  rules: {
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
  },
}
```
