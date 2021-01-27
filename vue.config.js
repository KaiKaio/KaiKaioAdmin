const { name } = require('./package')

module.exports = {
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    open: process.platform === 'darwin',
    host: 'localhost',
    port: 8081,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {}
  },
  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: 'umd', // 把微应用打包成 umd 库格式
      jsonpFunction: `webpackJsonp_${name}`
    }
  }
}
