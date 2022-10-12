# markdown
- [markdown教程](https://www.runoob.com/markdown/md-tutorial.html)

## 图片展示
![docker](/images/servers/docker/docker1.png)

## 内容路径跳转
- [vue全局api](../vue/vue2/vue2-api.md)

## 表格语法
markdown 这种方式无法 合并单元，可以直接使用 table tr td 标签来处理

### 基本表格
用户名 | 年龄 | 出生地 | 职业
- | - | -
sunsboyxu | 18 | 安徽省黄山市 | 前端工程师
askacoco | 18 | 安徽省黄山市 | 前端工程师

用户名 | 年龄 | 出生地 | 职业
| - | - | - |
sunsboyxu | 18 | 安徽省黄山市 | 前端工程师
askacoco | 18 | 安徽省黄山市 | 前端工程师

### 表格内容对齐
- :-: 居中对齐
- :- 左对齐
- -: 右对齐
用户名 | 年龄 | 出生地 | 职业
:-: | -: | :- | -:
sunsboyxu | 18 | 安徽省黄山市 | 前端工程师
askacoco | 18 | 安徽省黄山市 | 前端工程师

### 其他技巧
- 表格单元格中使用 | 用 &#124; 会自动转换为 |
- 斜体: 内容两侧各加一个下划线，例 _sunsboyxu_
- 粗体: 内容两侧各加两个下划线，例 __askacoco__
- 表格内换行，使用 <br/>
用户名 | 年龄 | 出生地 | 职业
- | - | -
sunsboyxu | 18 | 安徽省&#124;黄山市 | 前端工程师
askacoco | 18 | 安徽省黄山市 | 前端工程师