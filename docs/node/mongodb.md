
# MongoDB

[官网](https://www.mongodb.com)
[mongodb 数据库文档](https://docs.mongodb.com/manual/mongo/)

# 相关教程

[菜鸟教程-Mongodb](https://www.runoob.com/mongodb/mongodb-tutorial.html)

# 相关下载

[安装包下载 - window/mac](https://www.mongodb.com/download-center/community)
[可视化工具Compass下载 - window/mac](https://www.mongodb.com/try/download/compass)

# window7下安装的

我的安装目录 F:\install\mongoDB
1、将 mongoDB 安装在F盘下 install 目录
2、在安装的 mongoDB目录下手动创建存放数据的 data 目录
  2-1、在安装的 mongoDB -> bin 在此处打开命令窗口，并执行：
     mongod -dbpath F:\install\mongoDB\data
      mongodb 默认端口为：27017
3、在安装的 mongoDB目录 创建 mongo.conf(或者.config)
 // F:\install\mongoDB\mongo.conf
 #数据库路径
 dbpath = F:\install\mongoDB\data
 #日志输出文件路径
 logpath = F:\install\mongoDB\mongodb.log
 #错误日志采用追加模式，配置这个选项后mongodb的日志会追加到现有的日志文件，而不是从新创建一个新文件
 logappend = true
 #启用日志文件，默认启用
 journal = true
 #这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false
 quiet = true
 #端口号 默认为27017
 port = 27017
4、将 mongodb 作为系统服务启动
  在安装的 mongoDB -> bin 在此处打开命令窗口，并执行：
  mongod --config F:\install\mongoDB\mongo.conf --install -serviceName "MongoDB"
  命令行窗口（cmd）输入services.msc命令——查看服务可以看到MongoDB服务，点击可以启动
后面可以执行：
 cmd 打开命令窗口
 启动MongoDB服务：net start MongoDB
 停止MongoDB服务：net stop  MongoDB
浏览器：127.0.0.1：27017

# window10 安装 MongoDB

[Windows 10 安装 Mongodb](https://www.cnblogs.com/weschen/p/8213746.html)
[Windows10安装MongoDB4.0详细流程及启动配置](https://www.cnblogs.com/tonylaoshi/p/11052427.html)
[Win10 安装配置 MongoDB 4.0 踩坑记](https://www.cnblogs.com/whowhere/p/9637605.html)
[Win10 安装配置 MongoDB 4.0 踩坑记](https://blog.csdn.net/wywysun/article/details/99563341)
[](https://blog.csdn.net/qq_27378621/article/details/80933354)
[](https://www.cnblogs.com/jianglan/p/4430299.html)
[](https://www.runoob.com/nodejs/nodejs-mongodb.html)
[](http://mongodb.github.io/node-mongodb-native/3.2/tutorials/connect/))

# 安装步骤

- 1 点击 .msi 进行安装
- 2 选择 custome 进行安装
- 3 我的安装目录 Z:\MongoDB
- 4 Install MongoD as a Service 默认就好
   Service Name: MongoDB
   Data Directory: Z:\MongoDB\data\
   Log Directory: Z:\MongoDB\log\
- 5. 取消 √ Install MongoDB Compass (不安装，不然会因为一直下载这个工具，导致安装卡主)  
- 6 mongo db compass 是个图形工具，可以方便直接管理 mongodb 数据
  
# 添加环境变量

path中添加
Z:\MongoDB\bin

# 启动 MongoDB 服务

net start MongoDB(任务管理器中查看是否启动)

# MongoDB 开机

mongod --dbpath "z:\mongodb\data\db"

# Mac 下安装 mongodb

[mac系统下安装、启动、停止mongodb](https://www.cnblogs.com/haonanZhang/p/8213947.html)
[Mac 下安装配置MongoDB讲解](https://www.cnblogs.com/mtxcat/p/14140757.html)
[MongoDB - Mac上安装和配置MongoDB](https://www.cnblogs.com/helios-fz/p/13685060.html)

1. 下载安装包
[mongodb安装包下载](https://www.mongodb.com/try/download/community)
2. 解压安装包

- 命令打开目录： open /usr/local
- 将 mongodb 剪切到 /usr/local/mongodb

3 配置环境变量
export PATH=/usr/local/mongodb/bin:$PATH

设置数据库目录 日志目录 配置文件

## 在 /usr/local/mongodb/ 下建立（在别的目录下建立也可以）

 /usr/local/mongodb/ data目录，data下建立 db 目录
 /usr/local/mongodb/ log 目录，mongod.log 文件
 /usr/local/mongodb/ etc 目录, mongod.conf 文件

### 数据库目录（data/db）：/usr/local/mongodb/data/db

- mongod --dbpath=/usr/local/mongodb/data/db

### 日志目录(log/mongod.log): /usr/local/mongodb/log/mongod.log

- mongod --logpath=/usr/local/mongodb/log/mongodb.log

### 配置文件(ect/momgod.conf): /usr/local/mongodb/etc/mongod.conf

- mongod --config=/usr/local/mongodb/etc/mongod.conf

// mongod.conf 文件配置(#表示注释)

``` css
#mongodb 配置文件
#数据库路径
dbpath=/usr/local/mongodb/data/db
#日志路径
logpath=/usr/local/mongodb/log/mongodb.log
#错误日志采用追加模式，配置这个选项后mongodb的日志会追加到现有的日志文件，而不是从新创建一个新文件
logappend=true
#启用日志文件，默认启用
journal=true
#这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false
quiet=false
#是否后台启动，有这个参数，就可以实现后台运行
fork=true
#端口号 默认为27017
port=27017
#指定存储引擎（默认不需要指定）
#storageEngine=mmapv1
#开启网页日志监控，有这个参数就可以在浏览器上用28017查看监控界面
#高版本可能不支持
#httpinterface=true
#rest=true
```

# 启动 mongodb

命令窗口打开 /usr/local/mongodb/bin，执行 mongod --dbpath=/usr/local/mongodb/data/db
配置 快启动
vim ~/.base_profile
键盘 e
alias mongodserver='mongod --dbpath=/usr/local/mongodb/data/db'
键盘 ESC
输入 :wq!
source ~/.bash_profile
重启 命令窗口
mongodserver

# 关闭 mongo

- db.shutdownServer()

# 连接 MongoDB 连接数据库

[](http://mongodb.github.io/node-mongodb-native/3.4/quick-start/quick-start/)

# mongo 下的操作

- show dbs // 查看数据库
- use xxx(数据库名称) // 使用数据库，没有会创建
- db // 查看当前所在数据库
- show collections // 查看集合
- db.user.find() // 查看数据
- db.xx // 会自动创建该集合

# 将.json文件数据导入数据库中

json文件地址 C:\Users\zhaoshunyu\Desktop\data\data1.json
.json 文件数据格式

``` json
{"title":"标题1","content":"hello world!","createTime":"2019-11-28"}
{"title":"标题2","content":"welcome!","createTime":"2019-11-28"}
{"title":"标题3","content":"nice to meet you","createTime":"2019-11-28"}
```

## 命令导入数据

mongoimport --db test --collection user --drop --file C:\Users\zhaoshunyu\Desktop\data\data1.json
--db 指明数据库
--collection 指明集合
--drop 清空数据
--file 数据位置

## 导入成功的提示

 connected to:mongodb://localhost/
 dropping: test.user
 3 document(s) imported successfully. 0 document(s) failed to import

# MongoDB 数据库操作

## 增

db.user.insert({"username":"sunsboy","age":29,"sex":"man"})

## 删

## 改

db.user.update({"name":"sunsboy1",{$set:{"age":29}}}); // 修改 name=sunsboy1 这条数据的 age 为 29
db.user.update({},{$set:{"age":666}},{multi:true}); // 修改 所有数据 的 age 为 666

## 查

db.user.find() // 查询所有数据
db.user.find({name: "sunsboy"}); // 查找带条件（在命令行中执行找不到匹配数据是没有反应的）
db.user.find({"userinfo.sex":"男"}); // 查找 对象下的某个 key 的数据
db.user.find({name: "sunsboy","title":"有没有那么一首歌"}); // 查询数据带多个条件
db.userfind({$or: [{"name":"sunsboy"},{"name":"sunsboy2"}]}); //{$or}:[...] 或者条件查询
db.user.find({$and:[{"age":{$gt:123}},{"age":{$lt:789}}]}); // 查询数据 {$and:[...]} and 条件
db.user.find({"age":{$gt:123}}); // 查找 age 大于 {$gt:123}  123 的数据
db.user.find({"age":{$lt:456}}); // 查询 age 小于 {$lt:456} 456 的数据
db.user.find().sort({"age": 1}); // 排序
db.user.find().sort({"name": -1}); // 排序
db.user.find().sort({"name": -1,"age": 1}); // 排序

# Mongodb 实战

[](http://mongodb.github.io/node-mongodb-native/3.4/quick-start/quick-start/)
[mongodb实战分享](https://blog.csdn.net/qq_41969358/article/details/87866971)
