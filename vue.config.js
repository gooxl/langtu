module.exports = {
// //   outputDir: 'dist',   //build输出目录
// //   assetsDir: 'assets', //静态资源目录（js, css, img）
// //   lintOnSave: false, //是否开启eslint
  devServer: {
// //       open: true, //是否自动弹出浏览器页面
// //       host: "http://127.0.0.1", 
// //       port: '8080', 
// //       https: false,   //是否使用https协议
// //       hotOnly: false, //是否开启热更新
      proxy: { //反向代理
//        // http://zyuanyuan.com/qunarApi/cities
        '/qunarApi': {//从qunarApi开始代码  //默认：将接口地址影射为/api 
            target: 'http://zyuanyuan.com', //API服务器的地址
            secure:true,  //如果是https接口，需要配置这个参数 
            changeOrigin: true, //是否跨域
// //             pathRewrite: { //如果接口本身没有api的路径 ，那么这里将发送到后端的请求重写为没有api的路径 
// //                 '^/api': '/'
// //             }
        }
    },
  }
}
