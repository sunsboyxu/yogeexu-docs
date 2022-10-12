# vscode配置
- [ReactArticles](https://github.com/bubucuo/ReactArticles)


## create-react-app + antd

[antd@3.26.19](https://3x.ant.design/docs/react/introduce-cn)

- npx create-react-app antd-app1 或
- yarn create react-app antd-app1

``` bash
yarn add antd
```

## 全部样式引入

``` js
import React, { Component } from 'react'
import Layout from '../../components/Layout'

import { Button } from 'antd'
import 'antd/dist/antd.css'

class Home extends Component {
  render() {
    return (
      <Layout title='home page' showtopbar={false} showbottombar={true}>
        <Button type='danger'>Home button</Button>
        <Button type='primary'>Test button</Button>
      </Layout>
    )
  }
}

export default Home
```

## 配置项目按需加载
- [高级配置](https://3x.ant.design/docs/react/use-with-create-react-app-cn)

``` js
import React, { Component } from 'react'
import Layout from '../../components/Layout'

import { Button } from 'antd'

class Home extends Component {
  render() {
    return (
      <Layout title='home page' showtopbar={false} showbottombar={true}>
        <Button type='danger'>Home button</Button>
        <Button type='primary'>Test button</Button>
      </Layout>
    )
  }
}

export default Home
```

### 配置方法一，推荐
- [antd使用craco按需加载样式以及自定义主题颜色](https://blog.csdn.net/weixin_51364974/article/details/120437346)
- [craco](https://github.com/dilanx/craco)
- [craco-antd](https://github.com/DocSpring/craco-antd)

@craco/craco + craco-less + babel-plugin-import

- 1 安装相关依赖
``` bash
yarn add @craco/craco craco-less babel-plugin-import -D
```

- 2 在项目根目录创建，craco.config.js
``` js
// craco.config.js
const CracoLessPlugin = require("craco-less")
const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
	// webpack 配置
	webpack: {
		// 别名配置
		alias: {
			'@': resolve('src'),
			'@components': resolve('src/components')
		}
	},
  babel: {
		// 按需加载配置
    plugins: [
      ['import', {
        libraryName: "antd",
        libraryDirectory: "es",
        // 设置为 true 即是less, 也可以设置为 'css'
        style: true
      }]
    ]
  },
  plugins: [
		// 自定义主题配置
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
            modifyVars: { '@primary-color': '#1DA57A' },
          }
        }
      }
    }
  ]
}
```

- 3 修改 package.json
``` js
"scripts": {
	"start": "craco start",
	"build": "craco build",
	"test": "craco test",
	"eject": "craco eject"
 } 
```

- 4 启动项目
``` bash
yarn start
```


### 配置方法二，不推荐
react-app-rewired + customize-cra + babel-plugin-import，版本兼容太难了

- 1 yarn add react-app-rewired customize-cra babel-plugin-import -D

- 2 //根⽬录创建 config-overrides.js, 修改默认配置
  ``` js
	// config-overrides.js
	const { override, fixBabelImports } = require('customize-cra')
	
	module.exports = override(
	  fixBabelImports('import', {
	    libraryName: 'antd',
	    libraryDirectory: 'es',
	    style: 'css'
	  })
	)
	```
	
- 3 修改 package.json

	``` js
	"scripts": {
		"start": "react-app-rewired start",
		"build": "react-app-rewired build",
		"test": "react-app-rewired test",
		"eject": "react-app-rewired eject"
	 }
	```
	 
##	less 使用

``` bash
yarn add less less-loader -D
```

## 自定义主题
<<<<<<< HEAD
⾃定义主题需要⽤到 less 变量覆盖功能，可以引⼊ customize-cra 中提
=======
⾃定义主题需要⽤到 less 变量覆盖功能，可以引⼊ customize-cra 中提
>>>>>>> 23adf04bac914d83134eb970c2aef4b6fdf55a19
供的 less 相关的函数 addLessLoader 来帮助加载 less 样式，同时修改 config-overrides.js ⽂件
``` js
// config-overrides.js
const { override, fixBabelImports, addLessLoader } = require('customize-cra')
module.exports = override(
	// antd 按需加载
	fixBabelImports({
		libraryName: 'antd',
		libraryDirectory: 'es',
		style: 'css'
	}),
	// 自定义主题
	addLessLoader({
		javascriptEnabled: true,
		modifyVars: {
			'@primary-color': 'orange'
		}
	})
)
```

## React 支持装饰器(decorators)

### 1 安装 babel 相关依赖
- yarn add @babel/core @babel/plugin-proposal-decorators @babel/preset-env
- yarn add react-app-rewired customize-cra

### 2 修改 package.json
"scripts": {
	"start": "react-app-rewired start",
	"build": "react-app-rewired build",
	"test": "react-app-rewired test",
	"eject": "react-app-rewired eject"
}

### 3 项目根目录新建 config-overrides.js
``` js
const path = require('path')
const { override, addDecoratorsLegacy } = require('customize-cra')
const resolve = dir => path.join(__dirname, dir)

const customize = () => (config, env) => {
	// 配置别名
	config.resolve.alias['@'] = resolve('src')
	// 配置打包排除包
	if(env === 'production') {
		config.externals = {
			'react': 'React',
			'react-dom': 'ReactDOM'
		}
	}
}

module.exports = override(
  customize(),
	addDecoratorsLegacy()
)
```

### 4 项目根目录新建 .babelrc 文件
``` js
{
  "presets": ["@babel/preset-env"],
  "plugins": [
    [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ]
}
```

## vscode 修改
顶部菜单 Code -> 首选项 -> 设置 -> 输入 decorator，勾选上

## 相关参考
- [](https://blog.csdn.net/XH_jing/article/details/107570926)
- [](https://blog.csdn.net/weixin_30484247/article/details/102070391)
- [](https://blog.csdn.net/weixin_44157964/article/details/108292457)
- [React 中如何使用装饰器（decorators）](https://blog.csdn.net/g1437353759/article/details/109293224)
- [react项目中使用装饰器decorators和typeScript](https://blog.csdn.net/Charissa2017/article/details/105853351)
- [](https://blog.csdn.net/qq_40689037/article/details/104618713)

# 问题
- [](https://github.com/DocSpring/craco-less/issues/30)