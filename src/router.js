import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    alias: '/surah',
    name: 'surah',
    component: () => import('./pages/surah/index.vue'),
  },
  {
    path: '/surah/:id',
    name: 'tutorial-details',
    component: () => import('./pages/surah/detail.vue'),
  },
  //   {
  //     path: '/add',
  //     name: 'add',
  //     component: () => import('./components/AddTutorial'),
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
