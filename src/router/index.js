//createRouter:创建router实例对象
//createWebHistory：创建history模式的路由

import { createRouter, createWebHistory } from "vue-router";
import login from "@/views/login/index.vue";
import layout from "@/views/layout/index.vue";
import home from "@/views/home/index.vue";
import Category from "@/views/Category/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  //配置path和component对应关系的位置
  routes: [
    {
      path: "/",
      component: layout,
      children: [
        {
          path: "",
          component: home,
        },
        {
          path: "Category/:id",
          component: Category,
        },
      ],
    },
    {
      path: "/login",
      component: login,
    },
  ],
});

export default router;
