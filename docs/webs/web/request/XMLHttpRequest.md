# XMLHttpRequest 介绍

[![1.png](https://pic.jitudisk.com/public/2022/06/28/f1abc4fe64a55.png)](https://pic.jitudisk.com/public/2022/06/28/f1abc4fe64a55.png)

![XMLHttpRequest](https://mmbiz.qpic.cn/mmbiz_png/crZicD08ZoNcbvX53FsuAfjFDhdTtHkFOAvnnb5jDhicu27RHW3icKdJffqiaBgXMVxiaZqTibYvlJ8RJZVr4sjWBPZQ/0?wx_fmt=png)

XMLHttpRequest（XHR）对象用于与服务器交互, 通过 XMLHttpRequest 可以在不刷新页面的情况下请求特定 URL，获取数据
这允许网页在不影响用户操作的情况下，更新页面的局部内容，XMLHttpRequest 可以用于获取任何类型的数据，而不仅仅是 XML
它甚至支持 HTTP 以外的协议（包括 file:// 和 FTP），可能受到更多出于安全等原因的限制，该造函数用于初始化一个 XMLHttpRequest 实例对象，
在调用下列任何其他方法之前，必须先调用该构造函数，或通过其他方式，得到一个实例对象，继承了 XMLHttpReuqestEventTarget 和 EventTarger 的属性，
在调用 send() 向服务器发送请求之前，必须至少调用 open() 来初始化这个对象

- [XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)

``` js
// 很多属性可能只能在调用 xhr.open() 方法之后，且在调用 xhr.send() 方法之前设置
// 所以把 xhr.open() 写在前面比较可靠，避免出现一些错误
const url = 'https://xxx/api/list'
const xhr = new XMLHttpRequest()
xhr.open('GET', url, true) // true 表示 异步请求

xhr.onload = function(res) {
 console.log(res)
}

xhr.send(null)
```

## XMLHttpRequest 的同步和异步

XMLHttpRequest 支持同步和异步请求，这点比较重要
但是，一般来说，出于性能原因，异步请求应优先于同步请求，同步请求阻止代码的执行，这会导致屏幕上出现 '冻结' 和 无响应 的用户体验

- [具体查看](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests)
- [XMLHttpRequest-同步和异步请求](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests)

### XMLHttpRequest 属性介绍

- readyState
- response
- responseType
- responseText
- responseURL
- responseXML
- status
- statusText
- timeout
- upload
- withCredentials
- chanel
- mozAnon
- mozBackgroundRequest
- mozSystem
- msCaching

### xhr 只读属性

**readyState** 属性说明

``` js
xhr.readyState
/* 返回一个 XMLHttpRequest 代理当前所处的状态。一个 XHR 代理总是处于下列状态中的一个
可通过 xhr.onreadystatechange 方法 来监听，readyState 变化
*/

```

UNSENT | OPENED | LOADING | HEADERS_RECEIVED | UDONE 在 XMLHttpReuqest 的原型上可以查看到

``` js
console.log(XMLHttpReuqest, 'XMLHttpReuqest--')
console.log(XMLHttpReuqest.prototype, 'XMLHttpReuqest-prototype-')
console.log(XMLHttpReuqest.UNSENT, 'XMLHttpReuqest.UNSENT-') // 0
console.log(XMLHttpReuqest.OPENED, 'XMLHttpReuqest.OPENED-') // 1
console.log(XMLHttpReuqest.HEADERS_RECEIVED, 'XMLHttpReuqest.HEADERS_RECEIVED-') // 2
console.log(XMLHttpReuqest.LOADING, 'XMLHttpReuqest.LOADING-') // 3
console.log(XMLHttpReuqest.DONE, 'XMLHttpReuqest.OPENED-') // 4
const xhr = new XMLHttpRequest()
console.log(xhr, 'xhr--')
console.log(xhr.UNSENT) // 0
```

**readyState** 状态参考及说明
状态码 | 状态 | 描述
| - | - | - |
0 | UNSENT | XMLHttpRequest 代理已被创建， 但尚未调用 open() 方法
1 | OPENED | xhr.open() 方法已经调用，在这个状态中，可以通过  setRequestHeader() 方法来设置请求的头部，然后调用 xhr.send() 方法来发起请求，注意 setRequestHeader() 需要在 xhr.open() 和 xhr.send 之前 设置
2 | HEADERS_RECEIVED | send() 方法已经被调用，响应头已经被接收
3 | LOADING | 请求正在进行 responseText 属性已经返回部分数据
4 | DONE | 请求完成，返回全部的数据

**response** 属性说明

``` js
xhr.responese
/* 返回响应的正文
返回的类型为：ArrayBuffer、Blob 、 Document、JavaScript Object 或 DOMString 中的一个
具体返回哪种类型取决于 responseType 的定义，如 下载文件时：xhr.responseType='blob'
注意：
    responseType 的设置，要在调用 xhr.open() 初始化请求之后调用
 并且要在调用 xhr.send() 发送请求到服务器之前调用
--------------------------------------------------------------------------------
如果请求 尚未完成 或 未成功，则取值是 null
当 读取文本 数据时，如果将 responseType 的值设置成 "text" 或空字符串（""）
当请求状态 readyState 处于 3 LOADING 时，response 包含到目前为止该请求已经取得的内容
当请求状态 readyState 变成 4 DONE 时就会获取 response，
可以在 onreadystatechange方法中，将其传递给 callback(xhr.response) 回调函数 
*/  
```

``` js
const url = 'https://xxx.com/xxx.html'
function callback(res) {
 console.log(res)
}
function getContent(callback) {
 const xhr = new XMLHttpRequest()
 xhr.open('GET', url)
 xhr.onreadystatechange = function() {
  if(xhr.readyState === 4) {
   callback && callback(xhr.response)
  }
 }
 xhr.send()
}
getContent(callback)
```

**responseText** 属性说明

- [DOMString说明](https://developer.mozilla.org/zh-CN/docs/conflicting/Web/JavaScript/Reference/Global_Objects/String_6fa58bba0570d663099f0ae7ae8883ab)

``` js
xhr.responseText
/* 取值：DOMString
请求被发送后，从服务器端返回的纯文本的值
当 DOMString 为 null (即 responseText: null) 时，表示请求失败了
当 DOMString 为 "" (即 responseText: "") 时，表示请求为调用 xhr.send()
在发送请求的过程中，尽管请求未结束，responseText 的返回值是当前从后端返回的内容
可以在 onreadystatechange 和 onprogress 中打印 实例的 xhr 查看日志
当 请求状态 reayState，变为 4 - DONE 时，且 status - 200时，responseText 是后端返回的全部数据
*/
```

**responseURL** 属性说明

``` js
xhr.responseURL
/*返回请求响应的 序列化 URL
如果 URL 带有锚点，URL # 后面的内容会被删除
如果 URL 有重定向，responseURL 的值会是重定向后的最终 URL
*/
```

**responseXML** 属性说明

- [Document接口](https://developer.mozilla.org/zh-CN/docs/Web/API/Document)

``` js
xhr.responseXML
/*返回一个包含请求检索的 HTML 或 XML 的 Document
默认是当作 "text/xml" 来解析，可以同时在 HTML 和 XML 中工作
如果请求未成功，尚未发送，或者检索的数据无法正确解析为 XML 或 HTML，则 responseXML 的值为 null
xhr.responseType 设置为 "document"时，并且请求已异步执行时，响应将被当作 "text/html" 来解析
xhr.responseType 既不是 "document" 也不是空字符串，接收的数据应是 XML 或 HTML

如果服务器没有明确指出 Content-Type 头是 "text/xml" 还是 "application/xml"
可以使用 xhr.overrideMimeType() 强制 XMLHttpRequest 解析为 XML

Document 中包含从 XMLHttpRequest 中收到的 HTML 节点或解析后的 XML 节点
也可能是在没有收到任何数据或数据类型错误的情况下返回的 null
*/
```

**status** 属性说明

- [HTTP 响应状态码](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status)

``` js
xhr.status
/* 返回了 XMLHttpRequest 请求响应中的数字状态码
status 的值是一个无符号短整型，在请求完成前，status 的值为 0
如果 XMLHttpRequest 请求出错，浏览器返回的 status 也为 0
status 码是标准的 HTTP 响应状态码
status 200 代表一个成功的请求
如果服务器响应中没有明确指定 status 码，XMLHttpRequest.status 将会默认为 200
*/
```

``` js
const url = 'https://xxx.com/api/list'
const xhr = new XMLHttpRequest()
xhr.open('GET', url, true)
xhr.onprogress = function () {
  console.log('LOADING', xhr.status)
}
xhr.onload = function () {
  console.log('DONE', xhr.status);
}
xhr.send(null)

/**
 * 结果:
 * UNSENT（未发送）0
 * OPENED（已打开）0
 * LOADING（载入中）200
 * DONE（完成）200
 */
```

**statusText** 属性说明

``` js
xhr.statusText
/*返回了XMLHttpRequest 请求中，由服务器返回的一个 DOMString 类型的文本信息
这则信息中也包含了响应的数字状态码
不同于用数字来表示 xhr.status 的响应状态码
xhr.statusText 这个属性包含了返回状态对应的文本信息，例如 "OK" 或是 "Not Found"
如果，请求状态 xhr.readyState 的值为 0-UNSENT 或者 1-OPENED，则 xhr.statusText属性的值将会是一个空字符串
如果，服务器未明确指定一个状态文本信息，则 xhr.statusText 的值将会被自动赋值为 "OK"
*/
```

``` js
const url = 'https://xxx.com/api/list'
const xhr = new XMLHttpRequest()
console.log('请求状态 readyState: 0-UNSENT', xhr.statusText)

xhr.open('GET', url, true);
 console.log('请求状态 readyState: 1-OPENED', xhr.statusText)
xhr.onprogress = function () {
  console.log('请求状态 readyState: 3-LOADING', xhr.statusText)
}
xhr.onload = function () {
  console.log('请求状态 readyState: 4-DONE', xhr.statusText)
}

xhr.send(null);

/**
 * 结果:
 * 0 UNSENT
 * 1 OPENED
 * 3 LOADING OK
 * 4 DONE OK
 */
```

**upload** 属性说明

- [XMLHttpRequestEventTarget](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequestEventTarget)

XMLHttpRequestEventTarget 是用于描述事件处理程序的接口，你可以在一个用于处理 XMLHttpRequest 请求事件的对象中使用该事件处理程序，如 onload、ontimeout

``` js
xhr.upload
/* xhr.upload 属性返回一个 XMLHttpRequestUpload 对象，用来表示上传的进度

注意：
XMLHttpRequestUpload 是不透明的，但是作为一个 XMLHttpRequestEventTarget 事件处理程序，
可以通过对其绑定事件来追踪它的进度，如 onprogress
*/
```

### **xhr.upload** 对象上事件监听器

事件名称 | 事件描述
| - | - |
onloadstart | 获取开始
onprogress | 数据传输进行中
onabort | 获取操作终止
onerror | 获取失败
onload | 获取成功
ontimeout | 获取操作在用户规定的时间内未完成
onloadend | 获取完成（不论成功与否）

### xhr 可定义属性

**timeout** 属性说明

- [在异步请求中使用 timeout](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/timeout)

``` js
// 单位：毫秒
xhr.timeout = 5000

/*无符号长整型数，代表着一个请求在被自动终止前所消耗的毫秒数
请求的最大请求时间（毫秒），若超出该时间，请求会自动终止，默认值为 0，意味着没有超时
当超时发生后，会触发 xhr.ontimeout 事件
在 IE 中，超时属性可能只能在调用 xhr.open() 方法之后且在调用 send() 方法之前设置
不能在 window 中，给同步请求设置超时

超时并不应该用在全局文档环境的同步 XMLHttpRequests 请求中
否则将会抛出一个 InvalidAccessError(无效访问错误) 类型的错误
*/
```

### 全局文档环境(document environment)

- [document-environment的 HTML 规范](https://html.spec.whatwg.org/multipage/webappapis.html#document-environment)
当 JavaScript 所处的全局环境为 window 或 iframe 时，这种环境被称为全局文档环境
全局的文档环境处于所有环境的顶层，即没有更外层的环境

``` js
const xhr = new XMLHttpRequest()
console.log(xhr)
xhr.open('GET', './source/test-180M.zip', true)
xhr.responseType = 'blob'
xhr.addEventListener('readystatechange', () => {
 console.log('请求状态发生变化~')
 console.log(xhr)
})
xhr.addEventListener('timeout', () => {
 console.log('网络请求超时~')
 console.log(xhr)
 console.log('-------------------')
 console.log(alert('网络请求超时'))
})
xhr.addEventListener('load', () => {
 console.log('请求完成：xhr-', xhr)
})
xhr.timeout = 200
xhr.send(null)
```

**responseType** 属性说明

- [responseType参考](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/responseType)

``` js
xhr.responseType = 'blob'
/* 响应类型 是一个枚举字符串值，用于指定响应中包含的数据类型
如果将 responseType 的值设置为空字符串，则会使用 text 作为默认值
可定义类型: '' | arraybuffer | blob | document | json | text | ms-stream */
```

**withCredentials** 属性说明

``` js
xhr.withCredentials
/* Boolean 类型，默认值：false
表示是否应使用 cookie、Authorization Headers (头部授权) 或者 TLS 客户端证书等
其它客户端证书或凭据进行跨站点（cross-site Access-Control）访问控制请求
*/
```

- 1 永远不会影响到同站点的请求，在同一个站点下使用 withCredentials 属性是无效的，对同站点请求没有影响
- 2 表示是否应使用 cookie、Authorization Headers (头部授权) 或者 TLS 客户端证书等其它客户端证书或凭据进行跨站点（cross-site Access-Control）访问控制请求

- 3 在发送其它域名站点下的 XMLHttpRequest 请求之前，未设置 withCredentials 为 true时，那么就不能在当前域名下设置 Cookie 值，而如果通过设置 withCredentials 为 true 获得的第三方 Cookies将会依旧享受同源策略，因此不能被通过 document.cookie 或者从头部相应请求的脚本等访问

- 4 不同站点的 XMLHttpRequest 响应，不管其自己的站点 Access-Control-Header 设置什么值，都无法为它自身站点设置 Cookie 值，除非它在请求之前将 withCredentials 设为 true

### 非标准属性

**channel** 属性说明

``` js
xhr.channel
/* 创建请求时 channel 是一个被对象使用的 nsIChannel
   如果管道（channel）还没被创建的话，它的值是 null
   在一个 multi-part 请求案例中，它是初始化的管道，不是 multi-part 请求中的不同部分 */
```

**mozAnon** 属性说明

``` js
 xhr.mozAnon
/* 布尔类型，如果这个变量为真，则这次请求将不携带 Cookies 或头部认证信息来发送 */
```

**mozBackgroundRequest** 属性说明

``` js
xhr.mozBackgroundRequest
/* 布尔对象，表示 object 是否为后台的服务请求
如果为 true，则不会将任何加载组与请求关联，并且不会向用户显示安全对话框
请求失败时通常会显示安全对话框（例如身份验证或错误证书通知）
!!!注意：
 Web 内容无法使用此方法。它需要提升权限才能访问
 该属性必须在调用 open() 之前设置 */ 
```

**mozSystem** 属性说明

``` js
xhr.mozSystem
/* 布尔类型，如果它被设置为 true，那么在请求时就不会强制要求执行同源策略（Same Origin Policy）*/
```

**msCaching** 属性说明

``` js
xhr.msCaching
/* 指定使用 XMLHttpRequest 下载的流数据是否缓存到磁盘
注意:
 此功能是非标准的，不在标准轨道上
 不要在面向 Web 的生产站点上使用它：它不适用于每个用户
 实现之间也可能存在很大的不兼容性，并且行为可能会在未来发生变化 */
```

### xhr 方法说明

``` js
const xhr = new XMLHttpRequest()
```

**xhr.open**方法说明

``` js
xhr.open()
/*初始化一个请求。该方法要从 javascript 代码使用
从原生代码初始化一个请求，使用 openRequest() 替代
为已激活的请求调用 xhr.open()，或者 xhr.open() | openRequest() 已被调用，相当于调用abort()
*/
```

语法：xhr.open(method, url, async, user, password)

参数说明：

**参数**   | 参数说明
:-: | :-
method | 要使用的 HTTP 方法，比如 GET、POST、PUT、DELETE、等。对于非 HTTP(S) URL 被忽略
url | 发送请求的 URL
_async(可选)_ | 可选的布尔参数，默认为 true，表示是否异步执行操作，如果 true，已完成事务的通知可供事件监听器使用，如果 multipart 属性为 true 则这个必须为 true，否则将引发异常，如果值为 false，xhr.send() 方法直到收到答复前不会返回
**user(可选)** | 可选用户名，可用于认证；默认为 null
password(可选) | 可选的密码，可用于认证，默认为 null

**xhr.abort()** 方法说明

``` js
xhr.abort()
/* 如果该请求已被发出，使用 xhr.abort() 方法将终止该请求
当一个请求被终止时，它的 xhr.readyState 将被置为 XMLHttpRequest.UNSENT (0)
并且请求的 status 也置为 0
*/
```

``` js
let xhr;
let btnLogin = document.getElementById('btn-login')
btnLogin.addEventListener('click', () => {
 xhr ? xhr.abort() : loginApi
})

function loginApi() {
 const xhr = new XMLHttpRequest()
 xhr.open('GET','http://xxx.com/api/login', true)
 xhr.onloadend = function() {
  xhr = null
 }
 xhr.send(null)
 return xhr
}
```

**xhr.send()** 方法说明

- [XMLHttpRequest.send()](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/send)

``` js
xhr.send()
/* 用于发送 HTTP 请求
如果是异步请求（默认为异步请求），则此方法会在请求发送后立即返回
如果是同步请求，则此方法直到响应到达后才会返回
如果没有使用 setRequestHeader() 方法设置 Accept 头部信息，则会发送带有 "*/*" 的 Accept 头部
xhr.send() 方法接受一个可选的参数，其作为请求主体；如果请求方法是 GET 或者 HEAD，则应将请求主体设置为 null
注意：
不要使用一个简单的 ArrayBuffer 对象作为参数，ArrayBuffer 已经不再是 AJAX 规范的一部分，请改用 ArrayBufferView
*/
```

语法：
XMLHttpRequest.send(body)

参数说明

参数 | 参数说明
| -- | - |
body数据请求体 | 在 XHR 请求中要发送的数据体，可以是：1 可以为 Document, 在这种情况下，它在发送之前被序列化 2 为 XMLHttpRequestBodyInit，可以是 Blob, BufferSource, FormData, URLSearchParams, 或者 USVString 对象

**xhr.setRequestHeader()** 方法说明

- [禁止修改的请求头](https://developer.mozilla.org/zh-CN/docs/Glossary/Forbidden_header_name)
- [禁止修改的响应头](https://developer.mozilla.org/zh-CN/docs/Glossary/Forbidden_response_header_name)

``` js
xhr.setRequestHeader()
/*设置 HTTP 请求头部的方法
此方法必须在 xhr.open() 方法和 xhr.send() 之间调用
如果多次对同一个请求头赋值，只会生成一个合并了多个值的请求头
如果没有设置 Accept 属性，则此发送出 xhr.send() 的值为此属性的默认值：*/*

安全起见，有些请求头的值只能由 user agent 设置: 禁止修改的请求头 和 禁止修改的响应头

一些自定义 header 属性进行跨域请求时
可能会遇到 "not allowed by Access-Control-Allow-Headers in preflight response"
可能需要在你的服务端设置 "Access-Control-Allow-Headers"
如：post 请求中 header 携带 token
*/
```

语法：
xhr.setRequestHeader(header, value)

参数 | 参数说明
| - | - |
header | 属性的名称
value | 属性值

**xhr.getResponseHeader()** 方法说明

``` js
xhr.getResponseHeader()
/*返回包含指定响应头文本的字符串
如果在返回的响应头中有多个一样的名称，那么返回的值就会是用逗号和空格将值分隔的字符串
getResponseHeader() 方法以 UTF 编码返回值。搜索的报文名是不区分大小写的
*/
```

语法：

``` js
var useHeader = xhr.getResponseHeader(name)
```

参数 | 参数说明
| - | - |
name | 字符串，表示要返回的报文名称

返回值：
报文值，如果连接未完成，响应中不存在报文名称，或者被 W3C 限制，则返回 null

``` js
const allowHeader = 'xxx'
const xhr = new XMLHttpRequest()
xhr.open("GET", "somefile.txt", true)

xhr.onreadystatechange = function() {
  if(this.readyState == this.HEADERS_RECEIVED) { // 如果 readyState 表示响应头已返回
  // 获取请求，响应头的 Content-Type
    const contentType = xhr.getResponseHeader("Content-Type")
    if(contentType != allowHeader) { // 设置的预期值
      xhr.abort() // 终止请求
    }
  }
}

xhr.send()
```

**xhr.getAllResponseHeaders()** 方法说明

``` js
xhr.getAllResponseHeaders()
/*返回所有的响应头
以 CRLF 分割的字符串，或者 null 如果没有收到任何响应
注意： 对于复合请求（ multipart requests ），这个方法返回当前请求的头部，而不是最初的请求的头部
*/
```

- CR = Carriage Return，回车符号（\r，十六进制 ascii 码为 0x0D，十进制 ascii 码为 13），用于将鼠标移动到行首，并不前进至下一行
- LF = Line Feed，换行符号（ \n, 十六进制 ascii 码为 0x0A，十进制 ascii 码为 10）
- 紧邻的 CR 和 LF（组成 CRLF，\r\n，或十六进制 0x0D0A）将鼠标移动到下一行行首

``` js
/*
// 返回的 headers
accept-ranges: bytes\r\n
cache-control: public, max-age=0\r\n
connection: keep-alive\r\n
content-length: 91493962\r\n
content-type: application/zip\r\n
date: Tue, 28 Jun 2022 02:02:57 GMT\r\n
etag: W/"574164a-17c9d0f4e79"\r\n
keep-alive: timeout=5\r\n
last-modified: Wed, 20 Oct 2021 09:36:38 GMT\r\n
x-powered-by: Express\r\n
x-sent: true\r\n
x-timestamp: 1656381777073\r\n
*/
const xhr = new XMLHttpRequest()
xhr.open('GET', './source/test-10M.zip', true)
xhr.addEventListener('load', () => {
 const headersMap = {}
 const allHeaders = xhr.getAllResponseHeaders()
 console.log(allHeaders)
 const headersArr = allHeaders.trim().split(/[\r\n]+/)
 console.log(headersArr)
 headersArr.forEach(item => {
  const connectStr = ': '
  const parts = item.split(connectStr)
  const header = parts.shift() // 删除数组第一项，返回第一项的值，会改变原数组
  headersMap[header] = parts.join('')
 })
 console.log(headersMap)
 console.log('Content-Type:' + headersMap['content-type'])
})
xhr.send()
```

**xhr.overrideMimeType()** 方法说明

- [MIME Type参照表](https://www.iana.org/assignments/media-types/media-types.xhtml)

``` js
xhr.overrideMimeType(mimeType)
/*指定一个 MIME 类型用于替代服务器指定的类型，使服务端响应信息中传输的数据按照该指定 MIME 类型处理
例如强制使流方式处理为"text/xml"类型处理时会被使用到，即使服务器在响应头中并没有这样指定
此方法必须在 xhr.send() 方法之前调用方为有效

如果服务器没有指定一个 Content-Type 头，XMLHttpRequest 默认 MIME 类型为"text/xml"
如果接受的数据不是有效的 XML，将会出现格”格式不正确“的错误
通过调用 overrideMimeType() 指定各种类型来避免这种情况
*/
```

语法：
xhr.overrideMimeType(mimeType)

参数 | 参数说明
| - | - |
mimeType | 指定具体的 MIME 类型去代替有服务器指定的 MIME 类型. 如果服务器没有指定类型，那么 xhr 将会默认为 "text/xml"

**xhr.msCachingEnabled()** 方法说明
这个是一个 非标准属性方法，不要在站点上使用它

``` js
xhr.msCachingEnabled()
/*获取 XMLHttpRequest 的当前缓存状态
浏览器兼容性，此专有方法特定于 IE
返回值：布尔值
如果为 true，则 XMLHttpRequest 被缓存到磁盘
如果为 false，则不写入磁盘
*/
```

### 事件处理器

作为 XMLHttpRequest 实例的属性之一，所有浏览器都支持 onreadystatechange，
可以使用 xhr.onload 进行事件的监听，也可以使用供标准的监听器 xhr.addEventListener('load', fn, false) 来监听

事件名称 | 事件作用
 :-: | :-:
onabort | 当请求停止时触发，如调用 xhr.abort()
onerror | 当请求遇到错误时触发
onloadstart | 当程序开始加载时，loadstart 事件将被触发，这个事件可以被 xhr 调用，也适用于 img 和 video 元素
onload | 当一个 xhr 请求完成的时候会触发
onloadend | loadend 事件总是在一个资源的加载进度停止之后被触发 (例如，在已经触发 “error”，“abort” 或 “load” 事件之后)。这适用于 xhr 调用，以及 img 或 video 之类元素的内容
onprogress | 在请求接收到数据的时候被周期性触发
onreadystatechange | 只要 readyState 属性发生变化，就会调用相应的处理函数，这个回调函数会被用户线程所调用。xhr.onreadystatechange 会在 xhr 的readyState 属性发生改变时触发 readystatechange 事件的时候被调用
ontimeout | 当一个请求超过预定时间到期而终止时，会触发 timeout 事件

``` js
/**
 * 可以用 xhr.onreadystatechange = function() { ... } 的写法
 * 可以用 xhr.onprogress = function() { ... } 的写法
 * xhr.addEventListener('readystatechange', () => {} 不带 on
 * xhr.addEventListener('progress', () => {} 不带 on
 * */
const xhr = new XMLHttpRequest()
xhr.open('GET', './source/test-10M.zip', true)
xhr.responseType = 'blob'
console.log(xhr)
console.log('reayState:' + xhr.readyState)
xhr.addEventListener('readystatechange', () => { console.log('请求响应状态发生变~reayState:' + xhr.readyState) })
xhr.addEventListener('progress', () => { console.log('请求接收到的数据~') })
xhr.addEventListener('timeout', () => { console.log('网络请求超时~') })
xhr.addEventListener('abort', () => { console.log('请求中止了~') })
xhr.addEventListener('error', () => { console.log('请求出错了~') })
xhr.addEventListener('loadstart', () => { console.log('请求开始了~') })
xhr.addEventListener('load', () => { console.log('请求完成了~') })
xhr.addEventListener('loadend', () => { console.log('请求加载进度停止~') })
xhr.send(null)
```

当一个 XMLHttpRequest 请求被 abort() 方法取消时，其对应的 readystatechange 事件不会被触发
