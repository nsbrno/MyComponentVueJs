import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home/Home";
import TextField from "../pages/TextField/Usage";
import UserAuthentication from "../pages/UserAuthentication/Usage";
import MyDialogMessage from "../pages/MyDialogMessage/Usage"
import RequestRestApi from "../pages/RequestRestApi/Usage"

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
    },
    {
      path: "/UserAuthentication",
      name: "UserAuthentication",
      component: UserAuthentication
    },
    {
      path: "/MyDialogMessage",
      name: "MyDialogMessage",
      component: MyDialogMessage
    },
    {
      path: "/RequestRestApi",
      name: "RequestRestApi",
      component: RequestRestApi
    }
  ]
});
