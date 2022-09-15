<template>
<!-- 联系页面 -->
  <div class="contact">
    <h3>联系我吧Contact me</h3>
    <div>
      <i class="t-icon t-icon-shouji"></i>
      <div>电话</div>
      <div>15261178935</div>
    </div>
    <div>
      <i class="t-icon t-icon-weixin"></i>
      <div>微信</div>
      <div>dumn1117</div>
    </div>
    <div>
      <i class="t-icon t-icon-wodeyouxiang"></i>
      <div>邮箱</div>
      <div>2464016555@qq.com</div>
    </div>
    <div>
      <i class="t-icon t-icon-dingwei"></i>
      <div>位置</div>
      <div>江苏无锡</div>
    </div>
  </div>
</template>
<style lang="less" scoped>
.contact {
  display: grid;
  grid-template-columns: repeat(2, 13.0208vw);
  place-items: center;
  h3 {
    font-size: 2.125rem;
    background-image: linear-gradient(135deg, blue, purple,blue);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
}
.contact > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 10.4167vw;
  height: 7.8125vw;
  border-radius: 2.6042vw;
  background: #fdfafa;
  box-shadow: 1.0417vw 1.0417vw 3.125vw #eedddd, -1.0417vw -1.0417vw 3.125vw #ffffff;
  color: rgb(247, 0, 255);
}
</style>