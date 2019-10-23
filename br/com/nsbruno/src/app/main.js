import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify/lib';
import routeApp from './routes/routeApp';
//import 'vuetify/dist/vuetify.min.css';
//import 'material-design-icons-iconfont/dist/material-design-icons.css';
//import '@mdi/font/css/materialdesignicons.css';

const vuetifyOptions = { };
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router: routeApp,
  vuetify: new Vuetify(vuetifyOptions),
  render: h => h(App)
});