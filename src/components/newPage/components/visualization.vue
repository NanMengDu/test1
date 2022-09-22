<template>
<!-- 可视化 -->
  <div>
    <div style="cursor:pointer;width:100vw;height:100vh">
      <embed :src="src" width="100%" height="100%" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: "/static"
    };
  },
  created() {},
  methods: {
    clickTo() {
      window.open("/static", "_blank"); //跳转新页面
    }
  }
};
</script>

<style lang="less" scoped>
</style>
