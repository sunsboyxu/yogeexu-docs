# Prettier

- [prettier](https://prettier.io/)
- [prettier github](https://github.com/prettier)
- [prettier-vscode](https://github.com/prettier/prettier-vscode)
- [prettier-eslint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [vscode自动保存 + Prettier自动格式化代码](https://blog.csdn.net/chali1314/article/details/126361178)
- [vue项目中使用eslint+prettier规范与检查代码的方法](https://www.jb51.net/article/178614.htm)

``` json
// vscode settings.json 的设置
{
  "prettier.semi": false, // 句末是否加分号
  "prettier.singleQuote": true, // 用单引号
  "prettier.trailingComma": "none", // 最后一个对象元素加逗号
  "prettier.tabWidth": 2, // 设置工具每一个水平缩进的空格数
  "prettier.printWidth": 120, // 换行字符串阈值
  "prettier.useTabs": false, 
  "prettier.vueIndentScriptAndStyle": true,
  "prettier.bracketSpacing": true, // 对象，数组加空格
  "prettier.jsxBracketSameLine": true, // jsx > 是否另起一行
  "prettier.arrowParens": "always", // (x) => {} 是否要有小括号
  "prettier.requirePragma": false, // 不需要写文件开头的 @prettier
  "prettier.insertPragma": false // 不需要自动在文件开头插入 @prettier
}
```
