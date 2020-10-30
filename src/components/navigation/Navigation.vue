<template>
  <div>
    <div class="beijing">
      <div class="flex w1100 auto just-c-space-bet">
        <div class="h icon"></div>
        <div class="flex just-cont">
          <div class="z" v-for="item in head" :key="item.id" >
            <div @mouseenter="enter(item.id)" @mouseleave="leave" :class="{'ba':bid===item.id||item.check}" @click="chick(item.id,item.url)">{{ item.name }}</div>
          </div>
        </div>
        <div class="flex">
          <div class="ma16">
            <input type="text" placeholder="音乐/视频/电台/用户" />
          </div>
          <div class="ma16"><button>创作中心</button></div>
          <div class="ma16"><a href="https://music.163.com/#">登录</a></div>
        </div>
      </div>
    </div>
    <div class="beijing2" v-show="chke">
      <div class="flex w1100 auto just-c-space-bet">
        <div class="flex just-cont w450 k" >
          <div class="flex auto er" v-for="item in arr2" :key="item">
            <div >{{ item }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      head: [
        {
          name: "发现音乐",
          id: 1,
          check:false
          ,url:""
        },
        {
          name: "我的音乐",
          id: 12,
          check:false
           ,url:"mymusic"
        },
        {
          name: "朋友",
          id: 13,
          check:false
           ,url:""
        },
        {
          name: "商城",
          id: 14,
          check:false
           ,url:""
        },
        {
          name: "音乐人",
          id: 15,
          check:false
           ,url:""
        },
        {
          name: "下载客户端",
          id: 16,
          check:false
           ,url:""
        },
      ],
      arr2: ["推荐", "排行榜", "歌单", "主播电台", "歌手", "新碟上架"],
      bid:-1,
      chke:false
    };
  },
  components: {
    //注册组件
  },
  methods: {
    enter(id){
      this.bid =id
    },
    leave(){
      this.bid = -1;
    },
    chick(id,url){
      this.chke = id===1?true:false
      if(url){
        this.$router.push({
        name:url
      })
      }
     
    }
    //内部方法
  },
  mounted() {
    //生命周期--已加载
  },
  computed: {
    //计算数学
  },
  watch: {
    //数据监听
  },
  filters: {
    //过滤器
  },
};
</script>

<style lang='scss' scoped>
.h {
  background-image: url(https://s2.music.126.net/style/web2/img/frame/topbar.png?9b528603d857ad407d025db3606eeb9b);
}

.title {
  position: relative;
  top: 23px;
  left: 51px;
}
.beijing {
  background-color: #242424;
  border-bottom: 1px solid #000;
}
.beijing .z {
  text-decoration: none;
  color: #fff;
  text-align: center;
  line-height: 70px;
  font-size: 14px;
  margin: 0px 12px;
}
.beijing2 {
  background: red;
  height: 39px;
}
.er{
  margin: 8px;
  color: #fff;
}
.k{
      left: 29%;
    position: absolute;
}
.ba{
  background-color: black;
  box-shadow: 1px 1px 1px gray;
  z-index: 2;
}
</style>