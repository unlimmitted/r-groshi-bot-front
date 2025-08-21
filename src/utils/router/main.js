import {createRouter, createWebHistory} from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/contacts',
            component: () => import('@/components/Contacts.vue'),
        },
        {
            path: '/debts',
            component: () => import('@/components/Debts.vue'),
        },
        {
            path: '/new-duty',
            component: () => import('@/components/NewDuty.vue'),
        }
    ]
});

export default router;