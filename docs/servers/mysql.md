# mysql

- [MySQL社区下载](https://dev.mysql.com/downloads/)
- [菜鸟教程-mysql](https://www.runoob.com/mysql/mysql-install.html)

## window 安装 mysql

- [mysql最新版本下载](https://dev.mysql.com/downloads/mysql/)
- [mysql@5.7下载](https://dev.mysql.com/downloads/mysql/5.7.html)
- [windows中安装配置MySQL 5.7.26](https://blog.csdn.net/syc000666/article/details/94484959)

::: warning 移动端触摸事件
点击 ZIP Archive 下的  Download -> 点击 'No thanks, just start my download.' 开始下载
:::

### 目录安装（D盘）

:star2: 将 zip 包解压到 D盘

- D:\mysql-5.7.28-winx64
- 在 D:\mysql-5.7.28-winx64，目录下 新建 my.ini 文件

### my.ini

``` bash
[client]
# 设置mysql客户端默认字符集
default-character-set=utf8
 
[mysqld]
# 设置3306端口
port = 3306
# 设置mysql的安装目录
basedir=D:\mysql-5.7.28-winx64
# 设置 mysql数据库的数据的存放目录，MySQL 8+ 不需要以下配置，系统自己生成即可，否则有可能报错
# datadir=D:\mysql-5.7.28-winx64\data
# 允许最大连接数
max_connections=20
# 服务端使用的字符集默认为8比特编码的latin1字符集
character-set-server=utf8
# 创建新表时将使用的默认存储引擎
default-storage-engine=INNODB
```

### 初始化 mysql

- D:\mysql-5.7.28-winx64\bin ，shift+鼠标右击，选择 在此处打开命令窗口

``` bash
// D:\mysql-5.7.28-winx64\bin
mysqld.exe --install
mysqld.exe --initialize

// 启动 mysql 服务
net start mysql
// 关闭 mysql 服务
net stop mysql
```

### 连接数据库

``` bash
// D:\mysql-5.7.28-winx64\bin
mysql -u root -p
```

- -h 主机名
- -u 用户名
- -p 密码

::: danger 第一次查看密码
在 mysql 安装目录下 D:\mysql-5.7.28-winx64\data 下，找到 .err 文件，并且打开该文件
[Note] A temporary password is generated for root@localhost: xxxxxxx
后面的就是 第一次的密码，输入改密码登录
:::

### 修改密码

``` bash
mysql>alter user 'root'@'localhost' identified by '新的密码';
// 退出，使用新密码重新登录
exit
```

### 查看数据库

``` bash
mysql>show databases;
```

### 创建数据库

``` bash
mysql>create database xxx;
```

### 使用数据库

``` bash
mysql>use 数据库名称;
```

### 创建新用户

``` bash
mysql>create user 'sunsboy'@'localhost' by '设置密码';
```

### 新用户登录

``` bash
D:\mysql-5.7.28-winx64\bin> mysql -h localhost -u sunsboy -p -密码
```

## 一些操作

[用命令创建MySQL数据库](https://www.cnblogs.com/jiangxiaobo/p/7089345.html)

## 可视化工具

- [MySQL Workbench使用图文教程](https://www.jianshu.com/p/c3dcd4d9ce69)
- [MySQL-Workbench使用](https://www.jianshu.com/p/bba859635ae4)
- [Navicat破解版以及注册码【转】](https://www.jianshu.com/p/2289694af171)
- [workbench中导入.sql文件！（导入数据库文件）](https://www.cnblogs.com/jpfss/p/10892639.html)

## 问题收录

启动MySQL报错:ERROR 2003 (HY000): Can't connect to MySQL server on 'localhost' (10061)

- [启动MySQL报错](https://blog.csdn.net/BigData_Mining/article/details/88344513)
