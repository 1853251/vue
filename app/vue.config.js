//设置路径
const path = require("path")
function resolve(dir){
  return path.join(__dirname,dir)
}
module.exports = {
  //修改时不进行lint检查
  lintOnSave:false,
  publicPath: '/',
  devServer: {
    open: true,
    host:"localhost",
    port: 8080,
    https: false,
    proxy: {
      '/api': {
        target: 'http://47.93.255.191:2021',//http://localhost:52472
        ws:true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  //webpack一些配置
  configureWebpack:{
    resolve:{
      //匹配拓展名
      extensions:['.js','.vue','.json','.css'],
      //起别名
      alias:{
        "@":resolve("src"),
        "views":resolve("src/views"),
        "assets":resolve("src/assets"),
        "components":resolve("src/components"),
        "utils":resolve("src/utils"),
      }
    }
  }
}
