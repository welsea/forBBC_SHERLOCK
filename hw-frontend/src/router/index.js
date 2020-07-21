import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@/components/Main'
import Work from '@/components/Work'
import Commend from '@/components/Commend'
import Message from '@/components/Message'
import Notes from '@/components/Notes'
import Add from '@/components/admin/Add'
import Search from '@/components/Search'
import Item from '@/components/Item'


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
            path: '/item',
            component: Item,
            name:'item',
            meta: {
            title: 'item'
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
        },
        {
            path: '/housekeeper',
            component: Add,
            meta: {
            title: 'housekeeper'
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
            title: 'search'
            }
        }
    ]
})

export default router
