
module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: 'localhost',
    port: 3000,
    https: false,
    hotOnly: false,
    proxy: null, // 设置代理
    before: app => {}
  }
}
