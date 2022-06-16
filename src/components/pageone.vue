<template>
  <div class="skill">
    <div>
      <h3>html/css</h3>
      <p>精通 HTML5+CSS3 布局、并能够结合 web 标准,精准还原设计图。</p>
      <p>精通flex布局,并能使用flex布局完成各种复杂页面的设计</p>
      <p>
        熟练使用常见的css框架,如element-ui,bootstrap熟练使用css预处理器:less,sass
      </p>
    </div>
    <div>
      <h3>javascript/typescript</h3>
      <p>精通原生 JavaScript,熟练掌握DOM、BOM 操作</p>
      <p>熟悉强类型语言typescript,并能使用vue3+typescript开发项目</p>
      <p>熟悉es6新增语法如let,const,箭头函数等</p>
      <p>熟练使用axios进行前后端交互</p>
      <p>了解过jquery的基本使用</p>
    </div>
    <div>
      <h3>Vue2/Vue3框架</h3>
      <p>熟练使用Vue常用指令,如v-if,v-for,v-on,v-model</p>
      <p>熟练使用Vue状态管理工具Vuex</p>
      <p>熟练使用Vue全家桶:vue-cli,vueRouter,Vuex,Axios搭建项目</p>
      <p>对Vue的核心思想响应式原理,组件系统有深刻的理解</p>
      <p>能熟练使用Vue2和Vue3进行项目的开发</p>
    </div>
    <div>
      <h3>微信小程序,跨平台框架uniapp</h3>
      <p>熟练使用微信开发者工具</p>
      <p>深刻理解小程序页面和组件的概念,并能快速搭建小程序界面</p>
      <p>熟练使用小程序自带的各种组件以及Api</p>
      <p>对小程序的常见配置比较了解</p>
    </div>
  </div>
</template>
<style lang="less" scoped>
.skill {
  display: grid;
  grid-template-columns: repeat(2, 24vw);
  // grid-template-rows: repeat(2,40vh);
  margin: 30px;
  gap: 30px;
  div {
    border-radius: 20px;
    background: #e3f4f9;
    box-shadow: 20px 20px 60px #c1cfd4, -20px -20px 60px #ffffff;
    display: flex;
    flex-direction: column;
    line-height: 25px;
    padding: 10px;
    // 渐变色
    background-image: linear-gradient(135deg, blue, purple,blue);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    P {
      flex: 1;
      
    }
  }
}
</style>