import { createRouter, createWebHistory } from "vue-router";

import home from "../components/HomePage.vue";
import about from "../components/AboutPage.vue";
import notFound from "../components/NotfoundPage.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/about',
        name: 'about',
        component: about
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: notFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router