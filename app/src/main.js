import { createApp,defineComponent} from 'vue'
import App from './App.vue'
import Router from './router/index'
import Store from './store/index'
import VueCompositionApi from '@vue/composition-api'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import locale from 'element-plus/lib/locale/lang/zh-cn'

var axios = require('axios')
axios.defaults.baseURL = 'http://47.93.255.191:2021/api'//http://47.94.34.136:8443/api
//axios.defaults.withCredentials = true
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据


defineComponent.prototype.$axios = axios

const app = createApp(App);
app.use(Router);
app.use(Store);
app.use(ElementPlus,{locale});
app.mount('#app');
