<template >
 <div class="bei">
  <router-view/>
</div>
</template>

<script>
export default {
 name: '',
 props:{},
 data () {
 return {

   }
 },
 components: {
  //注册组件
},
 methods: {
//内部方法
},
 mounted() {
//生命周期--已加载
},
 computed:{
//计算数学
},
 watch: {
//数据监听
},
 filters:{
//过滤器
},
}
</script>

<style lang='scss' scoped>
.bei{
  background: url("../../assets/bei1.jpg") no-repeat center center fixed;
  position:absolute;
  width: 100%;
  height: 100%;
}

</style>