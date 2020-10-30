import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../views/layout/Layout.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: layout,
        children: [{
            path: '',
            name: 'Home',
            component: () =>
                import ('@/views/Home')
        }]
    },



    {
        path: '*',
        component: () =>
            import ('@/views/error/error')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, form, next) => {
    next()
})
export default router