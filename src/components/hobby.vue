<template>
<!-- 爱好 -->
  <div class="swiper">
    <h3>爱好</h3>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in list">
          <img :src="item.imgs" :alt="item.title">
        </div>
      </div>
      <!-- 控件 -->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
  data(){
    return{
      list:[
        {imgs:require('../img/书法1.jpeg')},
        // {imgs:require('../img/爱好.jpeg')},
        {imgs:require('../img/山水画.jpeg')},
        // {imgs:require('../img/书法2.jpeg')},
        {imgs:require('../img/书法3.jpeg')},
        {imgs:require('../img/游山玩水1.jpeg')},
        {imgs:require('../img/游山玩水2.jpeg')},
        {imgs:require('../img/游山玩水3.jpeg')},
        {imgs:require('../img/游山玩水4.jpeg')}
      ]
    }
  },
  mounted(){
      //初始化轮播图
      var swiper = new Swiper('.swiper-container', {
        autoplay:2000,
        loop: true,
        pagination : '.swiper-pagination',
        paginationClickable :true,
      });
    }
};
</script>
<style>
.swiper{
  display: flex;
  align-items: center;
  flex-direction: column;
}
  .swiper-container {
    /* border: 1px solid; */
    width: 600px;
    height: 400px;
    border-radius: 10px;
    margin-top: 30px;
}  
/* 使轮播图片居中 */
.swiper-slide{
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img{
  width: 100%;
  /* height: 100%; */
}
</style>