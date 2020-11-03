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
          <el-container>
            <div class="flex just-cont">
              <i class="el-icon-arrow-up" @click="all" v-show="selectall"></i>
              <i class="el-icon-arrow-down" @click="all" v-show="selectbu"></i>
              <span>todolist</span>
            </div>

            <el-main>
              <div class="h300 flex c">
                <el-checkbox
                  v-for="item in todolist"
                  :key="item.name"
                  v-model="item.checked"
                  ><div>
                    {{ item.name
                    }}<el-button
                      icon="el-icon-close"
                      @click="del(item)"
                    ></el-button></div
                ></el-checkbox>
              </div>
            </el-main>
            <el-footer>
              <span>{{ countnum }}</span>
              <div class="flex">
                <el-button @click="acadd2">All</el-button>
                <el-button @click="acadd">Active</el-button>
                <el-button  @click="acadd1">Completed</el-button>
              </div>
            </el-footer>
          </el-container>

          <!-- card body -->
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
          <!-- card body -->
          <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt="">
          <el-progress v-for="(item,index) in numlists" :key="item.name" :percentage="item.progress" :format="format" :color="colorAttr"></el-progress>
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
      list:[],
      selectall: false,
      selectbu: true,
      countnum: 0,
      activelist: [],
      numlists:[]
    };
  },
  components: {
    //注册组件
  },
  methods: {
    colorAttr(percentage){
        console.log(percentage);
    },
    acadd(){
      this.todolist = this.list.filter((item)=>{
        return item.checked===false
      }) 
      this.listsnum()
    },

    acadd2(){
      this.todolist = this.list
      this.listsnum()
    },

    acadd1(){
      this.todolist = this.list.filter((item)=>{
        return item.checked===true
      }) 
      this.listsnum()
    },
    del(item) {
      this.todolist = this.todolist.filter((i) => {
        return i !== item;
      });
      this.list = this.todolist
     this.listsnum()
    },
    all() {
      this.selectall = this.selectall ? false : true;
      this.selectbu = this.selectall ? false : true;
      this.todolist.map((item, index) => {
        item.checked = this.selectall;
      });
      this.list = this.todolist;
    },
    getData(url) {
      this.$get(url).then((res) => {
        if (res.code === 0 && url === "orderData") {
          this.tableData = res.data;
        }
        if (res.code === 0 && url === "todolist") {
          this.todolist = this.list = res.data;
          this.listsnum()
        }
        if (res.code === 0 && url === "progress") {
         this.numlists = res.data
         this.numlists.map(item=>{
           item.progress = item.progress*100
         })
         console.log(res);
        }
      });
    },
    format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
    },
    listsnum() {
      this.countnum = this.todolist.length;
    },
    //内部方法
  },
  mounted() {
    this.getData("orderData");
    this.getData("todolist");
    this.getData("progress");
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