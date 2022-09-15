<template>
  <!-- 关于页面 -->
  <div class="box1">
    <h3>关于项目</h3>
    <div class="item">
      <div>
        <h4>选购商城</h4>
        <p>
          选购商城是一款商城类的应用,进行本地存储封localStorage的封装，项目的搭建，对各个页面进行布局处理，通过VueRouter实现页面跳转，利用Vuex进行全局状态管理等
        </p>
        <h5>技术栈:Vue2 Vuex VueRouter axios ElementUI</h5>
      </div>
      <div>
        <h4>货行后台管理系统</h4>
        <p>
          对公司产品及订单进行展示处理,项目中利用封装localStorage实现本地存储功能，采用分装axios请求，
          调取接口数据，通过Vuex全局状态管理特性实现侧边栏的显示隐藏，实现面包屑导航功能，
          通过VueRouter实现各个页面的跳转，利用ElementUI组件优化页面样式，借用echarts图表库绘制销量，库存图等
        </p>
        <h5>技术栈:Vue2 Vuex VueRouter axios ElementUI echarts</h5>
      </div>
      <div>
        <h4>晴美微商城小程序</h4>
        <p>项目中利用到小程序组件swiper本地存储set/getStorage判断是否需要登录，
          采用promise结合async/await封装利用request请求接口，利用navigateTo完成页面跳转，
          利用scroll-view组件实现可滚动视图区域，利用单选功能实现分类列表。</p>
        <h5>技术栈:微信开发者工具 小程序api组件等</h5>
      </div>
      <div>
        <h4>船货行小程序</h4>
        <p>项目中利用到小程序组件swiper本地存储set/getStorage判断是否需要登录，
          采用promise结合async/await封装利用request请求，利用navigateTo完成页面跳转。</p>
        <h5>技术栈:微信开发者工具 小程序api组件等</h5>
      </div>
    </div>
  </div>
</template>
<style lang='less' scoped>
.box1 {
  // display: flex;
  // flex-direction: column;
  width: 100%;
  h3 {
    text-align: center;
    margin-bottom: .5208vw;
  }
}
.item {
  display: grid;
  grid-template-columns: repeat(2, 24vw);
  margin: 1.5625vw;
  gap: 1.5625vw;
  div {
    border-radius: 2.6042vw;
    background: #e3f4f9;
    box-shadow: 20px 20px 60px #117296, -20px -20px 60px #fdfafa;
    display: flex;
    flex-direction: column;
    line-height: 1.3021vw;
    padding: .5208vw;
    // height: 190px;
    padding: .7813vw;
    // 渐变色
    background-image: linear-gradient(135deg, blue, purple, blue);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
}
</style>