import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  // Uncomment and add routes if needed
  // {
  //   path: '/background',
  //   name: 'background',
  //   component: BackgroundPage
  // },
  // {
  //   path: '/portfolio',
  //   name: 'portfolio',
  //   component: PortfolioPage
  // },
  // {
  //   path: '/contact',
  //   name: 'contact',
  //   component: ContactPage
  // },
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'notFound',
  //   component: NotFoundPage
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
