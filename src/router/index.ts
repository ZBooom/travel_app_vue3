import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: () => import("../views/ZhangIndex.vue"),
    },
    // ZhangCdetail.vue - 内容详情页
    {
      path: "/content-detail/:id",
      name: "content-detail",
      component: () => import("../views/ZhangCdetail.vue"),
    },
    // ZhangMine.vue
    {
      path: "/mine",
      name: "mine",
      component: () => import("../views/ZhangMine.vue"),
    },
    // ZhangExp.vue
    {
      path: "/exp",
      name: "exp",
      component: () => import("../views/ZhangExp.vue"),
    },
    // ZhangItinerary.vue
    {
      path: "/itinerary",
      name: "itinerary",
      component: () => import("../views/ZhangItinerary.vue"),
    },
    // ZhangSetting.vue
    {
      path: "/setting",
      name: "setting",
      component: () => import("../views/ZhangSetting.vue"),
    },
    // ZhangExpSearch.vue
    {
      path: "/exp-search",
      name: "exp-search",
      component: () => import("../views/ZhangExpSearch.vue"),
    },
    // Zhang404.vue - 404错误页面
    {
      path: "/404",
      name: "404",
      component: () => import("../views/Zhang404.vue"),
    },
    // 捕获所有未匹配的路由，重定向到404页面
    {
      path: "/:pathMatch(.*)*",
      redirect: "/404",
    },
  ],
});

export default router;
