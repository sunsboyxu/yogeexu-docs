# 代码规范 eslint + prettier + stylelint

- [vue项目中使用eslint+prettier规范与检查代码的方法](https://www.jb51.net/article/178614.htm)
- [怎么在Vue项目中使用eslint + prettier规范代码风格](https://www.yisu.com/zixun/175905.html)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [Vue 项目中使用 ESLint 和 Prettier](https://zhuanlan.zhihu.com/p/337536349)
- [在Vue项目中使用Eslint+Prettier+Stylelint](https://blog.51cto.com/u_15127564/4301384)
- [使用 ESlint+stylelint+prettier 对前端项目代码进行规范](https://blog.51cto.com/u_15067223/4526947)
- [vite2 + vue3 + ts + volar 代码检测](https://blog.csdn.net/u013344993/article/details/122089458)
- [Vue3 + TypeScript + Pinia 搭建一套企业级的开发脚手架](https://www.jianshu.com/p/063188d494ed)
- [基于Vue3+TypeScript+ Vue-Cli4.0构建手机端模板脚手架](https://www.jianshu.com/p/adb0983830f6)
- [使用ESLint+Prettier来统一前端代码风格](https://mp.weixin.qq.com/s/B8C6PLELiUOsqyM56MHczA)
- [vite+Vue3+ts搭建通用后台管理系统](https://mp.weixin.qq.com/s/6xsfxH70VjPtbwJWZ7mmbg)
- [简单实用的ESLint + Prettier配置](https://blog.csdn.net/MrLiuSixsix/article/details/125189022)

- [vue项目中配置eslint和prettier](https://blog.csdn.net/weixin_42349568/article/details/120937200)
- [vue3项目中简单实用的ESLint + Prettier配置](https://blog.csdn.net/MrLiuSixsix/article/details/125189022)
- [Vue2项目中配置ESLint和Prettier](https://blog.csdn.net/dreamingbaobei3/article/details/124643312)
- [vue 项目 eslint + prettier 配置](https://www.cnblogs.com/savokiss/p/14797080.html)
- [Vue3项目添加ESLint和Prettier](https://segmentfault.com/a/1190000042424701)
- [Vue3项目工程化配置：Eslint + Prettier + husky + commitlint](https://www.jianshu.com/p/6623d892ad73)

- [vue3-eslint-stylelint-demo](https://github.com/sethidden/vue3-eslint-stylelint-demo)

## vue-cli 项目使用 eslint + prettier + stylelint

``` bash
vue create vue-app1
```

新建项目时，选择 eslint + prettier 的配置

vscode 扩展使用 [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)

vscode 设置

``` json
{
  "editor.defaultFormatter": "rvest.vs-code-prettier-eslint", // 配置默认格式化程序为 Prettier Eslint
  "editor.formatOnPaste": false, 
  "editor.formatOnType": false,
  "editor.formatOnSave": true, // 保存时格式化代码
  "editor.formatOnSaveMode": "file",
  "editor.codeActionsOnSave": {
    "source.fixAll.markdownlint": true, // 每次保存的时候将代码按 markdonwlint 格式进行修复
    "source.fixAll.stylelint": true, // 每次保存的时候将代码按 stylelint 格式进行修复
    "source.fixAll.eslint": true // 每次保存的时候将代码按 eslint 格式进行修复
  },
  "files.autoSave": "onFocusChange",
  "[vue]": { // .vue 文件使用 Prettier Eslint 来格式化
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[javascript]": { // .js 文件使用 Prettier Eslint 来格式化
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
}
```
