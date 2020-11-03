<template>
 <div>
   导出execl
</div>
</template>

<script>
export default {
 name: 'excel',
 props:{},
 data () {
 return {
    tabalLists:[]
   }
 },
 components: {
//注册组件
},
 methods: {
   getData(){
     this.$get('tableData?limit=10').then(res=>{
       console.log(res);
     })
   }
//内部方法
},
 mounted() {
this.getData()
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