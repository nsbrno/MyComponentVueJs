import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify'
import myplugin from '../plugin'
import routeApp from './routes/routeApp';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css';
import './main.css'

Vue.config.productionTip = false;
Vue.use(myplugin);

new Vue({
  el: '#app',
  router: routeApp,
  vuetify,
  render: h => h(App)
});