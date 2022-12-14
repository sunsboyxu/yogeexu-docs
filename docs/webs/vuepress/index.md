# Vuepress

- [vuepress中文网](https://v2.vuepress.vuejs.org/zh)
- [vuepress支持的图标](https://www.webfx.com/tools/emoji-cheat-sheet/)

## vuepress 相关主题

- [vuepress-theme-hope](https://vuepress-theme-hope.github.io/v2/zh/)
- [基于Algolia Docsearch实现vuepress2网站全文搜索](https://zhuanlan.zhihu.com/p/560633533)
- [天上下橙雨](https://rainmic1019.github.io/)
- [](https://www.liuyuxin.site/)

## 初始化项目

``` js
mkdir vue-press1 && cd vue-press1
git init
yarn init -y
yarn add vuepress@next -D
```

## 添加运行命令

``` js
// package.json
"scripts": {
 // "docs:dev": "vuepress dev docs",
 // 热更新
 "docs:dev": "vuepress dev docs --temp .temp",
 "docs:build": "vuepress build docs"
}
```

## 添加忽略文件

``` js
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
```

## 创建 Hello World

``` js
mkdir docs
echo '# Hello Vuepress' >> docs/README.md
```

## 配置

[配置文件](https://v2.vuepress.vuejs.org/zh/guide/configuration.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6)

## 静态资源

- [静态资源](https://v2.vuepress.vuejs.org/zh/guide/assets.html)

## 搜索功能

- [基于Algolia实现网站全文搜索](https://rainmic1019.github.io/blog/other/algolia_docsearch.html#_1-%E5%89%8D%E8%A8%80)
- [基于Algolia实现网站全文搜索](https://blog.csdn.net/weixin_40026797/article/details/126063524)
- [vuePress 博客优化之开启 Algolia 全文搜索](https://www.cnblogs.com/yayujs/p/15982507.html)
