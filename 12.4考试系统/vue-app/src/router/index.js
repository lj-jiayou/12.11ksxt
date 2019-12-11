import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Exam from "../components/main/exam.vue";
import Result from "../components/main/result.vue";
import Welcome from "../components/main/welcome.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
    children: [
      {
        path: "/",
        component: () => import("../components/main/welcome.vue")
      },
      {
        path: "/welcome",
        redirect: "/login/welcome"
      },
      {
        path: "/login/exam",
        component: Exam
      },
      {
        path: "/login/result",
        component: Result
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
