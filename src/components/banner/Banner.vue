<template>
  <div :style="{ background: imgurl }" style="height:261px;background-size:6000px; background-position: center center;">
    <div class="flex w1100 auto" >
      <div class="w700" >
        <el-carousel class="m"  @change="carouselChange">
          <el-carousel-item v-for="(item) in bannerList" :key="item.id" >
            <img  class="small" :src="item.imageUrl" alt="" srcset="" />
          </el-carousel-item>
        </el-carousel>
      </div>

      <div class="div">
        <a href="https://music.163.com/#/download" target="_black"
          >下载客户端</a
        >
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
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
      bannerList: [],
      // imgurl: `url("http://p1.music.126.net/LwH8IvRHnBWGcTMJy0sMNA==/109951165419703554.jpg?imageView&blur=40x20")`,
      imgurl: "",
    };
  },
  components: {
    //注册组件
  },
  methods: {
    carouselChange(v,k){
      v+=1;
      this.bannerList.map(item=>{
        if (v===item.id) {
          this.imgurl = `url("${item.imageUrl}?imageView&blur=40x20")`
        }
      })
    },
    getDate() {
      this.$get("banner")
        .then((res) => {
          if (res.code === 200) {
            this.bannerList = res.banners;
            this.bannerList.map((item, index) => {
              item.id = index + 1;
              if (index===0) {
                this.imgurl =  `url("${item.imageUrl}?imageView&blur=40x20")`
              }
            });
          }
        })
        .catch((err) => {});
    },
    //内部方法
  },
  mounted() {
    //生命周期--已加载
    this.getDate();
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
.small {
  width: 100%;
}
.div {
  width: 255px;
  height: 261px;
  background-color: #171616;
  background-image: url("https://s2.music.126.net/style/web2/img/index/download.png?48b888b…");
}
.div a {
  display: block;
  width: 215px;
  height: 56px;
  margin: 186px 0 0 19px;
  background-position: 0 9999px;
  text-indent: -9999px;
}
.div p {
  text-align: center;
  color: #8d8d8d;
  font-size: 10px;
}
.m {
  width: 100%;
}
.hiedimg {
  opacity: 0;
}
</style>