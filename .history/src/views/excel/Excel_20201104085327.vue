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
        <template slot-scope="scope">
          <el-popover placement="right" width="400" trigger="click">
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              label-width="100px"
              class="demo-ruleForm"
            >
              <el-form-item label="活动名称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
              </el-form-item>
              <el-form-item label="活动区域" prop="region">
                <el-select
                  v-model="ruleForm.region"
                  placeholder="请选择活动区域"
                >
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动时间" required>
                <el-col :span="11">
                  <el-form-item prop="date1">
                    <el-date-picker
                      type="date"
                      placeholder="选择日期"
                      v-model="ruleForm.date1"
                      style="width: 100%"
                    ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-form-item prop="date2">
                    <el-time-picker
                      placeholder="选择时间"
                      v-model="ruleForm.date2"
                      style="width: 100%"
                    ></el-time-picker>
                  </el-form-item>
                </el-col>
              </el-form-item>
              <el-form-item label="即时配送" prop="delivery">
                <el-switch v-model="ruleForm.delivery"></el-switch>
              </el-form-item>
              <el-form-item label="活动性质" prop="type">
                <el-checkbox-group v-model="ruleForm.type">
                  <el-checkbox
                    label="美食/餐厅线上活动"
                    name="type"
                  ></el-checkbox>
                  <el-checkbox label="地推活动" name="type"></el-checkbox>
                  <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                  <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="特殊资源" prop="resource">
                <el-radio-group v-model="ruleForm.resource">
                  <el-radio label="线上品牌商赞助"></el-radio>
                  <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="活动形式" prop="desc">
                <el-input type="textarea" v-model="ruleForm.desc"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')"
                  >修改</el-button
                >
              </el-form-item>
            </el-form>

            <el-button slot="reference" type="success" plain> 编辑 </el-button>
          </el-popover>

          <el-button
            @click.native.prevent="deleteRow(scope.$index)"
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
      form: {},
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
    deleteRow(scope, $index) {},

    submitForm() {},

    save() {
      console.log(this.search);
    },

    getData() {
      this.$get("tableData?limit=10&&page=1").then((res) => {
        if (res.code === 0) {
          console.log(res.data);
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