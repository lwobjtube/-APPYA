import Vue from 'vue'
import App from './App.vue' //引入app.vue
import router from './router'  //引入路由配置
import ElementUI from 'element-ui'  //
import 'element-ui/lib/theme-chalk/index.css'
import "./api/api"
Vue.use(ElementUI);
Vue.$el = ElementUI
Vue.config.productionTip=false;  //，消息提示的环境配置关闭

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')








