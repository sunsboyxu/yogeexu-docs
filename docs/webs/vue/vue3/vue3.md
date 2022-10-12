# Vue3

## vue3 相关文档

- [vue3官方文档](https://vuejs.org/)
- [vue3新版中文文档](https://staging-cn.vuejs.org/)
- [Vue 3 迁移指南](https://v3-migration.vuejs.org/)
- [Vue3 Api](https://cn.vuejs.org/api/)

## vue3学习

- [Vue3 + TypeScript + Pinia 搭建一套企业级的开发脚手架](https://www.jianshu.com/p/063188d494ed)
- [vite+Vue3+ts搭建通用后台管理系统](https://mp.weixin.qq.com/s/6xsfxH70VjPtbwJWZ7mmbg)
- [Vue3.x 我们在路上](https://www.jianshu.com/nb/48165352)
- [版本常用差异对比](https://www.jianshu.com/p/f6a2c95c18ba)
- [vue 3.0 笔记](https://www.jianshu.com/p/d31fa552e501)
- [基于Vue3+TypeScript+ Vue-Cli4.0构建手机端模板脚手架](https://www.jianshu.com/p/adb0983830f6)
- [vue3-h5-template](https://github.com/ynzy/vue3-h5-template)
- [Vue3 Vite SSR Typescript Eslint](https://www.jianshu.com/p/35ce77218bd2)
- [vue3+ts项目：.eslintrc.js](https://www.jianshu.com/p/b10273d4293d)
- [](https://www.jianshu.com/p/289919a35070)
- [](https://www.jianshu.com/p/13c405104ed8)
- [](https://www.jianshu.com/p/b8545d49fc69)



- [vuejs 官网](https://vuejs.org/)
- [vuejs 官网中文翻译](https://staging-cn.vuejs.org/)
- [vuejs 官网中文翻译源码](https://github.com/vuejs-translations/docs-zh-cn)
- [vue-dose](https://vuedose.tips/)
- [Suspense](https://vuedose.tips/go-async-in-vue-3-with-suspense/)
- [gogocode](https://gogocode.io/zh/docs/vue/vue2-to-vue3)
- [awesome-vue](https://github.com/vuejs/awesome-vue)
- [](https://www.jianshu.com/nb/48165352)
- [](https://www.jianshu.com/p/6436e26004ae)
- [](https://www.jianshu.com/p/b72f48328697)
- [](https://www.jianshu.com/p/73264214a97e)
- [](https://www.jianshu.com/p/83758d08a1c8)
- [](https://www.jianshu.com/p/8b0ee503f31c)

## 1 vue3 安装

### 全局安装

``` bash
// 全局安装 vue3
npm install -g @vue/cli
```

### 更新 vue3

``` bash
// 更新 @vue/cli
npm install -g @vue/cli to update
```

### 兼容 vue2.0 安装

``` bash
npm install -g @vue/cli-init
```

### 创建 vue 项目

<CodeGroup>
<CodeGroupItem title="命令创建项目" active>

``` bash
vue create vue3-app1
```

通过命令创建项目，会进行选择配置的选择
</CodeGroupItem>
<CodeGroupItem title="可视化创建项目">

``` bash
// vue 
vue ui
```

</CodeGroupItem>
</CodeGroup>

## 2 vue-cli 如何默认使用 yarn

### Mac 系统设置默认 yarn

``` bash
vim ~/.vuerc
```

``` json
{
 "useTaobaoRegistry": false,
 "packageManager": "yarn"
}
```

### windows 系统设置默认 yarn

- 我的电脑（此电脑） -> 本地磁盘(C)：-> 用户 -> 用户名下 -> .vuerc
- C:\Users\sunsboyxu\ .vuerc
- 使用 编辑器编辑 .vuerc

``` json
{
  "useTaobaoRegistry": true,
  "packageManager": "yarn",
  "latestVersion": "5.0.1",
  "lastChecked": 1646457378023
}
```

## 3 vue.config.js 配置

- [vue-cli4 全面配置](https://github.com/staven630/vue-cli4-config)

## Composition Api

- [shallowReactive 与 shallowRef 的用法](https://blog.csdn.net/qq_54527592/article/details/119840044)

### shallowRef

### shallowReactive

## 4 vue3 源码解读

[vue3 源码解读](https://hkc452.github.io/slamdunk-the-vue3/)
