import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify/lib';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import './fonts.googleapis.css';
//import '@mdi/font/css/materialdesignicons.css';

const vuetifyOptions = { };
Vue.use(Vuetify);

new Vue({
  el: '#app',
  vuetify: new Vuetify(vuetifyOptions),
  render: h => h(App)
});