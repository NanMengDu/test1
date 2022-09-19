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
      <div>QQ</div>
      <div>2464016555</div>
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
  gap: 30px;
  place-items: center;
  h3 {
    font-size: 1.7708vw;
    background-image: linear-gradient(135deg, blue, purple, blue);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }
}
.contact > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 14.4167vw;
  height: 10.8125vw;
  border-radius: 2.6042vw;
  background: #fdfafa;
  box-shadow: 20px 20px 60px#eedddd, -20px -20px 60px #ffffff;
  color: rgb(247, 0, 255);
  div {
    font-size: 0.8333vw;
  }
}
@media screen and (max-width: 500px) {
  .contact {
    display: grid;
    grid-template-columns: repeat(2, 22vw);
    gap: 30px;
    h3{
      font-size: 5vw;
    }
  }
  .contact > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 28vw;
    height: 19.8125vw;
    border-radius: 2.6042vw;
    background: #fdfafa;
    box-shadow: 20px 20px 60px#eedddd, -20px -20px 60px #ffffff;
    color: rgb(247, 0, 255);
    div {
      font-size: 4vw;
    }
  }
}
</style>