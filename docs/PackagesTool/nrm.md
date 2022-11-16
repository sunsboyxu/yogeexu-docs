# nrm

- [nrm安装和配置](https://www.jianshu.com/p/94d084ce6834)

nrm (npm registry manager) 是 npm 的镜像源管理工具，可以快速的切换 npm 镜像源

``` bash
npm install -g nrm
```

## 常用命令

``` js
// 查看版本
nrm --version

// 查看镜像列表
nrm ls

// 使用 淘宝镜像
nrm use taobao

// 测试速度
nrm test npm

// 卸载时清除 NRM 配置
npm uninstall nrm -g --clean
npm uninstall nrm -g -C
```

## 相关问题

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
