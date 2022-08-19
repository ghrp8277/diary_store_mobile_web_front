import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { component } from 'vue/types/umd';
import HomeView from '../views/HomeView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    redirect: 'content',
    children: [
      {
        path: 'content',
        name: 'content',
        component: () => import('@/views/home/HomeContent.vue'),
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('@/views/home/SearchView.vue'),
      },
      {
        path: 'sort',
        name: 'sort',
        component: () => import('@/views/home/SortContent.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
