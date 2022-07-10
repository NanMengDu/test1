<template>
  <div class="backimg">
    <h1>杜梦男个人简介</h1>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  // test主分支
  // test主分支
  // main主分支
  data(){
    return{}
  }
};
</script>
<style>
.backimg {
  border: 0.1px solid #ccc;
  background-image: url("https://img2.baidu.com/it/u=555227454,1852482860&fm=253&fmt=auto&app=138&f=JPEG?w=658&h=388");
  background-size: cover;
}
h1 {
  color: #c8e3f4;
  text-align: center;
  height: 80px;
  line-height: 130px;
}
</style>