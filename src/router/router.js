import { createRouter, createWebHistory } from "vue-router";

import home from "../components/HomePage.vue";
import about from "../components/AboutPage.vue";
import contact from "../components/ContactPage.vue";
import notFound from "../components/NotfoundPage.vue";
import portfolio from "../components/MyPortfolio.vue";



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
        path: '/portfolio',
        name: 'portfolio',
        component: portfolio
    },
    {
        path: '/contact',
        name: 'contact',
        component: contact
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: notFound
    },
     
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router