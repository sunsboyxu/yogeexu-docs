# vue3 组件库

## element-plus

支持旧版本的浏览器，请自行添加 Babel 和相应的 Polyfill
Vue 3 不再支持 IE11，Element Plus 也不再支持 IE 浏览器

- [element-plus](https://element-plus.org/zh-CN/)

### element-plus 安装

<CodeGroup>
<CodeGroupItem title="npm方式" active>

``` bash
npm install element-plus@next
```

</CodeGroupItem>
<CodeGroupItem title="yarn 方式">

``` bash
yarn add element-plus@next
```

</CodeGroupItem>
</CodeGroup>

### 完整引入

``` js
// src/main.js
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
```

### Volar 支持

如果您使用 Volar，请在 tsconfig.json 中通过 compilerOptions.type 指定全局组件类型

``` json
// tsconfig.json
{
  "compilerOptions": {
    // ...
    "types": ["element-plus/global"]
  }
}
```
