///
/// webpack开发环境的不同配置部分
///
const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
  devtool: 'inline-source-map', // 方便开发环境定义错误所在的具体源码文件
  devServer: { // webpack-dev-server 配置根目录
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});
