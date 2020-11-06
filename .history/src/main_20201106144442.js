import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//请求
import { post, get } from './utils/https'
import { Api } from './utils/request'
//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$api = Api;


//请求
//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//element-ui
//表图
import Vcharts from 'v-charts';
Vue.use(Vcharts)
    //自定义组件
import Charts from './components/charts/Charts.vue'
Vue.component("charts", Charts)
    //下载excel
import JsonExcel from "vue-json-excel";
Vue.component("download-excel", JsonExcel);
//mark 编辑器
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)


Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')