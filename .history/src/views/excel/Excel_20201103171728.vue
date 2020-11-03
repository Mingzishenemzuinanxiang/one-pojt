<template>
 <div>
   <el-table
    :data="tabalLists"
    style="width: 100%"
    max-height="250">
    <el-table-column
      fixed
      prop="NAME"
      label="名称"
      width="150">
    </el-table-column>
    <el-table-column
      prop="name"
      label="商品编号"
      width="120">
    </el-table-column>
    <el-table-column
      prop="province"
      label="原价"
      width="120">
    </el-table-column>
    <el-table-column
      prop="city"
      label="现价"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="120">
      <template slot-scope="scope">
        <el-button
          @click.native.prevent="deleteRow(scope.$index, tableData)"
          type="text"
          size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
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
     this.$get('tableData?limit=10&&page=1').then(res=>{
       console.log(res);
      //  if (res.code===0) {
      //    this.tabalLists = res.data
      //  }
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