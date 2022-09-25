<template>
  <div class="card">
    <el-card
      shadow="hover"
      :body-style="{ padding: '0px' }"
      v-for="(item, index) in listData"
    >
      <el-image
        style="width: 100%; height: 100%"
        :src="item.url"
        :preview-src-list="item.srcList"
      >
      </el-image>
      <div class="hov">
        <img
          class="xixi"
          @click="bf(index)"
          :title="`${item.artistsname}--${item.title}`"
          src="../img/control.png"
          alt=""
        />
        <audio
          :ref="'audio' + index"
          class="audio"
          controls
          :src="item.musicUrl"
        ></audio>
      </div>
      <div class="mx">
        <span class="name" :title="item.title">{{ item.title }}</span>
      </div>
    </el-card>
    <div class="change" @click="$router.go()">换一批</div>
  </div>
</template>

<script>
import { ReqMusic } from "../axios";
export default {
  data() {
    return {
      listData: [],
    };
  },
  created() {
    for (let index = 0; index < 11; index++) {
      this.ReqMusicData();
    }
  },
  methods: {
    async ReqMusicData() {
      let res = await ReqMusic();
      this.listData.push({
        title: res.data.name,
        url: res.data.picurl,
        musicUrl: res.data.url,
        artistsname: res.data.artistsname,
        flag: false,
      });
    },
    bf(index) {
      var audios = document.querySelectorAll(".audio")[index];
      //获取到img标签
      var xixi = document.querySelectorAll(".xixi")[index];
      // //播放音频
          if (audios.paused) {
            //如果已停止则播放音频并更换图标
            xixi.src = require("../img/end.png");
            audios.play();
          } else {
            //如果已停止重新加载音频并关闭音频和更换图标
            xixi.src = require("../img/control.png");

            audios.pause();

            audios.load();
          }
    },
  },
};
</script>

<style lang="less" scoped>
.card {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 13vw);
  grid-template-rows: repeat(3, 13.5vw);
  gap: 5px;
  position: relative;
  .el-card {
    max-width: 12vw;
    min-height: 12vw;
    position: relative;
  }
  .el-card:hover .hov {
    visibility: visible;
  }
}
.hov {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  top: 0;
  width: 100%;
  height: 90%;
  visibility: hidden;
  img {
    width: 3.125vw;
    height: 3.125vw;
    cursor: pointer;
  }
  .audio {
    display: none;
  }
}
.mx {
  display: flex;
  justify-content: center;
}
.name {
  margin-top: -2px;
  font-size: 0.1292vw;
  white-space: nowrap;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.change{
  width: 10vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  position: absolute;
  right: 2vw;
  bottom: 10vw;
  border-radius: 20px;
  color: blue;
  cursor: pointer;
}
@media screen and (max-width: 500px) {
  .card {
    width: 100%;
    padding: 0.5208vw;
    display: grid;
    grid-template-columns: repeat(3, 22vw);
    grid-template-rows: repeat(4, 30vw);
    gap: 30px 10px;
    place-items: center;
    .el-card {
      max-width: 22vw;
      max-height: 30vh;
      border: 1px solid;
    }
  }
  .change{
  width: 20vw;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  position: absolute;
  left: 2vw;
  bottom: 20vw;
  border-radius: 20px;
  color: blue;
  cursor: pointer;
}
.name {
  margin-top: -2px;
  font-size: 2vw;
  white-space: nowrap;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.hov{
  img {
    width: 9vw;
    height: 9vw;
    cursor: pointer;
  }
}
}
</style>