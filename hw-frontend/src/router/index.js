import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@/components/Main'
import Work from '@/components/Work'
import Commend from '@/components/Commend'
import Message from '@/components/Message'
import Notes from '@/components/Notes'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            component:Main,
            meta: {
            title: 'main'
            }
        },
        {
            path:'/main ',
            component:Main,
            meta:{
                title:'main'
            }
        },
        {
            path: '/work',
            component: Work,
            meta: {
            title: 'work'
            }
        },
        {
            path: '/commend',
            component: Commend,
            meta: {
            title: 'commend'
            }
        },
        {
            path: '/message',
            component: Message,
            meta: {
            title: 'message'
            }
        },
        {
            path: '/notes',
            component: Notes,
            meta: {
            title: 'notes'
            }
        }
    ]
})

export default router
