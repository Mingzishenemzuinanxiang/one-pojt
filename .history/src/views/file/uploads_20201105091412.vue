<template>
  <div>
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <el-col :span="12" :offset="0">
        <el-upload
          class="upload-demo"
          :action="uploadsurl"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :before-remove="beforeRemove"
          multiple
          :limit="3"
          :on-exceed="handleExceed"
          :file-list="fileList"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">
            只能上传jpg/png文件，且不超过500kb
          </div>
        </el-upload>
      </el-col>
      <el-col :span="12" :offset="0">
        <button class="btn" @click="toggleShow">设置头像</button>
        <my-upload
          @crop-success="cropSuccess"
          @crop-upload-success="cropUploadSuccess"
          @crop-upload-fail="cropUploadFail"
          v-model="show"
          :width="200"
          :height="200"
          img-format="png"
          :size="size"
          langType="zh"
          :noRotate="false"
          field="Avatar1"
          :url="uploadsurl"
        ></my-upload>
        <img :src="imgDataUrl" />
      </el-col>
    </el-card>
  </div>
</template>

<script>
import myUpload from "vue-image-crop-upload";

export default {
  name: "",
  props: {},
  data() {
    return {
      fileList: [],

      imgDataUrl: "",
      show: false,
      size: 2.1,
      uploadsurl:"upload",
    };
  },
  components: {
    myUpload,
    //注册组件
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },

    toggleShow() {
      this.show = !this.show;
    },
    cropSuccess(imgDataUrl, field) {
      console.log("-------- crop success --------", imgDataUrl, field);
      this.$post()

    },
    //上传成功回调
    cropUploadSuccess(jsonData, field) {
      console.log("-------- upload success --------");
      this.imgDataUrl = jsonData.files.Avatar1;
      console.log(jsonData);
      console.log("field: " + field);
    },
    //上传失败回调
    cropUploadFail(status, field) {
      console.log("-------- upload fail --------");
      console.log("上传失败状态" + status);
      console.log("field: " + field);
    },
    //内部方法
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