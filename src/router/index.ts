import { createRouter, createWebHistory } from "vue-router";

// 1. 引入路由组件.
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Case from "../views/Case.vue";
import Technology from "../views/Technology.vue";
import Contact from "../views/Contact.vue";

// 2. 定义一些路由。
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/case", component: Case },
  { path: "/technology", component: Technology },
  { path: "/contact", component: Contact },
];

// 3. 创建路由实例并传递 `routes` 配置
const router = createRouter({
  // 4. 内部提供了 HashHistory 模式的实现.
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
