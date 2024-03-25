# 服务器

- [服务器端如何开启GZIP压缩功能](https://juejin.im/post/5af003286fb9a07aac24611b)
- [阿里云服务器(centos7.3)上安装jdk、tomcat、mysql、redis](https://www.jianshu.com/p/1752e49e0d29)

## 服务器新建站点

### 添加记录

- 控制台 -> 域名解析 -> 解析设置 -> 添加记录

::: tip 添加一条记录

- 记录类型：A（是将域名指向一个IPv4地址）
- 主机记录：music （二级域名名称）music.sunsboy.xyz
:::

### 主机记录

::: warning 主机记录就是域名前缀，常见用法有

- www：解析后的域名为www.aliyun.com。
- @：直接解析主域名 aliyun.com。
- *：泛解析，匹配其他所有域名*.aliyun.com。
- mail：将域名解析为mail.aliyun.com，通常用于解析邮箱服务器。
- 二级域名：如：abc.aliyun.com，填写abc。
- 手机网站：如：m.aliyun.com，填写m。
- 显性URL：不支持泛解析（泛解析：将所有子域名解析到同一地址）
:::

### 解析路线

解析路线：选择默认就好了！
::: warning
如果只有一个IP地址或CNAME域名，请务必选择【默认】。

- 默认：必填！未匹配到智能解析线路时，返回【默认】线路设置结果。
- 境外：向除中国大陆以外的其他国家和地区，返回设置的记录值。
- 搜索引擎：向搜索引擎爬虫的DNS，返回设置的记录值
:::

### 记录值

服务器的 ip 地址或者其他的 如：直播的，腾讯提供的记录值 play.sunsboy.xyz.livecdn.liveplay.myqcloud.com

## 阿里云

- [阿里云](https://www.aliyun.com/)

## 腾讯云

- [腾讯云](https://cloud.tencent.com/)

## SSL证书

- [GETSSL 专业的SSL证书提供商](https://www.getssl.cn/)
- [证书文档](https://www.getssl.cn/support/)
- [Java Keytool 命令使用教程](https://www.getssl.cn/support/java-keytool-%E5%91%BD%E4%BB%A4%E4%BD%BF%E7%94%A8%E6%95%99%E7%A8%8B/)

### 申请腾讯免费SSL证书

[SSL证书](https://cloud.tencent.com/document/product/400)

::: tip SSL证书申请流程

- 1、点击 申请免费证书
- 2、添加证书相关信息
- 3、手动DNS验证
- 4、点击 确认申请 -> 查看证书详情 -> 请添加如下解析记录
- 5、登录 阿里云服务器控制台，域名管理
:::

## 宝塔面板

[宝塔-服务器运维面板](https://www.bt.cn/new/index.html)

[阿里云验证码](https://www.aliyun.com/activity/security/wafcaptcha)
[LeanCloud](https://www.leancloud.cn/)
[腾讯云文档中心](https://cloud.tencent.com/document/product)
[正版曲库直通车（版权音乐助手）](https://cloud.tencent.com/product/ame)
[正版曲库直通车 文档](https://cloud.tencent.com/document/product/1155)
