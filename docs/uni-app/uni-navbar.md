# navbar 导航栏

pages.json 下 App 端 app-plus 的样式配置，配置编译到 App 平台时的特定样式

## app-plus

- [app-plus 样式](https://uniapp.dcloud.net.cn/collocation/pages.html#app-plus)

## titleNView 导航栏

- [titleNView 导航栏](https://uniapp.dcloud.net.cn/collocation/pages.html#app-titlenview)

``` json
// pages.json
{
  "pages": [{
    "path": "EventProcessActivity/EventProcessActivity",
    "style": {
     // #ifdef APP-PLUS
     "navigationStyle": "default",
     "navigationBarTitleText": "事件处理",
     // #endif
     "app-plus": {
      "titleNView": {
       "buttons": [{
        "color": "#1F83EC",
        "float": "right",
        "fontSize": "16",
        "text": "事件记录",
        "width": "100px"
       }]
      }
     }
    }
   }
  ]
}
```

在页面监听 导航栏 配置 的 titleNView button 的点击事件

``` js
export default {
  onLoad(props) {

  },
  //  // 点击 原生 导航栏 titleNView 配置的 button 事件
  onNavigationBarButtonTap(e) {
    console.log(e)
  }
}
```
