<template>
 <div>
<el-row :gutter="20">
  <el-col :span="8">
    <el-card shadow="always" :body-style="{ padding: '20px' }">
        <div slot="header">
            <span><!-- card title --></span>
        </div>
        <!-- card body -->
    </el-card>
    
  </el-col>
  <el-col :span="8">
 <el-card shadow="always" :body-style="{ padding: '20px' }">
        <div slot="header">
            <span><!-- card title --></span>
        </div>
        <!-- card body -->
    </el-card>
  </el-col>
  <el-col :span="8">
 <el-card shadow="always" :body-style="{ padding: '20px' }">
        <div slot="header">
            <span><!-- card title --></span>
        </div>
        <!-- card body -->
    </el-card>
  </el-col>
</el-row>
</div>
</template>

<script>
export default {
 name: 'feilter',
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