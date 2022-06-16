// 引入vue框架
import Vue from 'vue'

// 引入根组件App
import App from './App.vue'
import router from "./router";



// 去掉生产环境
Vue.config.productionTip = false

// 创建vue实例，并挂载到id是app的容器上
new Vue({
  router,
  // 渲染
  render: h => h(App),
  /*以上是function(element){return element(App)}的简写形式
  当return后面是一行代码时，可简写成h => h(App)形式
  */
}).$mount('#app')