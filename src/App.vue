<template>
  <div class="backimg">
      <h1>杜梦男个人简介</h1>
      <div class="time">我们相遇的时间: <span>{{nowTime}}</span></div>
    <router-view></router-view>
  </div>
</template>
<script>
import moment from 'moment'
export default {
  data(){
    return{
      nowTime:''
    }
  },
  methods:{
    showTime(){
      setInterval(()=>{
        this.nowTime = moment().format('yyyy-MM-DD HH:mm:ss')
      },1000)
    }
  },
  created(){
    this.showTime()
  }
};
</script>
<style lang='less' scoped>
.backimg {
  border: 0.1px solid #ccc;
  background-image: url("https://img2.baidu.com/it/u=555227454,1852482860&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=388");
  background-size: cover;
  width: 100vw;
  height: 100vh;
}
.time{
  position: fixed;
  right: 100px;
  top: 30px;
  color: rgb(20, 248, 31);
  font-family: 'Courier New', Courier, monospace;
  span{
    font-size: 1.25rem;
    color: rgb(238, 255, 0);
  }
}
h1 {
  color: #c8e3f4;
  text-align: center;
  height: 4.1667vw;
  line-height: 6.7708vw;
}
</style>