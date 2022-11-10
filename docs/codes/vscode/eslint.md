# eslint

- [eslint](https://eslint.org/)
- [eslint github](https://github.com/eslint/eslint)
- [eslint-plugin-vue](https://eslint.vuejs.org/)
- [使用ESLint+Prettier规范React+Typescript项目](https://zhuanlan.zhihu.com/p/62401626)
- [深入理解 ESlint](https://juejin.cn/post/6844903901292920846)

## .eslintrc.js rules 规则配置说明

- [eslint-plugin-vue](https://eslint.vuejs.org/)
- [vue valid-v-on](https://eslint.vuejs.org/rules/valid-v-on.html)
- [Available rules](https://eslint.vuejs.org/rules/)
::: tip .eslintrc.js rules 规则配置说明

``` json
/**
 * indent 空格规则 说明，其他使用 数组的类似
 * 数组第一个参数指定 是否启用这个规则
 *   "off"   或  0 - 关闭规则
 *  "warn"  或  1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出)
 *  "error" 或  2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
 * 数组第二个参数，指定 空几个 空格
*/
'indent': ['error', 2]
'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
'space-before-function-paren': 'off', // 函数空格校验
'no-irregular-whitespace': 'off', // 禁止空格报错检查
'no-unused-vars': 'off' // 定义变量未使用报错
'vue/multi-word-component-names': 'off' // vue 关闭命名规则
'no-throw-literal': 'off' // 清除 try {} catch 的报错
eqeqeq: 'off' // 关闭使用必须 === 全等的报错
'no-eval': 'off' //
// vue v-on:click 等 规则校验
// 'vue/valid-v-on': 'off', // 关闭 vue v-on 的校验
// 'vue/valid-v-on': ['warn'],
'vue/valid-v-on': ['error', {
 modifiers: ['my-input-search'] // 具体的 自定义键名
}],
// https://eslint.org/docs/latest/rules/multiline-ternary
'multiline-ternary': ['always-multiline'] // 三元表达式 是否允许多行

```

:::

## .eslintrc.js 配置说明

``` js
// .eslintrc.js
module.exports = {
 // 默认情况下，eslint 会在所有父级组件中寻找配置文件，一直到根目录
 // eslint 一旦发现配置文件中有 "root": true，就会停止在父级目录中寻找
  root: true,
 // 对 babel 解析器的包装使其与 eslint 兼容
 parser: 'babel-eslint',
 parsetOptions: {
  // 代码是 ECMAScript 模块
  sourceType: 'module'
 },
  env: {
  browser: true, // 预定义的全局变量，这里是浏览器环境
    node: true // node 环境
  },
 // 比如使用 微信js-sdk，js是 cdn方式引用的，调用 wx.config 等方法
 global: {
  'wx'
 },
 // 扩展一个流行的风格指南
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
 // extends: 'standard' // 扩展一个流行的风格指南，即 eslint-config-standard
 // 此插件用来识别.html 和 .vue文件中的js代码
 plugins: [
  'html', // 此插件用来识别.html 和 .vue文件中的js代码
  'standard', // standard 风格的依赖包
  'promise'
 ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
 // 规则配置
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 'off',
    'no-irregular-whitespace': 'off',
    'no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off',
    'no-throw-literal': 'off',
    eqeqeq: 'off',
    // eqeqeq: ['warn', 'smart']
    // 'vue/valid-v-on': 'off',
    // 'vue/valid-v-on': ['warn'],
    'vue/valid-v-on': ['error', {
    modifiers: ['my-input-search']
 }],
 'multiline-ternary': ['always-multiline']
  }
}
```

## .eslintignore 忽略那些文件或者文件目录的校验

``` bash
public
dist
node_modules
```
