# 代码规范 eslint + prettier + stylelint

- [搞懂 ESLint 和 Prettier](https://zhuanlan.zhihu.com/p/80574300)
- [前端基于 husky 通过 eslint 检测提交代码](https://mp.weixin.qq.com/s/2G4dr4hdLn1JZSR0fXs_kw)

- [vue项目中使用eslint+prettier规范与检查代码的方法](https://www.jb51.net/article/178614.htm)
- [怎么在Vue项目中使用eslint + prettier规范代码风格](https://www.yisu.com/zixun/175905.html)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [Vue 项目中使用 ESLint 和 Prettier](https://zhuanlan.zhihu.com/p/337536349)
- [在Vue项目中使用Eslint+Prettier+Stylelint](https://blog.51cto.com/u_15127564/4301384)
- [使用 ESlint+stylelint+prettier 对前端项目代码进行规范](https://blog.51cto.com/u_15067223/4526947)
- [vite2 + vue3 + ts + volar 代码检测](https://blog.csdn.net/u013344993/article/details/122089458)
- [Vue3 + TypeScript + Pinia 搭建一套企业级的开发脚手架](https://www.jianshu.com/p/063188d494ed)
- [基于Vue3+TypeScript+ Vue-Cli4.0构建手机端模板脚手架](https://www.jianshu.com/p/adb0983830f6)
- [使用ESLint+Prettier来统一前端代码风格](https://zhuanlan.zhihu.com/p/38267286)
- [使用ESLint+Prettier来统一前端代码风格](https://mp.weixin.qq.com/s/B8C6PLELiUOsqyM56MHczA)
- [vite+Vue3+ts搭建通用后台管理系统](https://mp.weixin.qq.com/s/6xsfxH70VjPtbwJWZ7mmbg)
- [简单实用的ESLint + Prettier配置](https://blog.csdn.net/MrLiuSixsix/article/details/125189022)
- [使用ESLint+Prettier规范React+Typescript项目](https://zhuanlan.zhihu.com/p/62401626)
- [vue项目中配置eslint和prettier](https://blog.csdn.net/weixin_42349568/article/details/120937200)
- [vue3项目中简单实用的ESLint + Prettier配置](https://blog.csdn.net/MrLiuSixsix/article/details/125189022)
- [Vue2项目中配置ESLint和Prettier](https://blog.csdn.net/dreamingbaobei3/article/details/124643312)
- [vue 项目 eslint + prettier 配置](https://www.cnblogs.com/savokiss/p/14797080.html)
- [Vue3项目添加ESLint和Prettier](https://segmentfault.com/a/1190000042424701)
- [Vue3项目工程化配置：Eslint + Prettier + husky + commitlint](https://www.jianshu.com/p/6623d892ad73)

- [vue3-eslint-stylelint-demo](https://github.com/sethidden/vue3-eslint-stylelint-demo)

## 编辑器设置

前端项目基本都是使用 vscode 进行开发

### vscode 设置

安装相关的扩展和一些配置，如果安装 Vetur 扩展的可以先卸载了

- ESLint 扩展
- Prettier 扩展
- Stylelint 扩展
- Prettier ESLint 扩展，这个扩展看个人需求安装
- Volar 扩展，默认支持 vue3，对 vue2 项目需要做个兼容处理

[Prettier ESLint 扩展](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint)

vscode 进行设置

### 自动保存代码、代码类型类型操作、保存时格式化

首选项 -> 设置 -> 在搜索设置中输入 files.autoSave、editor.formatOnSave、editor.codeActionsOnSave

或者在 设置 界面，点击 右上角的 文件图标（打开设置json）的图标，打开 settigns.json 文件，进行设置

### 相关设置说明

``` json
// settgins.json
{
  "files.autoSave": "onFocusChange", // 控制具有未保存更改的编辑器的 自动保存
  "files.associations": { // 配置语言的文件关联
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript",
    "*.scss": "css",
    "*.js": "javascript"
  },
  "files.exclude": { // 配置 glob 模式以排除文件和文件夹。例如，文件资源管理器根据此设置决定要显示或隐藏的文件和文件夹
    "**/.git": false // 显示 .git 文件夹
  },
  "editor.tabSize": 2, // 一个制表符等于的空格数
  "editor.fontSize": 14, // 控制字体大小
  "editor.formatOnSave": true,       // 在保存时格式化文件，格式化程序必须可用，延迟后文件不能保存，并且编辑器不能关闭

  // 控制在保存时设置格式是设置整个文件格式还是仅设置修改内容的格式。editor.formatOnSave 处于启用状态时适用
  "editor.formatOnSaveMode": "file",

  "editor.tabCompletion": "on", // 启用 Tab 补全
  "editor.fontLigatures": false, // 配置字体连字或字体特性。可以是用于启用/禁用连字的布尔值
  "editor.fontFamily": "Consolas,JetBrainsMono Nerd Font", // 控制字体系列

  // 定义一个默认格式化程序, 该格式化程序优先于所有其他格式化程序设置。必须是提供格式化程序的扩展的标识符
  // 这个标识是：Prettier ESLint 扩展
  "editor.defaultFormatter": "rvest.vs-code-prettier-eslint",
  "editor.codeActionsOnSave": { // 在保存时运行的代码操作类型
    "source.fixAll": true, // 控制是否应在文件保存时运行自动修复操作
    "source.fixAll.markdownlint": true,
    "source.fixAll.stylelint": true,
    "source.fixAll.eslint": true
  },
  "editor.unicodeHighlight.allowedCharacters": { // 定义未突出显示的允许字符
    "，": true,
    "：": true,
    "（": true,
    "’": true
  },
  "eslint.alwaysShowStatus": true, // 底部是否始终显示 ESLint 标识
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "prettier.jsxSingleQuote": true,
  "prettier.printWidth": 200,
  "prettier.singleAttributePerLine": true,
  "[markdown]": { // 针对某种语言，配置替代编辑器设置
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true,
    "editor.defaultFormatter": "DavidAnson.vscode-markdownlint"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
}
```

### 我的完整配置

``` json
{
  "workbench.sideBar.location": "right",
  "workbench.colorTheme": "Atom One Dark",
  "workbench.iconTheme": "material-icon-theme",
  "window.zoomLevel": 1,
  "volar.completion.preferredTagNameCase": "kebab",
  "volar.completion.preferredAttrNameCase": "kebab",
  "files.autoSave": "onFocusChange",
  "files.associations": {
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript",
    "*.scss": "css",
    "*.js": "javascript"
  },
  "files.exclude": {
    "**/.git": false
  },
  "editor.tabSize": 2,
  "editor.fontSize": 14,
  "editor.tabCompletion": "on",
  "editor.fontLigatures": false,
  "editor.fontFamily": "Consolas,JetBrainsMono Nerd Font",
  "editor.formatOnSave": true,
  "editor.formatOnSaveMode": "file",
  "editor.defaultFormatter": "rvest.vs-code-prettier-eslint",
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.markdownlint": true,
    "source.fixAll.stylelint": true,
    "source.fixAll.eslint": true,
    "source.organizeImports": true
  },
  "editor.unicodeHighlight.allowedCharacters": {
    "，": true,
    "：": true,
    "（": true,
    "’": true
  },
  "eslint.alwaysShowStatus": true,
  "prettier.semi": false,
  "prettier.jsxSingleQuote": true,
  "prettier.printWidth": 200,
  "prettier.singleQuote": true,
  "prettier.singleAttributePerLine": true,
  "prettier.trailingComma": "none",
  "prettier.bracketSameLine": true,
  "prettier.vueIndentScriptAndStyle": true,
  "prettier.bracketSpacing": true,
  "html.format.extraLiners": "",
  "html.format.contentUnformatted": "",
  "explorer.confirmDelete": false,
  "emmet.includeLanguages": {
    "wxml": "html",
    "vue-html": "html",
    "vue": "html"
  },
  "explorer.confirmDragAndDrop": false,
  "git.autofetch": true,
  "git.confirmSync": false,
  "[markdown]": {
    "editor.formatOnSave": true,
    "editor.formatOnPaste": true,
    "editor.defaultFormatter": "DavidAnson.vscode-markdownlint"
  },
  "[dart]": {
    "editor.formatOnSave": true,
    "editor.formatOnType": true,
    "editor.rulers": [80],
    "editor.selectionHighlight": false,
    "editor.suggest.snippetsPreventQuickSuggestions": false,
    "editor.suggestSelection": "first",
    "editor.tabCompletion": "onlySnippets",
    "editor.wordBasedSuggestions": false
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "rvest.vs-code-prettier-eslint"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "javascript.validate.enable": false,
  "typescript.validate.enable": false,
  "js/ts.implicitProjectConfig.experimentalDecorators": true,
  "terminal.integrated.defaultProfile.windows": "Windows PowerShell",
  "security.workspace.trust.untrustedFiles": "open",
  "terminal.integrated.profiles.windows": {
    "PowerShell": {
      "source": "PowerShell",
      "icon": "terminal-powershell"
    },
    "Command Prompt": {
      "path": ["${env:windir}\\Sysnative\\cmd.exe", "${env:windir}\\System32\\cmd.exe"],
      "args": [],
      "icon": "terminal-cmd"
    },
    "Git Bash": {
      "source": "Git Bash"
    },
    "Windows PowerShell": {
      "path": "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe"
    }
  },
  "terminal.integrated.profiles.osx": {
    "bash": {
      "path": "bash",
      "args": ["-l"],
      "icon": "terminal-bash"
    },
    "zsh": {
      "path": "zsh",
      "args": ["-l"]
    },
    "fish": {
      "path": "fish",
      "args": ["-l"]
    },
    "tmux": {
      "path": "tmux",
      "icon": "terminal-tmux"
    },
    "pwsh": {
      "path": "pwsh",
      "icon": "terminal-powershell"
    },
    "tcsh": {
      "path": "/bin/tcsh"
    },
    "dash": {
      "path": "/bin/dash"
    }
  },
  "terminal.integrated.defaultProfile.osx": "zsh",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "markdownlint.config": {
    "no-reversed-links": false,
    "no-bare-urls": true
  },
  "emmet.triggerExpansionOnTab": true
}
```

## vue-cli 项目使用 eslint + prettier + stylelint + husky

``` bash
vue create eslint-prettier-demo
```

### 新建项目时的选择

- 选择 Manually select features(自定义配置)
- 使用 上下键定位到 Linter / Formatter，使用 空格键 ☑️ 选中，其他的配置根据项目需要勾选 ☑️
- 提示 Pick a linter / formatter config 时，上下键 定位到 ESLint + Prettier，并回车

### 相关依赖说明

- eslint                  配置代码风格、质量的校验
- prettier                用于代码格式的校验
- eslint-config-prettier  使用 prettier 默认推荐配置，关闭 eslint 自身的格式化功能，防止 prettier 和 eslint 的自动格式化冲突
- eslint-plugin-prettier  eslint 插件， 由 Prettier 生态提供，用于报告错误给 ESLint  
- eslint-plugin-vue       vue 专门的 eslint 规则插件，用于检查 .vue 文件
- @babel/eslint-parser    eslint 的 babel 解析器代替 babel-eslint
- @vue/cli-plugin-eslint

### 对于未使用 Linter / Formatter 选项初始化的项目，安装下面相关依赖

``` bash
yarn add eslint prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-vue -D
yarn add @babel/core @babel/eslint-parser @vue/cli-plugin-eslint -D
```

### vscode 使用 volar 扩展的设置

修改 jsconfig.json 或者 typescript.config.json

``` json
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "baseUrl": "./",
    "moduleResolution": "node",
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  "vueCompilerOptions": {
    "target": 2.7,
    // "target": 2 // vue <= 2.6
    "extensions": [
      ".vue"
    ]
  }
}
```

新建 .eslintrc.js 文件

``` js
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'none'
      }
    ]
  }
}
```

新建 .prettierrc 文件

``` json
{
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none"
}
```

## 配置 pre-commit

- [Prettier官方提供的 pre-commit 方式](https://prettier.io/docs/en/precommit.html)

### husky + lint-staged

``` js
// 执行该命令，确保 git init 已经初始化过
npx mrm@2 lint-staged
```

如果该命令响应的时间太慢，可以先将 npm 的镜像源切换为国内镜像(如：淘宝镜像源)，或者使用 nrm
[nrm文档](https://sunsboyxu.github.io/yogeexu-docs/PackagesTool/nrm) 来管理你的镜像源

执行该命令的日志：

``` js
// 执行 npx mrm@2 lint-staged 成功的日志
Running lint-staged...
Update package.json
husky - Git hooks installed
husky - created .husky/pre-commit
```

该命令会 修改 package.json 的内容

该命令会 创建 .husky 文件夹

``` json
// package.json 新增的内容
{
  "scripts": {
    ...
    "prepare": "husky install"
  },
  "lint-staged": {
    "*.js": "eslint --cache --fix"
  }
}
```
