import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
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
        path: 'best',
        name: 'best',
        component: () => import('@/views/home/BestContent.vue'),
      },
      {
        path: 'new',
        name: 'new',
        component: () => import('@/views/home/NewContent.vue'),
      },
      {
        path: 'payment',
        name: 'payment',
        component: () => import('@/components/myPage/PaymentHistory.vue'),
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
