import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/MainView.vue'),
    redirect: 'store',
    children: [
      {
        path: 'store',
        name: 'content',
        component: () => import('@/views/MainTabView.vue'),
        redirect: {
          name: 'home',
        },
        children: [
          {
            path: 'home',
            name: 'home',
            component: () => import('@/views/home/HomeContentView.vue'),
          },
          {
            path: 'best',
            name: 'best',
            component: () => import('@/views/home/BestContentView.vue'),
          },
          {
            path: 'new',
            name: 'new',
            component: () => import('@/views/home/NewContentView.vue'),
          },
          {
            path: 'style',
            name: 'style',
            component: () => import('@/views/home/StyleContentView.vue'),
          },
          {
            path: ':id',
            name: 'detail',
            component: () => import('@/views/home/DetailContentView.vue'),
            props(route) {
              const id = Number.parseInt(route.params.id);

              if (Number.isNaN(id)) {
                return 0;
              }

              return {
                id,
              };
            },
          },
        ],
      },
      {
        path: 'search',
        name: 'search',
        component: () => import('@/views/home/SearchView.vue'),
      },
      {
        path: 'payment',
        name: 'payment',
        component: () => import('@/views/myPage/PaymentHistoryView.vue'),
      },
      {
        path: 'favorite',
        name: 'favorite',
        component: () => import('@/views/myPage/FavoriteView.vue'),
      },
      {
        path: 'service',
        name: 'service',
        component: () => import('@/views/myPage/ServiceCenterView.vue'),
        redirect: { name: 'notice' },
        children: [
          {
            path: 'notice',
            name: 'notice',
            component: () => import('@/components/myPage/NoticeView.vue'),
          },
          {
            path: 'faq',
            component: () => import('@/components/myPage/FaqView.vue'),
          },
        ],
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
