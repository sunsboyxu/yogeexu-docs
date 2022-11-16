# nrm

- [nrm安装和配置](https://www.jianshu.com/p/94d084ce6834)

nrm (npm registry manager) 是 npm 的镜像源管理工具，可以快速的切换 npm 镜像源

``` bash
npm install -g nrm
```

## 常用命令

``` js
// 查看当前 nrm 版本
nrm --version

// 查看镜像列表
nrm ls

// 使用 淘宝镜像源
nrm use taobao

// 显示当前 镜像源 名称
nrm current

// 浏览器中打开镜像源首页
nrm home 镜像源名称

// 添加一个镜像源(如：公司私有镜像源)
nrm add 镜像源名称 镜像源地址

// 删除镜像源
nrm del 镜像源名称 

// 测试所有 镜像源 速度
nrm test

// 测试 taobao 镜像源速度
nrm test taobao

// 设置自定义镜像源的授权信息
nrm set-auth 镜像源名称 <value> [always]

// 给自定义镜像源设置路径
nrm set-email 镜像源名称 <value>

// 设置发布到自定义镜像源的 npm 托管仓储
nrm set-hosted-repo 镜像源名称 <value>

// 发布包到自定义源，如果没有使用自定义源，则直接发布到 npm
nrm publish [options] [<tarball>|<folder>]

// 卸载时清除 NRM 配置
npm uninstall nrm -g --clean
npm uninstall nrm -g -C
```

## 相关问题

- [nrm ls 依然不带星或nrm current 不显示当前](https://github.com/Pana/nrm/issues/111)
- [nrm current显示不出信息和 nrm ls 当前使用源不出现星号的问题](https://www.cnblogs.com/xiaoxiaopao/p/16331277.html)

### nrm current 不显示 * ，即不显示当前的镜像源问题

macOS 系统下，如果是通过 nvm 安装 node 的

``` bash
## 找到当前使用 node 版本安装目录
## nrm(cli.js)文件
/Users/用户名/.nvm/versions/node/v16.18.0/bin/nrm
```

macOS 下，如果是通过 nodejs 官网下载安装的

``` bash
## nrm(cli.js)文件
/usr/local/lib/node_modules/nrm
```

macOS 下也可以通过 where nrm 来查看安装目录

``` bash
where nrm
# /Users/用户名/.nvm/versions/node/v16.18.0/bin/nrm
```

通过 vscode 或者其他编辑器打开 nrm(cli.js) 文件，找到 第211 行代码，将这里的 && 替换成 ||

``` js
// 将这里的 && 替换成 ||
// if (hasOwnProperty(customRegistries, name) && (name in registries || customRegistries[name].registry === registry.registry))
```

``` js
// nrm(cli.js) 文件的代码
function onUse (name) {
    var allRegistries = getAllRegistry();
    if (hasOwnProperty(allRegistries, name)) {
        getCurrentRegistry(function (cur) {
            let currentRegistry, item;
            for (let key of Object.keys(allRegistries)) {
                item = allRegistries[key];
                if (item[FIELD_IS_CURRENT] && equalsIgnoreCase(item.registry, cur)) {
                    currentRegistry = item;
                    break;
                }
            }
            var registry = allRegistries[name];
            let attrs = [].concat(REGISTRY_ATTRS).concat();
            for (let attr in Object.assign({}, currentRegistry, registry)) {
                if (!REGISTRY_ATTRS.includes(attr) && !IGNORED_ATTRS.includes(attr)) {
                    attrs.push(attr);
                }
            }

            config(attrs, registry).then(() => {
                console.log('                        ');
                const newR = npm.config.get(FIELD_REGISTRY);
                var customRegistries = getCustomRegistry();
                Object.keys(customRegistries).forEach(key => {
                    delete customRegistries[key][FIELD_IS_CURRENT];
                });
              // 将这里的 && 替换成 ||
              // if (hasOwnProperty(customRegistries, name) && (name in registries || customRegistries[name].registry === registry.registry))
                if (hasOwnProperty(customRegistries, name) || (name in registries || customRegistries[name].registry === registry.registry)) {
                    registry[FIELD_IS_CURRENT] = true;
                    customRegistries[name] = registry;
                }
                setCustomRegistry(customRegistries);
                printMsg(['', '   Registry has been set to: ' + newR, '']);
            }).catch(err => {
                exit(err);
            });
        });
    } else {
        printMsg(['', '   Not find registry: ' + name, '']);
    }
}
```

重新使用 nrm 命令

``` bash
nrm use taobao
nrm ls
nrm current
```
