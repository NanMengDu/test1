<template>
  <div class="card">
    <el-card
      shadow="hover"
      :body-style="{ padding: '0px' }"
      v-for="item in listData"
    >
      <el-image
        style="width: 100%; height: 100%"
        :src="item.url"
        :preview-src-list="item.srcList"
      >
      </el-image>
      <div class="mx">
        <span class="name" :title="item.title">{{ item.title }}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listData: [
        {
          title: "天王巨星刘德华",
          url: "https://img2.baidu.com/it/u=1316000032,2016908895&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500",
          srcList: [
            "	https://img2.baidu.com/it/u=1803931030,2820421738&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=370",
            "	https://img1.baidu.com/it/u=578380307,1856070733&fm=253&fmt=auto&app=138&f=JPEG?w=650&h=431",
            "	https://img1.baidu.com/it/u=4245350395,3644784163&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375",
            "	https://img2.baidu.com/it/u=2890147507,1689836011&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=699",
          ],
        },
        {
          title: "功夫皇帝李连杰",
          url: "https://img0.baidu.com/it/u=1296652113,3832178171&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200",
          srcList: [
            "	https://img0.baidu.com/it/u=3079735166,3205350968&fm=253&fmt=auto&app=120&f=JPEG?w=984&h=500",
            "	https://img0.baidu.com/it/u=1164613781,3918963371&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
            "	https://img2.baidu.com/it/u=3382993723,757238632&fm=253&fmt=auto&app=138&f=JPEG?w=1103&h=500",
          ],
        },
        {
          title: "片场大哥房仕龙",
          url: "https://img0.baidu.com/it/u=721076125,2506032212&fm=253&fmt=auto?w=200&h=200",
          srcList: [
            "	https://img0.baidu.com/it/u=1378821539,1120588950&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
            "	https://img1.baidu.com/it/u=104946229,1393465704&fm=253&fmt=auto&app=138&f=JPEG?w=1017&h=500",
            "	https://img0.baidu.com/it/u=2576912678,1340047565&fm=253&fmt=auto&app=138&f=JPEG?w=640&h=427",
          ],
        },
        {
          title: "功夫之王夏令震",
          url: "https://img2.baidu.com/it/u=3149745647,3205743457&fm=253&fmt=auto&app=138&f=JPEG?w=193&h=193",
          srcList: [
            "https://img0.baidu.com/it/u=2916100127,3828118543&fm=253&fmt=auto?w=1585&h=800",
            "https://img1.baidu.com/it/u=1365906867,350985317&fm=253&fmt=auto?w=1600&h=800",
            "https://img2.baidu.com/it/u=1238934084,176619859&fm=253&fmt=auto?w=1749&h=800",
          ],
        },
        {
          title: "国际巨星李小龙",
          url: "https://img0.baidu.com/it/u=3839563669,2828370709&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200",
          srcList: [
            "		https://img0.baidu.com/it/u=4223460187,2254247396&fm=253&fmt=auto&app=120&f=JPEG?w=791&h=1063",
            "		https://img0.baidu.com/it/u=457721106,3599320143&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
            "	https://img0.baidu.com/it/u=1406033654,732835953&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
          ],
        },
        {
          title: "许嵩",
          url: "	https://img1.baidu.com/it/u=3548845896,2957370516&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200",
          srcList: [
            "	https://img1.baidu.com/it/u=2882521906,1795998106&fm=253&fmt=auto?w=800&h=944",
            " 	https://img0.baidu.com/it/u=2619084577,536020962&fm=253&fmt=auto?w=901&h=800",
            "	https://img2.baidu.com/it/u=3906360185,1343707238&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=511",
          ],
        },
        {
          title: "薛之谦",
          url: "	https://img0.baidu.com/it/u=3837521439,1460065399&fm=253&fmt=auto&app=138&f=JPG?w=200&h=200",
          srcList: [
            "	https://img1.baidu.com/it/u=818549283,1327318781&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=721",
            " https://img2.baidu.com/it/u=137803834,3930789820&fm=253&fmt=auto&app=138&f=JPEG?w=794&h=500",
            "https://img0.baidu.com/it/u=3240921902,1083449545&fm=253&fmt=auto&app=138&f=JPEG?w=281&h=499",
          ],
        },
        {
          title: "周杰伦",
          url: "		https://img1.baidu.com/it/u=815712317,4018817033&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200",
          srcList: [
            "		https://img0.baidu.com/it/u=783389636,325266201&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
            " 	https://img0.baidu.com/it/u=2481018142,2830265823&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=701",
            "	https://img0.baidu.com/it/u=3761335470,1554772847&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=500",
          ],
        },
        {
          title: "张韶涵",
          url: "	https://img0.baidu.com/it/u=1193230149,3582909881&fm=253&fmt=auto&app=138&f=JPEG?w=180&h=180",
          srcList: [
            "		https://img0.baidu.com/it/u=3859256295,1196745527&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313",
            "https://img2.baidu.com/it/u=3001500839,504221463&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
            "	https://img1.baidu.com/it/u=1943258294,4193038097&fm=253&fmt=auto&app=120&f=JPEG?w=690&h=1035",
          ],
        },
        {
          title: "邓紫棋",
          url: "https://img2.baidu.com/it/u=3721905586,2571320439&fm=253&fmt=auto&app=138&f=JPEG?w=164&h=164",
          srcList: [
            "	https://img1.baidu.com/it/u=370797246,2936031861&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=625",
            "	https://img0.baidu.com/it/u=390441747,293726952&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=667",
            "	https://img1.baidu.com/it/u=1743890269,3972378750&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
          ],
        },
        {
          title: "范冰冰",
          url: "https://img2.baidu.com/it/u=422356025,1307232708&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200",
          srcList: [
            "https://img2.baidu.com/it/u=2614293822,1301639274&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
            "https://img2.baidu.com/it/u=246564262,56633364&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=776 ",
            "https://img2.baidu.com/it/u=1650555145,2482229051&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889",
          ],
        },
        {
          title: "迪丽热巴",
          url: "	https://img1.baidu.com/it/u=2106449879,123573125&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200",
          srcList: [
            "https://img1.baidu.com/it/u=3427967013,3296502229&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=1033",
            "https://img2.baidu.com/it/u=1674051308,2084104873&fm=253&fmt=auto&app=120&f=JPEG?w=333&h=500",
            "https://img2.baidu.com/it/u=1620777037,1300046897&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889",
          ],
        },
        {
          title: "杨颖",
          url: "https://img0.baidu.com/it/u=1740447495,915456679&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200",
          srcList: [
            "https://img1.baidu.com/it/u=2059556146,564168330&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1000",
            "https://img2.baidu.com/it/u=278875685,476951852&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889",
            "https://img1.baidu.com/it/u=1443760782,1258050267&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=692",
          ],
        },
        {
          title: "蔡徐坤",
          url: "https://img2.baidu.com/it/u=2513365812,284347030&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200",
          srcList: [
            "	https://img2.baidu.com/it/u=2521122509,2365788481&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889",
            "https://img2.baidu.com/it/u=872286803,1206360756&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750",
            "https://img2.baidu.com/it/u=1708902368,213787883&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=801",
          ],
        },
        {
          title: "最美女神江疏影",
          url: "https://img1.baidu.com/it/u=2636978633,2827085798&fm=253&fmt=auto&app=138&f=JPEG?w=200&h=200",
          srcList: [
            "https://img0.baidu.com/it/u=1216833217,1784909472&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500",
            "https://img2.baidu.com/it/u=3608972223,3440429343&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=313",
            "https://img2.baidu.com/it/u=914484122,587788792&fm=253&fmt=auto&app=138&f=JPEG?w=333&h=500",
            "https://img1.baidu.com/it/u=4138879843,2239541657&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
            "	https://img1.baidu.com/it/u=4106418055,17460184&fm=253&fmt=auto&app=138&f=JPEG?w=908&h=500"
          ],
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.card {
  width: 100%;
  padding: .5208vw;
  display: grid;
  grid-template-columns: repeat(5, 10vw);
  grid-template-rows: repeat(3, 13vw);
  gap: 10px;
  .el-card {
    max-width: 10vw;
    min-height: 10vw;
  }
}
.mx {
  margin-top: 5px;
  display: flex;
  justify-content: center;
}
.name {
  font-size: 0.1292vw;
  white-space: nowrap;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@media screen and (max-width: 385px){
  .card {
  width: 100%;
  padding: .5208vw;
  display: grid;
  grid-template-columns: repeat(3, 16vw);
  grid-template-rows: repeat(5, 26vw);
  gap: 10px;
  place-items: center;
  .el-card {
    max-width: 16vw;
  }
}
}
</style>