# Webpack Loader
## 处理 .css 文件
- npm install css-loader -D
- npm install mini-css-extract-plugin -D
[](https://github.com/webpack-contrib/mini-css-extract-plugin)
// css文件处理 和 压缩
``` js
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
module: {
	rules: [{
		text: /.css$/,
		use: [MiniCssExtractPlugin.loader, 'css-loader']
	}]
},
plugins: [
	new MiniCssExtractPlugin()
]
```

# 图片处理
[](https://github.com/webpack-contrib/url-loader)
- npm install url-loader -D (图片类型文件处理 loader)
- npm instal image-webpack-loader -D (图片压缩处理)
``` js
module: {
	rules: [{
		text: /\.(jpg|jpeg|png|gif)$/,
		use: {
			loader: 'url-loader',
			options: {
				// 打包时小于 limit(单位：bytes)，将编译成 base64 字符串
				// 大于 limit 的图片文件，需要使用 file-loader
				// 只需要安装 file-loader 即可
				// 1024 * 8 = 8196
				// 8kb
				limit: 8196,
				// [ext] 表示扩展名
				// images 目录，原图片名称的图片
				// name: 'images/[name].[ext]'
				// hash 取 8 位 
				name: 'images/[name].[hash:8].[ext]',
				// 也可以指定输入目录，name 上就不用写输入的目录路径
				// outputPath: 'images/'
			}
		},
		{
			loader: 'image-webpack-loader',
			options: {
				mozjpeg: { quality: 65 },
				optipng: { enabled: false },
				gifsicle: { interlaced: false },
				webp: { quality: 75 },
				pngquant: {
					quality: [0.65, 0.9],
					speed: 4
				}
			}
		}
	}]
}
```