# vitejs

- [vitejs](https://cn.vitejs.dev/)

## vite 文档

- [vite中文网](https://cn.vitejs.dev/)
- [vite config](https://vitejs.dev/config/#config-file)
- [vitepress](https://vitepress.vuejs.org/)
- [Vue3 配置文件vite.config.js](https://blog.csdn.net/hbiao68/article/details/108972775)
- [vite.config.js 相关配置](https://blog.csdn.net/weixin_43880397/article/details/121848881)
- [vite 配置](https://juejin.cn/post/6949138186886971429)
- [Vue 2 项目如何快速接入 Vite 作为开发工具](https://mp.weixin.qq.com/s/tfvE75639PibrYISXtY9hQ)
- [script setup](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0040-script-setup.md)
- [vite.config.ts文件常用配置](https://www.jianshu.com/p/6a3695d8f7fe)
- [Vite的常用配置vite.config.js](https://github.com/staven630/vite-config)

## vite 初始化项目

<CodeGroup>

<CodeGroupItem title="npm 方式" active>

``` bash
npm init @vitejs/app 项目名称
npm init @vitejs/app 项目名称 --template vue
npm init @vitejs/app 项目名称 --template vue-ts

```

</CodeGroupItem>
<CodeGroupItem title="yarn 方式">

``` bash
yarn create @vitejs/app 项目名称
// 或者
yarn create vite-app 项目名称

```

会让你选择 vue 或者 vue-ts react等
</CodeGroupItem>

</CodeGroup>

::: danger vite-app 这个包有问题

``` bash
// 这个的包有问题
yarn create vite-app 项目名称
```

:::

## vite 插件使用

- [vite常用插件](https://zhuanlan.zhihu.com/p/375971479)

### 按需加载

npm install vite-plugin-babel-import --save-dev

- vite-config.js

``` js
import { defineConfig } from 'vite'
import vitePluginBabelImport from 'vite-plugin-babel-import'
export default defineConfig({
 plugins:[
  vitePluginBabelImport([{
   libraryName: 'element-plus',
   librayDirectory: 'es',
   style(name) {
    return `element-plus/lib/theme-chalk/${name}.css`;
   }
  }])
 ] 
})
```

- vite-plugin-babel-import
- [打包上次oss] vite-plugin-assets-uploader

## 实战教程

- [muteki-vant-vite](https://gitee.com/WeiziPlus/muteki-vite)
- [Vite2 项目工程化和原理，一次搞定！](https://mp.weixin.qq.com/s/wSfgGmTRNZITegWzT3v_mw)
- [实战 | Vite2.0搭建Vue3移动端项目](https://mp.weixin.qq.com/s/j2g69KtJHEVIyg_8O32WsQ)
- [一个基于vue3+vite+ts的完整项目](https://blog.csdn.net/qq_34256872/article/details/108990797)
- [vite2.0搭建vue3移动端项目](https://zhuanlan.zhihu.com/p/351888882)
- [vue-vben-admin](https://github.com/anncwb/vue-vben-admin)
- [创建完整的Vite + Vue3 + TypeScript + ESLint + prettierrc + Sass项目模版](https://blog.csdn.net/weixin_43931876/article/details/114605284)
- [Vue3 + Vite2 + TypeScript 开发复盘总结](https://mp.weixin.qq.com/s/uiGqqTlkqxlItFnwMmYDUQ)
