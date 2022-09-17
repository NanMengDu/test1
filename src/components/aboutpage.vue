<template>
  <!-- 关于页面 -->
  <div class="box1">
    <div class="item">
      <el-descriptions
        title="DMN个人信息表"
        direction="vertical"
        :column="4"
        border
      >
        <el-descriptions-item
          label="姓名"
          label-class-name="my-label"
          content-class-name="my-content"
          >DuMengNan</el-descriptions-item
        >
        <el-descriptions-item
          label="手机号"
          label-class-name="my-label"
          content-class-name="my-content"
          >152****8935</el-descriptions-item
        >
        <el-descriptions-item
          label="居住地"
          label-class-name="my-label"
          content-class-name="my-content"
          :span="2"
          >无锡市</el-descriptions-item
        >
        <el-descriptions-item
          label="籍贯"
          label-class-name="my-label"
          content-class-name="my-content"
        >
          江苏徐州
        </el-descriptions-item>
        <el-descriptions-item
          label="联系地址"
          label-class-name="my-label"
          content-class-name="my-content"
          >江苏省无锡市新吴区新安街道</el-descriptions-item
        >
      </el-descriptions>
    </div>
    <div class="vido">
      <video width="80%" height="" src="../video/SMD.mp4" controls>
        <!-- 当不支持播放视频时出现 -->
        <h2>我们很抱歉，您的浏览器<strong>不支持video标签</strong></h2>
        <a href="https://www.google.cn/chrome/">点击这里下载浏览器</a>
      </video>
      <video width="80%" height="" src="../video/YY.mp4" controls>
        <!-- 当不支持播放视频时出现 -->
        <h2>我们很抱歉，您的浏览器<strong>不支持video标签</strong></h2>
        <a href="https://www.google.cn/chrome/">点击这里下载浏览器</a>
      </video>
      <video width="80%" height="" src="../video/MD.mp4" controls>
        <!-- 当不支持播放视频时出现 -->
        <h2>我们很抱歉，您的浏览器<strong>不支持video标签</strong></h2>
        <a href="https://www.google.cn/chrome/">点击这里下载浏览器</a>
      </video>
      <video width="80%" height="" src="../video/FJ.mp4" controls>
        <!-- 当不支持播放视频时出现 -->
        <h2>我们很抱歉，您的浏览器<strong>不支持video标签</strong></h2>
        <a href="https://www.google.cn/chrome/">点击这里下载浏览器</a>
      </video>
    </div>
  </div>
</template>
<style lang='less' scoped>
.box1 {
  min-height: 30vh;
  width: 100%;
  overflow: hidden;
}
::v-deep .el-descriptions__header {
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
::v-deep .my-label {
  color: #fff;
  background-color: rgb(81, 130, 187);
  font-size: 18px;
  font-family: "Courier New", Courier, monospace;
}

::v-deep .my-content {
  background: #ebeef5;
  color: #2d82ff;
}
::v-deep
  .el-descriptions__body
  .el-descriptions__table
  .el-descriptions-item__cell {
  text-align: center;
}
.vido{
  width: 100%;
  height: 18.2292vw;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(2,25vw);
  margin-top: 5px;
  gap: 10px;
}
@media screen and (max-width:500px){
  ::v-deep .el-descriptions .is-bordered .el-descriptions-item__cell{
    padding: 0;
  }
  ::v-deep .el-descriptions :not(.is-bordered) .el-descriptions-item__cell{
    padding-bottom: 0;
    font-size: .7292vw;
  }
  .vido{
  width: 100%;
  height: 18.2292vw;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(1,1fr);
  margin-top: 10px;
  gap: 10px;
  video{
    width: 100%;
  }
  video:nth-child(4){
    display: none;
  }
}
}
</style>