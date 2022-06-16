// /* 关闭eslint语法检查 */
// module.exports = {
//     lintOnSave:false,
// }

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave:false,
  devServer: {
      host: '0.0.0.0',
    // https:true,
      port: 6103,
      client: {
        webSocketURL: 'ws://0.0.0.0:6103/ws',
      },
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
  },
  
  transpileDependencies: true
})
