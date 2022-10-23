# docker 部署 vue 项目

## 1 本地创建 vue项目

``` bash
// 项目名称：vue-docker-demo
vue create vue-docker-demo
cd vue-docker-demo
yarn serve
```

![vue-docker-demo](/images/servers/docker/vue-docker-demo2.png)

运行 vue-docker-demo 项目

![vue-docker-demo](/images/servers/docker/vue-docker-demo3.png)

浏览器打开项目
![vue-docker-demo](/images/servers/docker/vue-docker-demo4.png)

## 2 启动 docker(docker-desktop)

docker-desktop 版本：v4.9.1

![vue-docker-demo](/images/servers/docker/vue-docker-demo1.png)

## 3 启动 nginx 镜像

::: warning nginx镜像未安装，请先安装

``` bash
// 安装最新版 nginx 镜像
docker pull nginx:latest
```

:::

## 4 运行：vue-nginx 的容器

### 一些常用指令

``` bash
docker run                 // 创建容器实例
docker images         // 查看所有镜像
docker container           // 查看当前正在运行的容器
docker container ls --all  // 查看所有容器
docker rmi 镜像名称         // 删除指定名称镜像             
docker rm 容器名称(或者id)  // 删除指定名称的容器实例，需要停止运行

/**
 * 运行容器中的命令，比如正在运行的容器包含linux类操作系统
 * 那么你可以执行类似以下的命令：
 * docker exec -it mysql_test /bin/bash
 * -it 则相当于打开一个tty终端与容器内部交互
 * /bin/bash是容器内/bin目录下的bash命令，在tty终端执行exit可以退出交互
 *  这里是运行mysql_test容器内的bash命令
 * ，mysql_test是容器名称，
 * */
docker exec

docker logs 容器名称       // 可以查看容器内应用运行日志，如果有打印的话
docker inspect 容器名称    // 可以查看容器的详细信息、网络设置、各种参数设定以及存放位置等
docker stop 容器名称       // 停止容器
docker start 容器名称      // 启动被停止的容器
docker restart 容器名称    //  重启容器

```

### 添加和删除 容器 和 cmd 命令窗口复制粘贴技巧

![vue-docker-demo](/images/servers/docker/vue-docker-demo5.png)
![vue-docker-demo](/images/servers/docker/vue-docker-demo6.png)
![vue-docker-demo](/images/servers/docker/vue-docker-demo7.png)

删除 容器 之前记得 停止容器的运行

``` bash
docker stop 容器名称 或者 容器id
```

运行：vue-nginx 的容器

``` bash
/**
 * 运行 vue-nginx 容器（容器名称自己随便定义）
 * 
 * 参数说明：
 * --name vue-nginx // 容器名称
 * -p 9000:80 // 端口进行映射，将本地 8000 端口映射到容器内部的 80 端口
 * -d 设置容器在在后台一直运行
 * nginx 镜像名称
 * */
docker run --name vue-nginx -d -p 8000:80 nginx
```

浏览器打开：localhost:8000，查看 nginx 是否运行成功

![vue-docker-demo](/images/servers/docker/vue-docker-demo8.png)

## 5 vue项目打包

``` bash
yarn build
```

## 6 自定义构建镜像

自定义构建镜像的时候，基于 Dockerfile 来构建，在项目根目录 新建 docker 文件夹 和 Dockerfile 部署配置文件，注意 Dockerfile 首字母大写

### Dockerfile 部署配置文件说明

``` js
// 该镜像是基于 nginx 镜像构建
FROM nginx

// 将项目根目录下 dist 文件夹下的所有文件复制到镜像中 /usr/share/nginx/html/ 目录下
COPY dist/ /usr/share/nginx/html/vue

// 将 nginx 目录下的 default.conf 复制到 etc/nginx/conf.d/default.conf
// 用本地的 default.conf 配置来替换 nginx 镜像里的默认配置
COPY default.conf /etc/nginx/conf.d/default.conf 
```

## 创建 nginx conf 配置文件

在 docker 文件夹下创建 Nginx 文件夹，该文件夹下新建文件 default.conf

### 构建名为 vue-docker-demo 的镜像

``` bash
// 注意：最后的 . 
docker build -f docker/Dockerfile -t vue-docker-demo .
```

## 7 运行容器
