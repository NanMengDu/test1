<template>
  <div class="card">
    <el-card shadow="hover" :body-style="{ padding: '0px' }">
      <el-image
        style="width: 100%; height: 100%"
        :src="url"
        :preview-src-list="srcList"
      >
      </el-image>
      <div class="mx">
        <span class="name">天王巨星刘德华</span>
      </div>
    </el-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
.card {
  width: 100%;
  padding: 10px;
  .image {
  }
  .el-card {
    width: 10vw;
    min-height: 10vw;
  }
}
.mx{
  margin-top: 5px;
  display: flex;
  justify-content: center;
}
.name{
  font-size: .1292vw;
}
</style>