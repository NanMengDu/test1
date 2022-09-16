<template>
  <div class="backimg">
    <div class="dis">
      <div class="time">
        You are trapped in my world at <span>{{ nowTime }}</span>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import moment from "moment";
export default {
  data() {
    return {
      nowTime: "",
    };
  },
  methods: {
    showTime() {
      setInterval(() => {
        this.nowTime = moment().format("yyyy-MM-DD HH:mm:ss");
      }, 1000);
    },
  },
  created() {
    this.showTime();
  },
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
.dis {
  height: 4.1667vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .time {
    font-size: 1.5625vw;
    font-weight: 700;
    color: rgb(5, 248, 13);
    font-family: "Courier New", Courier, monospace;
    span {
      font-size: 1.0417vw;
      font-weight: 700;
      color: rgb(238, 255, 0);
    }
  }
}
</style>