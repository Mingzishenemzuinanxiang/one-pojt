<template>
 <div>

</div>
</template>

<script>
import VeLine from 'v-charts/lib/line';

export default {
 name: '',
 props:{},
 data () {
 return {

   }
 },
 components: {
   VeLine 
//注册组件
},
 methods: {
   getData(){
     this.$get('homeChat').then(res=>{
       console.log(res);
     })
   }
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

</style>