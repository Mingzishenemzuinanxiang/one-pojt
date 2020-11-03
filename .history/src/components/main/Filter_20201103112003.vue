<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="8">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
          <el-table :data="tableData" style="width: 100%" height="250">
            <el-table-column prop="num" label="Order-No" width="280">
            </el-table-column>
            <el-table-column prop="price" label="Price" width="100">
            </el-table-column>
            <el-table-column prop="status" label="status" width="80">
              <template slot-scope="{ row }">
                <el-button size="mini" v-if="row.status === 0" type="danger"
                  >pending</el-button
                >
                <el-button size="mini" v-if="row.status === 1" type="success"
                  >success</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
          <div slot="header">
            <i class="el-icon-arrow-up" @click="all" v-show="selectall"></i>
            <i class="el-icon-arrow-down" @click="all" v-show="selectbu" ></i>
          </div>
          <!-- card body -->
          <div class="h300 flex c">
            <el-checkbox
              v-for="item in todolist"
              :key="item"
              :checked="item.checked"
              ><div>
                {{ item.name
                }}<el-button
                  icon="el-icon-close"
                  @click="del(item)"
                ></el-button></div
            ></el-checkbox>
          </div>
          <div slot="header">
            <span><!-- card title --></span>
          </div>
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
      tableData: [],
      todolist: [],
      selectall: false,
      selectbu:true
    };
  },
  components: {
    //注册组件
  },
  methods: {
    del(item) {
      this.todolist = this.todolist.filter((i) => {
        return i !== item;
      });
    },
    all(){
      this.selectall = this.selectall?false:true;
      // this.todolist.map((item,index)=>{
      //   item.checked = this.selectall
      // })
    }
    ,
    getData(url) {
      this.$get(url).then((res) => {
        if (res.code === 0 && url === "orderData") {
          this.tableData = res.data;
        }
        if (res.code === 0 && url === "todolist") {
          console.log(res);
          this.todolist = res.data;
        }
      });
    },
    //内部方法
  },
  mounted() {
    this.getData("orderData");
    this.getData("todolist");
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
.c {
  flex-direction: column;
}
</style>