<template>
 <div>
     <el-card shadow="always" :body-style="{ padding: '20px' }">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            
        </el-form>
         <!-- card body -->
     </el-card>
     
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

</style>