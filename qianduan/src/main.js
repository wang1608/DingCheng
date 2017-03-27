import Vue from 'vue'
import App from './App.vue'
import router from './router';


//引入了elemment UI框架
import 'element-ui/lib/theme-default/index.css'
import ElementUI from 'element-ui';

Vue.use(ElementUI); //使用use 初始化插件


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
