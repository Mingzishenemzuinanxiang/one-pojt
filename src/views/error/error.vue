<template>
  <div @change="dian">
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      radio: "1",
      checkList: ["复选框 A", "复选框 B"],
    };
  },
  components: {
    //注册组件
  },
  methods: {
    //内部方法
    dian(e) {
      // console.log(e.target.value)
      console.log(this.radio1);
      console.log(this.radio2);

      this.$message.success(`点击了${e.target.value}`);
    },
  },
  mounted() {
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