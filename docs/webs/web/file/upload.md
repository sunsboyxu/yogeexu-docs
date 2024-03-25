# 文件上传

- [分片上传功能](http://www.voidcc.com/project/el-upload-piecess)
- [el-upload-piecess](https://github.com/fashen007/el-upload-piecess)
- [大文件分片上传1](https://blog.csdn.net/weixin_44182162/article/details/109236287)
- [分片上传和断点续传](https://www.cnblogs.com/hubufen/p/14590994.html)
- [自定义文件上传2](https://www.jianshu.com/p/2eb91dd9096b)
- [el-upload 自定义上传](https://www.jianshu.com/p/24dee30a21de)

## 阿里云 oss

- [对象存储 OSS](https://help.aliyun.com/product/31815.html)
- [SDK](https://help.aliyun.com/document_detail/111263.html)

## 腾讯云 cos

- [SDK文档](https://cloud.tencent.com/document/product/436/6268)
- [对象操作](https://cloud.tencent.com/document/product/436/35649)

安装 cos-js-sdk-v5

``` js
npm instal cos-js-sdk-v5 --save
```

``` js
const cos = new COS({
 SecretId: '',
 SecretKey: ''
})

cos.putObject({
 Bucket: '存储桶名称',
 Region: '地区简写',
 Key: '文件路径+文件名',
 Body: 'file 文件对象',
 onProgress: function(progressData) {
  console.log(progressData)
 } 
}, function(err, data) { // 上传后的回调
 // 处理上传失败
 if(err) {
  console.log(err)
 }
 // 处理成功
 console.log(data)
})
```

## 七牛云

- [七牛云](https://www.qiniu.com/)
- [使用七牛云做图床](https://www.jianshu.com/p/43861cb8b121)

### 小程序后台地址配置

存储区域 区域代码 HTTPS 地址

- [华东 ECN](https://up.qbox.me)
- [华北 NCN](https://up-z1.qbox.me)
- [华南 SCN](https://up-z2.qbox.me)
- [北美 NA](https://up-na0.qbox.me)
