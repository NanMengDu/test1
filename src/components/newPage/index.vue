<template>
  <div>
    <button class="goBack" @click="$router.push({ name: 'aboutme' })">
      返回主场景
    </button>
    <button class="btn" @click="myswitch" type="primary" plain>切换场景</button>
    <earth v-show="flag"></earth>
    <visualization v-show="!flag"></visualization>
  </div>
</template>
<script>
import earth from "./components/earth.vue";
import visualization from "./components/visualization.vue";
export default {
  components: { earth, visualization },
  data() {
    return {
      flag: true,
    };
  },
  methods: {
    myswitch() {
      console.log(222);
      this.flag = !this.flag;
    },
  },
};
</script>
<style lang="less" scoped>
.btn {
  width: 100px;
  height: 40px;
  position: absolute;
  cursor: pointer;
  font-size: 1.0417vw;
  color: rgb(231, 247, 4);
  border-radius: 20px 0 20px 0;
  background: rgba(25, 25, 224, 0.1);
  right: 20px;
  top: 45px;
}
.goBack {
  width: 140px;
  height: 40px;
  position: absolute;
  cursor: pointer;
  font-size: 1.0417vw;
  color: rgb(231, 247, 4);
  border-radius: 20px 0 20px 0;
  background: rgba(8, 8, 237);
  left: 50%;
  margin-left: -70px;
  bottom: 40px;
}
</style>