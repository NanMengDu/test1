<template>
<div style="display:flex;flex-direction: column;align-items: center;">
  <h3>关于技能</h3>

  <div class="skill">
    <div>
      <h3>html/css</h3>
      <p>熟练掌握HTML/CSS，熟练使用flex布局，了解grid布局，了解HTML/CSS语义化标签及动画效果等，设计稿还原度98%;</p>
      <p>熟练使用Element-UI框架，了解BootStrap实现原理</p>
      <p>
        熟练使用CSS预处理器:less、sass
      </p>
    </div>
    <div>
      <h3>javascript/typescript</h3>
      <p>熟悉TypeScript强类型语言</p>
      <p>熟悉ES6语法，了解异步编程的三种方式</p>
      <p>熟练使用axios进行前后端交互，了解get请求和post请求的不同</p>
      <p>了解JQuery的基本使用</p>
    </div>
    <div>
      <h3>Vue2/Vue3框架</h3>
      <p>熟练使用Vue常用指令,如v-if,v-for,v-on,v-model</p>
      <p>熟练使用Vue状态管理工具Vuex</p>
      <p>熟练使用Vue全家桶:vue-cli,vueRouter,Vuex,Axios搭建项目</p>
      <p>对Vue的核心思想响应式原理,组件系统有深刻的理解</p>
      <p>了解Vue2和Vue3区别</p>
    </div>
    <div>
      <h3>微信小程序,跨平台框架uniapp</h3>
      <p>熟练使用微信开发者工具</p>
      <p>熟练使用小程序自带的组件及api</p>
      <p>熟练使用uniapp跨平台框架开发项目</p>
    </div>
  </div>
  </div>
</template>
<style lang="less" scoped>
.skill {
  display: grid;
  grid-template-columns: repeat(2, 28vw);
  // grid-template-rows: repeat(2,40vh);
  margin: 1.5625vw;
  gap: 1.5625vw;
  div {
    border-radius: 1.0417vw;
    background: #e3f4f9;
    box-shadow: 1.0417vw 1.0417vw 3.125vw #c1cfd4, -1.0417vw -1.0417vw 3.125vw #ffffff;
    display: flex;
    flex-direction: column;
    line-height: 1.3021vw;
    padding: .5208vw;
    // 渐变色
    background-image: linear-gradient(135deg, blue, purple,blue);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    h3{
      font-size: 2.0833vw;
    }
    P {
      flex: 1;
      font-size: .8333vw;
    }
  }
}
</style>