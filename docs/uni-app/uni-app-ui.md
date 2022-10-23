# Uni-App UI 框架使用

## 1 uView-ui 2.0

- [uviewui文档](https://www.uviewui.com/)
- [uView2.0插件市场](https://ext.dcloud.net.cn/plugin?id=1593)
- [uView2.0代码](https://gitee.com/umicro/uView2.0)
- [安全区适配](https://www.uviewui.com/components/safeAreaInset.html)

### 安装 uview-ui

- **1 npm 初始化** 项目如果没 npm 初始化，先初始化

``` bash
npm init -y
```

- **2 项目安装 uview-ui**

``` bash
npm install uview-ui -S
```

- **3 main.js 引入**

``` js
import Vue from 'vue'
import App from './App'
import uView from "uview-ui"

Vue.use(uView)
```

- **4 App.vue引入基础样式(声明scss属性支持)**

``` css
/* App.vue */
<style lang="scss">
@import "uview-ui/index.scss";
</style>
```

- **5 根目录 uni.scss 引入全局 scss**

``` css
/* uni.scss */
@import "uview-ui/theme.scss";
```

- **6 根目录 pages.json 配置easycom规则(按需引入)**
::: tip 安装方式配置
- npm安装的方式，不需要前面的 "@/"
- 下载安装的方式，需要 "@/"
:::

``` json
// pages.json
{
    "easycom": {
        // npm安装方式
        "^u-(.*)": "uview-ui/components/u-$1/u-$1.vue"
        // 下载安装方式
        // "^u-(.*)": "@/uview-ui/components/u-$1/u-$1.vue"
    },
    "pages": [
        // ......
    ]
}
```

### 其他问题

- [uView-UI v2.x常见问题整理](https://www.kancloud.cn/uview/uview-ui_v2)
