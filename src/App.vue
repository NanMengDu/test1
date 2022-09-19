<template>
  <div class="backimg">
    <router-view> </router-view>
  </div>
</template>
<script>
import './js/click-hw'
import "./js/click";
// import "./js/animation";
export default {};
</script>
<style lang='less' scoped>
// 去除页面滚动条
// ::-webkit-scrollbar {
//   width: 0 !important;
//   height: 0;
// }
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
}
</style>