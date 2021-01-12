import { createRouter, createWebHistory } from 'vue-router';

// 页面组件
import Home from './../pages/home/home';
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'name',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: 'hash',
  routes,
});

export default router;
