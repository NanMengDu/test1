<template>
  <!-- 爱好 -->
  <div class="swiper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in list">
          <img :src="item.imgs" :alt="item.title" />
        </div>
      </div>
      <!-- 控件 -->
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
      <div class="swiper-button-next swiper-button-white"></div>
    </div>
    <el-button style="margin-top:20px" @click="show3 = !show3">music</el-button>

    <div style="margin: 20px 0 0 20px;">
      <el-collapse-transition>
        <div v-show="show3">
          <div class="transition-box">
            <audio class="adio" controls>
              <source src="../audio/lsmgn.mp3" type="audio/mpeg">
            </audio>
            <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" src="//music.163.com/outchain/player?type=2&id=145455&auto=1&height=66"></iframe>
          </div>
          <div class="transition-box">
            <audio controls>
              <source src="../audio/haoxiang.mp3" type="audio/mpeg">
            </audio>
            <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" src="//music.163.com/outchain/player?type=2&id=87111&auto=1&height=66"></iframe>
          </div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data() {
    return {
      list: [
        { imgs: require("../img/书法1.jpeg") },
        { imgs: require("../img/书法3.jpeg") },
        { imgs: require("../img/游山玩水1.jpeg") },
        { imgs: require("../img/游山玩水2.jpeg") },
        { imgs: require("../img/游山玩水3.jpeg") },
        { imgs: require("../img/游山玩水4.jpeg") },
        { imgs: require("../img/my.jpg") },
        { imgs: require("../img/my2.jpg") },
        { imgs: require("../img/my3.jpg") },
      ],
      show3: true
    };
  },
  mounted() {
    //初始化轮播图
    var swiper = new Swiper(".swiper-container", {
      autoplay: 4000,
      loop: true,
      pagination: ".swiper-pagination",
      paginationClickable: true,
      prevButton: ".swiper-button-prev",
      nextButton: ".swiper-button-next",
    });
  },
};
</script>
<style scoped lang='less'>
.swiper {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.swiper-container {
  /* border: 1px solid; */
  width: 31.25vw;
  height: 22.8333vw;
  border-radius: 0.5208vw;
  margin-top: 1.5625vw;
}
/* 使轮播图片居中 */
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img {
  width: 100%;
}
.transition-box {
    margin-bottom: 10px;
    width: 35vw;
    height: 9vw;
    border-radius: 4px;
    text-align: center;
    color: #fff;
    box-sizing: border-box;
    margin-right: 20px;
    audio{
      display: none;
    }
  }
  
@media screen and (max-width: 500px) {
  .swiper-pagination,
  .swiper-button-prev,
  .swiper-button-next {
    display: none;
  }
  .swiper-container {
  width: 40.25vw;
  height: 60.8333vw;
  border-radius: 0.5208vw;
  margin-top: 1.5625vw;
}
.transition-box {
    width: 50vw;
    /* height: 10.2083vw; */
    background: transparent;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    box-sizing: border-box;
    audio{
    display: block;
      width: 100%;
    }
  }
  
  iframe{
    display: none;
  }
}
</style>