<template>
  <!-- 头像 -->
  <div class="aboutme">
    <img :src="url" />
    <div class="Quotations">
      <p>多数人在人潮汹涌的世间，白白挤了一生，从来不知</p>
      <p>道哪里才是他所想要到达的地方，而有目标的人却始</p>
      <p>终不忘记自我的方向，所以他能打开出路，走向成功。</p>
      <p>
        <span>——罗兰</span>
      </p>
    </div>
    <!-- 时间占位符 -->
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url: require("../img/baby.jpg"),
    };
  },
};
</script>
<style lang="less" scoped>
.aboutme {
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  img {
    width: 13.5417vw;
    height: 13.5417vw;
    border-radius: 50%;
  }
}
// 格言
.Quotations {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 150px;
  font-size: 0.9375vw;
  font-weight: 700;
  background-image: linear-gradient(
    135deg,
    rgb(29, 10, 242),
    rgb(237, 27, 237),
    rgb(46, 222, 11)
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  p {
    flex: 1;
  }
}
@media screen and (max-width: 500px) {
  .aboutme {
    height: 100%;
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 30vw;
      height: 30vw;
      border-radius: 50%;
      margin-bottom: 20px;
    }
  }
  .Quotations {
    font-size: 3.5vw;
  }
}
</style>