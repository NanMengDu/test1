<template>
     <div class="box">
      <div class="left">
        <!-- 图片区域 -->
        <div class="portrait" @click="def" :class="{select:selectindex==null}">
          <img
            style="width: 4.1667vw; height: 4.1667vw; border-radius: 2.6042vw"
            :src="url"
          />
          <div class="name">{{ name }}</div>
          <div class="name" title="唤醒心中的巨人">Awaken the giant within</div>
        </div>
        <!-- 列表 -->
        <div class="list" :class="{select:selectindex==index}" v-for="(item,index) in list" @click="foo(index)">
          <i :class="item.icon"></i>
          <span>{{ item.title }}</span>
        </div>
      </div>
      <div class="right">
        <!-- 占位符 -->
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
import '../font_3456474_iefiwd6xd6i/iconfont.css'
export default {
  data() {
    return {
      selectindex:0,
      url: require("../img/baby.jpg"),
      name: "杜梦男",
      list: [
        { icon: 't-icon t-icon-zhuanyejineng--', title: "技能" },
        { icon: 't-icon t-icon-guanyu', title: "关于" },
        { icon: 't-icon t-icon-xingquaihao', title: "爱好" },
        { icon: 't-icon t-icon-lianxiwomen', title: "联系" },
      ],
    };
  },
  methods:{
    // 默认显示的页面路径
    def(){
      this.$router.push({path:'/'})
      this.selectindex = null
    },
    // 跳转页面
    foo(index){
      // console.log(index);
      this.selectindex = index
      localStorage.setItem('selectindex',index)
      if(index == 0){
        this.$router.push({path:'/pageone'})
      }else if(index == 1){
        this.$router.push({path:'/aboutpage'})
      }else if(index ==2){
        this.$router.push({path:'/hobby'})
      }else{
        this.$router.push({path:'/contact'})
      }
    }
  },
  mounted(){
    // 获取本地储存的下标记录
    let localdata = localStorage.getItem('selectindex')
    if(localdata){
      this.selectindex = localdata
    }
  }
};
</script>

<style lang="less" scoped>
  
.box {
  width: 80vw;
  height: 80vh;
  // border: 1px solid;
  margin: 0 10vw 10vh;
  display: flex;
  .left {
    font-size: 1.3021vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25vw;
    background-color: #dff0f5;
    padding: .2604vw 0;
    border-radius: .5208vw 0 0 .5208vw;
  }
  .list{
    flex: 1;
    color: rgba(79, 79, 201, 0.89);
    // font-size: 18px;
    font-weight: 700;
    margin: .2604vw 0;
  }
  .select{
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
  padding: .2604vw;
  background-color: #dff0f5;
  transition: all 0.5s;
  border-radius: 5px;
  color: rgba(79, 79, 201, 0.89);
    font-weight: 700;
  .name {
    margin-top: .2604vw;
  }
}
.portrait:hover{
  background-color: white;
  transition: all 0.3s;
  border-radius: 1.0417vw;
  color: rgb(239, 5, 145);
  cursor: pointer;
}
.list {
  width: 23vw;
  padding: .2604vw;
  background-color: #dff0f5;
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: .2604vw;
  i {
    margin-right: .5208vw;
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
  padding: .5208vw;
  // border: 1px solid;
  width: 55vw;
  background-color: #d3f5ff;
  display: flex;
  justify-content: center;
  border-radius: 0 .5208vw .5208vw 0;
}
</style>