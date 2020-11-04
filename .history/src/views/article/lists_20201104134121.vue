<template>
  <div>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <template>
        <el-table :data="tabelData" style="width: 100%" height="250">
          <el-table-column fixed prop="title" label="标题" width="150">
          </el-table-column>
          <el-table-column prop="source" label="来源" width="120">
          </el-table-column>
          <el-table-column prop="category" label="类目" width="120">
          </el-table-column>
          <el-table-column prop="abstract" label="摘要" width="120">
          </el-table-column>
          <el-table-column prop="date" label="发表时间" width="300">
          </el-table-column>
          <el-table-column prop="star" label="星级" width="120">
            <template slot-scope="{ row }">
              <el-rate :value="row.star" :colors="colors"> </el-rate>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="150">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                size="small"
                type="info"
                >查看</el-button
              >
              <el-button type="primary" size="small" >编辑</el-button>
              <el-button type="warning" size="small" >删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template></el-card
    >
  </div>
</template>

     </el-card>
     
</div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      tabelData: [],
    };
  },
  components: {
    //注册组件
  },
  methods: {
    getData() {
      this.$get("article/allArticle").then((res) => {
        if (res.code === 200) {
          console.log(res);
          this.tabelData = res.data;
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