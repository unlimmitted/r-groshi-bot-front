import {createRouter, createWebHistory} from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/contacts',
            component: () => import('@/components/Contacts.vue'),
        }
    ]
});

export default router;