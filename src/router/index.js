import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/", // 首页
    name: "homePage",
    component: () => import("@/views/home/index.vue"),
    meta: {
      needLogin: false, // 需要登录
    },
    children: [
      {
        path: "/back", // 返回界面
        name: "back",
        component: () => import("@/views/backMange/index.vue"),
        meta: {
          needLogin: false, // 需要登录
        },
      },

      {
        path: "/backset", //设置界面
        name: "backset",
        component: () => import("@/views/backSet/index.vue"),
        meta: {
          needLogin: false, // 需要登录
        },
      },
    ],
  },
  {
    path: "/login", // 登录页面
    name: "homePloginage",
    component: () => import("@/views/login/index.vue"),
    meta: {
      needLogin: false, // 需要登录
    },
  },
];
const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
});

export default router;
