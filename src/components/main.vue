<template>
  <div class="box">
    <div class="left">
      <!-- 图片区域 -->
      <div
        class="portrait"
        @click="def"
        :class="{ select: selectindex == null }"
      >
        <img
          style="width: 4.1667vw; height: 4.1667vw; border-radius: 2.6042vw"
          :src="url"
        />
        <div class="name">{{ name }}</div>
        <div class="name" title="唤醒心中的巨人">Awaken the giant within</div>
      </div>
      <!-- 列表 -->
      <div
        class="list"
        :class="{ select: selectindex == index }"
        v-for="(item, index) in list"
        @click="foo(index, item.name)"
      >
        <i :class="item.icon"></i>
        <span>{{ item.title }}</span>
      </div>
    </div>
    <div class="right">
      <!-- 占位符 -->
      <router-view>
        <div class="dis">
          <div class="time" title="你于此刻陷入我的世界">
            You are trapped in my world at <span>{{ nowTime }}</span>
          </div>
        </div>
      </router-view>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import "../font_3456474_iefiwd6xd6i/iconfont.css";
export default {
  data() {
    return {
      nowTime: "",
      selectindex: 0,
      url: require("../img/baby.jpg"),
      name: "DMN",
      list: [
        {
          icon: "t-icon t-icon-zhuanyejineng--",
          title: "娱乐圈",
          name: "pageone",
        },
        { icon: "t-icon t-icon-guanyu", title: "关于我", name: "aboutpage" },
        { icon: "t-icon t-icon-xingquaihao", title: "爱好", name: "hobby" },
        {
          icon: "t-icon t-icon-lianxiwomen",
          title: "商务联系",
          name: "contact",
        },
      ],
    };
  },
  created() {
    this.showTime();
  },
  methods: {
    showTime() {
      setInterval(() => {
        this.nowTime = moment().format("yyyy-MM-DD HH:mm:ss");
      }, 1000);
    },
    // 默认显示的页面路径
    def() {
      this.$router.push({ path: "/" });
      this.selectindex = null;
    },
    // 跳转页面
    foo(index, name) {
      this.selectindex = index;
      localStorage.setItem("selectindex", index);
      // 路由跳转
      if (index == 0) {
        this.$router.push({ path: "/pageone" });
      } else {
        this.$router.push({ name });
      }
    },
  },
  mounted() {
    // 获取本地储存的下标记录
    let localdata = localStorage.getItem("selectindex");
    if (localdata) {
      this.selectindex = localdata;
    }
  },
};
</script>

<style lang="less" scoped>
.box {
  width: 80vw;
  height: 80vh;
  // border: 1px solid;
  margin: 10vh 10vw;
  display: flex;
  .left {
    font-size: 1.3021vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25vw;
    background-color: #dff0f5;
    padding: 0.2604vw 0;
    border-radius: 0.5208vw 0 0 0.5208vw;
  }
  .list {
    flex: 1;
    color: rgba(79, 79, 201, 0.89);
    // font-size: 18px;
    font-weight: 700;
    margin: 0.2604vw 0;
  }
  .select {
    border-radius: 1.0417vw;
    background-color: #7bddfa;
    color: rgb(239, 5, 145);
  }
}

.portrait {
  display: flex;
  width: 23vw;
  height: 20vh;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  flex-direction: column;
  padding: 0.2604vw;
  background-color: #dff0f5;
  transition: all 0.5s;
  border-radius: 5px;
  color: rgba(79, 79, 201, 0.89);
  font-weight: 700;
  .name {
    margin-top: 0.2604vw;
  }
}
.portrait:hover {
  background-color: white;
  transition: all 0.3s;
  border-radius: 1.0417vw;
  color: rgb(239, 5, 145);
  cursor: pointer;
}
.list {
  width: 23vw;
  padding: 0.2604vw;
  background-color: #dff0f5;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2604vw;
  i {
    margin-right: 0.5208vw;
  }
}
.list:hover {
  transition: all 0.3s;
  border-radius: 1.0417vw;
  background-color: white;
  color: rgb(239, 5, 145);
  cursor: pointer;
}
.right {
  padding: 0.5208vw;
  width: 55vw;
  background-color: #d3f5ff;
  display: flex;
  justify-content: center;
  border-radius: 0 0.5208vw 0.5208vw 0;
}
.dis {
  height: 4.1667vw;
  display: flex;
  justify-content: center;
  align-items: center;
  .time {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.5625vw;
    font-weight: 700;
    color: rgb(5, 248, 13);
    font-family: "Courier New", Courier, monospace;
    span {
      font-size: 1.0417vw;
      font-weight: 700;
      color: blue;
    }
  }
}
@media screen and (max-width: 500px) {
  .box {
    width: 100vw;
    height: 100vh;
    margin: 0 0;
    .right {
      width: 75vw;
    }
  }
  .dis {
    height: auto;
    .time {
      text-align: center;
      display: flex;
      flex-direction: column;
      margin-bottom: 10px;
      justify-content: center;
      font-size: 4vw;
      font-weight: 700;

      background-image: linear-gradient(
        100deg,
        rgb(29, 10, 242),
        rgb(46, 222, 11)
      );
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      span {
        color: blue;
        font-size: 3.8229vw;
        margin-top: 10px;
      }
    }
  }
}
</style>