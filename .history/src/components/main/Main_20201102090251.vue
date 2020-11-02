<template>
  <div>
    <div class="flex w1100 auto flex-wrap">
      <div class="flex w700 h50 just-c-space-bet">
        <div class="remen">热门推荐</div>
        <div class="flex asa">
          <div v-for="(item, index) in fenList" :key="item.id">
            <a href="" v-if="index < 5">{{ item.name }}</a>
          </div>
        </div>
        <div class="flex geng">
          <div class="font-content-40">更多</div>
        </div>
      </div>
      <!-- <div class="div h300">
        <div class="beikomh">
          <p>登录网易音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
        </div>
      </div> -->
    </div>

    <!-- 这里是测试{{ name }} -->
    <!-- <button @click="updateNmae">修改name值</button> -->
    <div class="flex w1100 auto">
      <div class="w700 h300">
        <div class="flex w700 flex-wrap">
          <div
            v-for="(item, index) in gedanList"
            :key="index"
            class="auto"
            @click="click"
          >
            <img :src="item.coverImgUrl" alt="" width="100" height="100" />
            <div class="w120">
              {{ item.name }}
            </div>
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
      gedanList: [],
      fenList: [],
    };
  },
  components: {
    //注册组件
  },
  methods: {
    // updateNmae() {
    //   this.$store.commit('setName',"这个是修改后的值")
    // },

    click() {},
    getData(url = "playlist/hot", t = true) {
      this.$get(url)
        .then((res) => {
          if (t) {
            this.fenList = res.tags;
          } else {
            this.gedanList = res.playlists;
          }
        })
        .catch((err) => {});
    },
    //内部方法
  },
  mounted() {
    this.getData();
    this.getData("top/playlist?limit=10", false);
    //生命周期--已加载
  },
  computed: {
    name() {
      return this.$store.state.name;
    },
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
.remen {
  width: 150px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 22px;
}
.geng {
  width: 88px;
  height: 40px;
}
.asa {
  height: 40px;
  width: 526px;
  text-align: center;
  line-height: 40px;
  justify-content: space-between;
}
.div {
  width: 255px;
  height: 259px;
}
.beikomh {
  background-image: url("https://s2.music.126.net/style/web2/img/index/index.png?c5379afd11956a057a07c24297925a0d")
    no-repeat 0 9999px;
}
</style>