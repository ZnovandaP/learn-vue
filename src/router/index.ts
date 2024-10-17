import {
  createRouter, type RouteRecordRaw, createWebHistory,
} from 'vue-router';

import HomeView from '@/views/HomeView.vue';
import PostsView from '@/views/PostsView.vue';
// import PostView from '@/views/PostView.vue';
import NotFoundView from '@/views/NotFoundView.vue';

import UserView from '@/views/UserView.vue';
import UserAbout from '@/components/CompositionApi/UserAbout.vue';
import UserProfile from '@/components/CompositionApi/UserProfile.vue';
import UserSettings from '@/components/CompositionApi/UserSettings.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView,
  },
  {
    path: '/user',
    component: UserView,
    redirect: '/404',
    children: [
      {
        path: '',
        component: UserAbout,
        alias: 'user-about', // alias route
      },
      {
        path: 'user-profile',
        component: UserProfile,
      },
      {
        path: 'user-settings',
        component: UserSettings,
      },
    ],
  },
  {
    path: '/posts',
    component: PostsView,

  },
  {
    path: '/post/:id(\\d+)', // regex dynamic path
    component: () => import('@/views/PostView.vue'),
  },
  {
    path: '/pinia',
    component: () => import('@/views/PiniaDemo.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/CounterPiniaView.vue'),
        alias: 'counter',
      },
      {
        path: 'products',
        component: () => import('@/views/ProductsView.vue'),
      },
      {
        path: 'cart',
        component: () => import('@/views/CartView.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  // scrollBehavior(to, from, savedPosition) {

  // },
});

export default router;
