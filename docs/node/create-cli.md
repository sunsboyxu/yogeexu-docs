# 开发 cli工具的流程
输入初始化命令
执行交互的js
与用户的交互
根据用户输入指令下载对应模板

# 脚手架常用工具包
- commander - 设计命令
- inquirer - 交互命令
- chalk - 命令行字体颜色输出
- ora - 终端显示等待效果、图标


# 配置脚手架命令
如何让命令行窗口认识命令，如: yagon-cli
npm link
mac: sudo npm link

// package.json
``` css
{
 "bin": {
     "yagon-cli": "./index.js"
   }
}
```

// bin/index.js
``` js
#!/usr/bin/env node
// 上面的注释不能少
console.log('npm link ok!')
```
输入 yagon-cli, 控制台执行 js 文件

