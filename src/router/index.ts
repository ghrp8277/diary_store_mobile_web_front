import Vue from 'vue';
import VueRouter, { NavigationGuardNext, Route, RouteConfig } from 'vue-router';
import {
  saveAccessTokenToCookie,
  saveUserToCookie,
  getAccessFromCookie,
  getUserFromCookie,
} from '@/services/cookies';
import { useMainStore } from '@/services/pinia/main';
import { storeToRefs } from 'pinia';

Vue.use(VueRouter);

function getCookieToMatched() {
  const token = getAccessFromCookie();
  const user = getUserFromCookie();

  if (token && user) return true;
  else return false;
}

export function requireAuth(
  to: Route,
  from: Route,
  next: NavigationGuardNext<Vue>
) {
  const store = useMainStore();
  const { isLogin } = storeToRefs(store);

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    const username = to.query.username as string;
    const token = to.query.token as string;

    if (getCookieToMatched()) {
      next();
    } else {
      if (
        to.meta &&
        to.matched.some((record) => record.meta.authRequired) &&
        !username &&
        !token
      ) {
        next('/404');
        return;
      }

      saveUserToCookie(username);
      saveAccessTokenToCookie(token);

      next();
    }
  } else {
    if (
      to.meta &&
      to.matched.some((record) => record.meta.authRequired) &&
      !isLogin.value
    ) {
      next('/login');
      return;
    }
    next();
  }
}

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/MainView.vue'),
    meta: { authRequired: true },
    beforeEnter: requireAuth,
    redirect: 'home',
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
        path: 'style/:id',
        name: 'styleDetail',
        component: () => import('@/views/home/StyleDetailView.vue'),
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
      {
        path: 'detail/:id',
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
      {
        path: 'search',
        name: 'search',
        props: (route) => Object.assign({}, route.query, route.params),
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
        redirect: { name: 'notices' },
        children: [
          {
            path: 'list',
            name: 'notices',
            component: () => import('@/views/myPage/cs/NoticeView.vue'),
          },
          {
            path: 'faq',
            name: 'faq',
            component: () => import('@/views/myPage/cs/FaqView.vue'),
          },
          {
            path: ':id',
            name: 'notice',
            component: () => import('@/views/myPage/cs/NoticeDetailView.vue'),
            props: (route) => {
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
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/SignUpView.vue'),
  },
  {
    path: '/payment/ready',
    component: () => import('@/views/myPage/payment/PaymentReadyView.vue'),
  },
  {
    path: '*',
    redirect: '/404',
  },
  {
    path: '/404',
    component: () => import('@/views/error/404.vue'),
  },
  {
    path: '/500',
    component: () => import('@/views/error/500.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
