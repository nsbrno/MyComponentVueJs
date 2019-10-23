import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home/Home";
import TextField from "../pages/TextField/Usage";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/TextField",
      name: "TextField",
      component: TextField
    }
  ]
});
