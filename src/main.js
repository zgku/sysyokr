import Vue from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/antd.css";
import router from "./router";
import store from "./store";
import { Button } from "ant-design-vue";
Vue.use(Button);
Vue.config.productionTip = false;
Vue.use(Antd);
//引入axios
import axios from 'axios'
Vue.prototype.$ajax = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
