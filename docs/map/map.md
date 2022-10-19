# 地图相关

## 高德地图

- [高德地图开放平台](https://lbs.amap.com/)
- [高德地图平台选择](https://lbs.amap.com/api)

腾讯地图：<https://lbs.qq.com/webApi/uriV1/uriGuide/uriWebMarker>
高德地图：<https://developer.amap.com/api/uri-api/guide/mobile-web/point>
百度地图：<http://lbsyun.baidu.com/index.php?title=uri/api/web>

``` js
switch(mapType) {
  case '腾讯地图':
    url = 'https://apis.map.qq.com/uri/v1/marker?marker=coord:' + lat + ',' +  lng +';addr:'+ address +';title:地址&referer=keyfree';
    break;
  case '高德地图':
    url = 'https://uri.amap.com/marker?position='+ lng + ',' + lat +'&name='+ address +'&callnative=1';
    break;
  case '百度地图':
    url = 'http://api.map.baidu.com/marker?location=' + lat + ',' +  lng +'&title=地址&content='+ address +'&output=html&src=webapp.reformer.appname&coord_type=gcj02';
    break;
  default:
    break;
}
```

## 浏览器打开地图

``` html
<a href="androidamap://poi?sourceApplication=dingtalk&keywords=阿里巴巴">打开安卓高德地图</a>
<a href="iosamap://poi?sourceApplication=dingtalk&keywords=阿里巴巴">打开iOS高德地图</a>
<a href="baidumap://map/place/search?query=阿里巴巴">打开百度地图</a>
<a href="qqmap://map/search?keyword=阿里巴巴">打开腾讯地图</a>
```
