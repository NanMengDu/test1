<template>
  <div>
    <el-button class="btn" @click.native="$router.push({name:'aboutme'})" type="primary" plain>点击返回主场景</el-button>
    <el-button @click.native="myswitch" type="primary" plain>点击切换场景</el-button>
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
  methods:{
    myswitch(){
        console.log(222);
        this.flag = !this.flag
    }
  }
};
</script>
<style lang="less" scoped>
.el-button{
    position: absolute;
    pointer-events: auto;
    cursor: pointer;
    right: 10px;
    top: 45px;
}
.btn{
   position: absolute;
    pointer-events: auto;
    cursor: pointer;
    left: 10px;
    top: 45px;
}
</style>