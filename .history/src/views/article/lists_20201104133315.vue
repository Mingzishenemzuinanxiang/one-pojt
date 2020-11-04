<template>
 <div>
     <el-card shadow="always" :body-style="{ padding: '20px' }">
         


     </el-card>
     
</div>
</template>

<script>
export default {
 name: '',
 props:{},
 data () {
 return {
    tabelData:[]
   }
 },
 components: {
//注册组件
},
 methods: {
     getData(){
         this.$get('article/allArticle').then(res=>{
             if (res.code===200) {
                 this.tabelData= res.data
             }
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