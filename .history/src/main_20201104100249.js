import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//请求
import { post, get } from './utils/https'
//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$get = get;
//请求
//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//element-ui
//时间
import Vcharts from 'v-charts';
Vue.use(Vcharts)
    //下载excel
import JsonExcel from "vue-json-excel";
Vue.component("downloadExcel", JsonExcel);


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')