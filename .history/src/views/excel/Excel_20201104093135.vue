<template>
  <div>
    <el-table
      :data="
        tabalLists.slice((currentPage - 1) * pagesize, currentPage * pagesize)
      "
      style="width: 100%"
    >
      <el-table-column fixed prop="NAME" label="名称">
        <template slot-scope="{ row }">
          <div>
            <span>{{ row.NAME }}</span>
            <!-- <img :src="row.PICTURE_COMPERSS_PATH" width="100" height="100" /> -->
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号">
      </el-table-column>
      <el-table-column prop="ORI_PRICE" label="原价"> </el-table-column>
      <el-table-column prop="PRESENT_PRICE" label="现价"> </el-table-column>

      <el-table-column align="right" width="200">
        <template slot="header">
          <el-input
            v-model="search"
            placeholder="输入关键字搜索"
            @input="save"
          />
        </template>
        <template slot-scope="{row}">
          <el-popover placement="right" width="400" trigger="click">
            <el-form
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="商品名称" prop="name">
                <el-input v-model="row.NAME"></el-input>
              </el-form-item>
              <el-form-item label="商品价格" prop="price">
                <el-input v-model.number="row.ORI_PRICE"></el-input>
              </el-form-item>
              <el-form-item>
              </el-form-item>
            </el-form>
            <el-button slot="reference" type="success" plain> 编辑 </el-button>
          </el-popover>

          <el-button
            @click.native.prevent="deleteRow(row)"
            type="danger"
            plain
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40, 50]"
      :page-size="pagesize"
      :total="tabalLists.length"
      layout="total, sizes, prev, pager, next, jumper"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "excel",
  props: {},
  data() {
    return {
      search: "",
      tabalLists: [],
      pagesize: 10,
      currentPage: 1,
      rules: {},
    };
  },
  components: {
    //注册组件
  },
  methods: {
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
    },
    deleteRow(row) {
      this.tabalLists.splice(this.tabalLists.findIndex(item=>item===row),1)
    },
    save() {
        this.tabalLists = this.tabalLists.filter((item)=>{
          return JSON.stringify(Object.values(item)).includes(this.search);
        })
    },

    getData() {
      this.$get("tableData?limit=10&&page=1").then((res) => {
        if (res.code === 0) {
          this.tabalLists = res.data;
        }
      });
    },
    //内部方法
  },
  mounted() {
    this.getData();
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