<template>
  <div class="backimg">
    <!-- 动态图 -->
    <!-- <vue-particles
      class="login-background"
      color="#0e87d8"
      :particleOpacity="1"
      :particlesNumber="50"
      shapeType="polygon"
      :particleSize="6"
      linesColor="#0e87d8"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.8"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles> -->
    <router-view> </router-view>
  </div>
</template>
<script>
// import './js/click-hw'
import "./js/click";
// import "./js/animation";
export default {};
</script>
<style lang='less' scoped>
.backimg {
  background-image: url("https://img2.baidu.com/it/u=555227454,1852482860&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=388");
  background-size: cover;
  width: 100vw;
  height: 100vh;
  // 外边框塌陷
  &::before {
    display: block;
    content: "";
    overflow: hidden;
    visibility: visible;
  }
  // .login-background {
  //       background: linear-gradient(-180deg, #dcf2e6 0%, #ffffff 100%);
  //       width: 100%;
  //       height: 100%; /**宽高100%是为了图片铺满屏幕 */
  //       z-index: -1;
  //       position: absolute;
  //   }
}
</style>