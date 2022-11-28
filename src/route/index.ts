import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const route: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'main',
        component: () => import('@/components/main/index.vue'),
        redirect:'/defult',
        children: [{
            path: 'detail',
            name: 'detail',
            component: () => import('@/components/main/block/detail.vue')
        },{
            path: 'defult',
            name: 'defult',
            component: () => import('@/components/main/block/defult.vue')
        },
        ]
    },

]


export const router = createRouter({
    history: createWebHistory(),
    routes: route
})






