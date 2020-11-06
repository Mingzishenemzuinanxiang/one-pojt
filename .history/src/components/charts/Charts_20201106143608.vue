<template>
 <div>
     <component :is="componentId"></component>
</div>
</template>

<script>
export default {
 name: '',
 props:{
     type:{
         type:String,
         required:true
     },
      Data:{
         type:Object,
         required:true
     },
 },
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
     tab(){
         return `ve-${type}`
     }
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