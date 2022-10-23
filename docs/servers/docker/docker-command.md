# docker镜像安装和命令

## docker 镜像安装

### 1 docker 安装 node  镜像

``` bash
// node最新镜像
docker pull node:latest
```

### 运行 node 镜像

``` bash
/**
 * -i 容器的标准输入保持打开
 * -t 让docker分配一个伪终端并绑定到容器的标准输入上
 * -v 挂载主机的目录
 * */
docker run -i -t node /bin/bash
```

![node图](/images/servers/docker/node1.png)

### vue-cli 的安装

``` bash
npm install @vue/cli -g
```

### 2 docker 安装 Nginx 镜像

- [docker安装 Nginx](http://www.bjpowernode.com/docker/1706.html)
- [Nginx 镜像库地址](https://hub.docker.com/_/nginx?tab=tags)

``` bash
docker pull nginx:latest
```

### 运行 Nginx 容器

``` bash
 /**
  * 参数说明：
  * --name nginx-test // 容器名称
  * -p 9000:80 // 端口进行映射，将本地 9000 端口映射到容器内部的 80 端口
  * -d 设置容器在在后台一直运行
  * */
 
 // 运行 Nginx 容器 
 docker run --name nginx-test -p 9000:80 -d nginx
```

![运行nginx容器](/images/servers/docker/run-nginx1.png)

### 3 docker 安装 mysql 镜像

在docker上安装mysql，并使用客户端工具链接Demo：
1、docker pull mysql:latest

2、docker run --name brxmysql -p 3333:3306 -d ‐e MYSQL_ROOT_PASSWORD=root ‐d mysql:latest

// tip: 如果想自定义配置，参考docker文档后:

只需要把自定义的mysql配置文件放在自定义的文件夹下（/conf/mysql），用命令挂载到/etc/mysql/conf.d 下皆可
docker run ‐‐name brxmysql ‐v /conf/mysql:/etc/mysql/conf.d ‐e MYSQL_ROOT_PASSWORD=root ‐d mysql:latest ‐‐character‐set‐
server=utf8mb4 ‐‐collation‐server=utf8mb4_unicode_ci

3、docker exec -it  brxmysql

4、mysql -uroot -p  

5、输入密码

6、进行授权

  mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%'WITH GRANT OPTION;

  mysql>FLUSH PRIVILEGES;

7、更改加密规则

  ALTER USER 'root'@'localhost' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER;

8、更新root用户密码

ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password';

9、刷新权限

flush privileges;

## docker 常用命令

- [docker 常用命令](https://docs.docker.com/engine/reference/commandline/docker/)

``` bash
 // 查看版本号
 docker version
 
 // 载入测试镜像测试    
 docker run hello-world 
 
 // 查看已经安装的 镜像 images
 docker images
 
 // 查看镜像可用版本
 docker search nginx
 
 // 安装 Nginx 最新版
 // 拉取官方的最新版本的镜像
 docker pull nginx:latest
 
 /**
  * 参数说明：
  * --name nginx-test // 容器名称
  * -p 9000:80 // 端口进行映射，将本地 9000 端口映射到容器内部的 80 端口
  * -d 设置容器在在后台一直运行
  * */
 
 // 运行 Nginx 容器 
 docker run --name nginx-test -p 9000:80 -d nginx
 
 // 查看所有的容器
 docker ps ‐a
 
 // 查看运行中的容器
 docker ps
 
 // 启动容器
 docker start 容器id
 
 // 停止运行中的容器
 docker stop 容器的id
 
 // 删除一个容器
 docker rm 容器id 
 4、docker ps
 
```
