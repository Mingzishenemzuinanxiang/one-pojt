<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="8">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
          <el-table :data="tableData" 
           style="width: 100%"
          height="250">
            <el-table-column prop="num" label="Order-No" width="280">
            </el-table-column>
            <el-table-column prop="price" label="Price" width="100">
            </el-table-column>
            <el-table-column prop="status" label="status" width="80"> 
              <template slot-scope="{row}">
                  <el-button  size="mini" v-if="row.status===0" type="warning">pending</el-button>
                  <el-button  size="mini" v-if="row.status===1" type="success">success</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
         
          <!-- card body -->
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
          <!-- card body -->
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "feilter",
  props: {},
  data() {
    return {
        tableData:[]
    };
  },
  components: {
    //注册组件
  },
  methods: {
      getData(url){
          this.$get(url).then(res=>{
            console.log(res);
            if (res.code===0) {
                this.tableData = res.data
            }
          })
      }
    //内部方法
  },
  mounted() {
      this.getData('orderData')
    //生命周期--已加载
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
</style>