
module.exports = {
  publicPath: './',
  productionSourceMap: false,
  devServer: {
    port: 9000,
    open: false
    // proxy: {
    //   '/api': {
    //     target: '',
    //     changeOrigin: true
    //   }
    // }
  },
  css: {},
  configureWebpack: {
    resolve: {
      alias: {
        src: '@'
      }
    }
  }
}
