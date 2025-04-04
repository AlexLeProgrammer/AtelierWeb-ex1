import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/ex1',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Exercice1Page.vue') }],
  },
  {
    path: '/ex2',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/Exercice2.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
