import { createWebHistory, createRouter } from "vue-router";
import Contact from '../vue/views/Contact.vue';
import NotFound from '../vue/views/NotFound.vue';

const routes = [
    {
        path: '/',
        name: 'contact',
        component: Contact,
        // children: []
    },
    //add paths here before 404
    {
        path: '/error',
        name: 'error',
        component: NotFound,
    },
    {
        path: '/:catchAll(.*)',
        redirect: '/error'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkExactActiveClass: 'active',
});

export default router;