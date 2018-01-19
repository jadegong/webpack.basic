///
/// webpack生产环境的不同配置部分
///
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  devtool: 'source-map', // 开发环境中也使用source-map功能，方便定义错误所在
  // 避免在生产中使用 inline-*** 和 eval-***，因为它们可以增加 bundle 大小，并降低整体性能。
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    }), // 压缩js代码，删除明确未引用的模块
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }), // 指定环境，一些library与此变量关联，添加额外的日志和测试
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest'
    }),
  ]
});
