<template>
  <div>
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
    </div>

    <!-- 音乐 -->

    <div class="musicBtn">
      <el-button @click="show3 = !show3">music</el-button>
      <el-collapse-transition>
        <div v-show="show3" class="grid">
          <!-- 留什么给你 -->
          <div class="transition-box">
            <iframe
              frameborder="no"
              border="0"
              marginwidth="0"
              marginheight="0"
              src="//music.163.com/outchain/player?type=2&id=145455&auto=1&height=66"
            ></iframe>
          </div>
          <!-- 浪花一朵朵 -->
          <div class="transition-box">
            <iframe
              frameborder="no"
              border="0"
              marginwidth="0"
              marginheight="0"
              width=""
              height=""
              src="//music.163.com/outchain/player?type=2&id=144234&auto=1&height=66"
            ></iframe>
          </div>
          <!-- 好想好想 -->
          <div class="transition-box">
            <iframe
              frameborder="no"
              border="0"
              marginwidth="0"
              marginheight="0"
              src="//music.163.com/outchain/player?type=2&id=87111&auto=1&height=66"
            ></iframe>
          </div>
          <!-- 1990 -->
          <div class="transition-box">
            <iframe
              frameborder="no"
              border="0"
              marginwidth="0"
              marginheight="0"
              width=""
              height=""
              src="//music.163.com/outchain/player?type=2&id=109198&auto=1&height=66"
            ></iframe>
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
      show3: true,
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
.musicBtn {
  display: flex;
  flex-direction: column;
}
.grid {
  display: grid;
  grid-template-columns: repeat(2, 20vw);
  gap: 10px;
  // margin-top: 20px
}
.transition-box {
  margin-bottom: 10px;
  // width: 35vw;
  height: 6vw;
  border-radius: 4px;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
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
  .grid {
    display: block;
    margin-top: 10.0417vw;
  }
  .transition-box {
    height: 16vw;
    background: transparent;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    box-sizing: border-box;
  }
}
</style>