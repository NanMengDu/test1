<template>
  <!-- 关于页面 -->
  <div class="box1">
    <h3>关于项目</h3>
    <div class="item">
      <div>
        <h4>特价商城</h4>
        <p>
          特价商城是一款商城类的应用,主要有首页,精选,购物车,我的四个模块,如今性价比成了购物的非常重要的因素,特价商城的宗旨就是为客户提供物美价廉的商品.
        </p>
        <h5>技术栈:Vue2+uniapp+Vuex</h5>
      </div>
      <div>
        <h4>后台管理系统</h4>
        <p>
          对公司产品及订单进行展示处理,主要包含登录、注册、退出、订单等模块，
        </p>
        <h5>技术栈:Vue2+element-ui+axios+Vuex</h5>
      </div>
      <div>
        <h4>音乐商城</h4>
        <p>一款小程序项目,主要包含首页、视频、我的模块</p>
        <h5>技术栈:小程序api,小程序组件</h5>
      </div>
      <div>
        <h4>游戏页面</h4>
        <p></p>
        <h5>技术栈:Vue3+element-ui+axios</h5>
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
    margin-bottom: 10px;
  }
}
.item {
  display: grid;
  grid-template-columns: repeat(2, 24vw);
  margin: 30px;
  gap: 30px;
  div {
    border-radius: 50px;
    background: #e3f4f9;
    box-shadow: 20px 20px 60px #117296, -20px -20px 60px #fdfafa;
    display: flex;
    flex-direction: column;
    line-height: 25px;
    padding: 10px;
    height: 180px;
    padding: 15px;
    // 渐变色
    background-image: linear-gradient(135deg, blue, purple, blue);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
}
</style>