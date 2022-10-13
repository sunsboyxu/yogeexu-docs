# Mac Hosts

## hosts文件介绍
- [hosts文件介绍](https://baike.baidu.com/item/hosts/10474546)
- [window系统中Hosts文件介绍](https://blog.csdn.net/fuhanghang/article/details/125293347)
- [GitHub520](https://github.com/521xueweihan/GitHub520)
- [github hosts](https://gitee.com/373503406/hosts)

hosts文件，用于将常用的网址域名与其对应的 ip地址 建立关联，相当于本地的一个 dns服务，
当用户在浏览器中访问一个网址时，系统首先会自动从 hosts文件 中寻找对应的 ip地址，
一旦找到系统会立即打开对应网页，
如果没有，系统会将网址提交 dns域名解析服务器 进行 ip地址 的解析

需要注意的是，hosts文件 配置的映射是静态的，如果网址域名更改了ip地址，请及时更新 hosts文件 中的映射关联，否则将不能访问

### hosts文件作用

- 加快域名解析
- 方便局域网用户
- 屏蔽网站（域名重定向）
- 顺利连接系统
- 虚拟域名

### MacOs 下系统默认 hosts

``` bash
#
# Host Database
#
# localhost is used to configure the loopback interface
# when the system is booting. Do not change this entry.
##
127.0.0.1 localhost
255.255.255.255 broadcasthost
::1 localhost 
fe80::10 localhost
```

## SwitchHosts

- [SwitchHosts 官网](https://swh.app)
- [SwitchHosts 下载](https://github.com/oldj/SwitchHosts/tags)
- [快速切换本地host文件的工具](https://blog.csdn.net/weixin_56727438/article/details/125718383)
- [SwitchHosts管理hosts](https://mp.weixin.qq.com/s/A37XnD3HdcGSWUflj6JujQ)
- [github加速教程](https://jishuin.proginn.com/p/763bfbd7d158)

通过 SwitchHosts 工具可以很好的来修改和管理自己的 host文件配置，Windows系统和Mac系统都可以使用