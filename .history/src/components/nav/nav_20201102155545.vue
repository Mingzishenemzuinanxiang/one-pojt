<template>
 <div>
<div class="y1">
      <el-col :span="4">
          <el-card class="bar-blue">
            <div class="grid-content bg-purple" style="text-align: center;width: 81px;">
              <i class="el-icon-message"></i>
              <countTo :startVal='startVal' :endVal='CounterData.messages' :duration='3600'></countTo>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card class="bar-c">
            <div class="grid-content bg-purple" style="text-align: center;width: 81px;">
              <i class="el-icon-bank-card"></i>
              <countTo :startVal='startVal' :endVal='CounterData.purchases' :duration='3600'></countTo>

            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card class="bar-red">
            <div class="grid-content bg-purple" style="text-align: center;width: 81px;">
              <i class="el-icon-shopping-cart-2"></i>
              <countTo :startVal='startVal' :endVal='CounterData.shopping' :duration='3600'></countTo>
            </div>
          </el-card>
        </el-col>
        <el-col :span="4">
          <el-card class="bar-gre">
            <div class="grid-content bg-purple" style="text-align: center;width: 81px;">
              <i class="el-icon-user"></i>
              <countTo :startVal='startVal' :endVal='CounterData.visits' :duration='3600'></countTo>
            </div>
          </el-card>
        </el-col>
    </div>
</div>
</template>

<script>
import countTo from 'vue-count-to';

export default {
 name: '',
 props:{},
 data () {
 return {
 CounterData: {
        messages: 0,
        purchases: 0,
        shopping: 0,
        visits: 0,
      },
      startVal:0
   }
 },
 components: {
    countTo

//注册组件
},
 methods: {
   getGetData(url) {
      if (url) {
        this.$get(url).then((res) => {
          if (res.code === 0 && url === "homeData") {
            this.CounterData = res.data;
          }
        });
      } else {
      }
    },
//内部方法
},
 mounted() {
    this.getGetData("homeData");

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
.y1{
    display: flex;
    justify-content: space-around;
}
.bar-gre{
  background: greenyellow;
}
.bar-red{
  background: red;
}
.bar-c{
  background: rgb(211, 39, 211);
}

.bar-blue{
  background: rgb(39, 211, 182);
}

</style>