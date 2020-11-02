import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import layout from '../views/layout/Layout.vue'
import Login from '../views/layout/Login.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        component: layout,
        children: [{
            path: '/home',
            name: 'home',
            component: () =>
                import ('@/views/home/Home'),
            meta: {
                title: "专业管理系统0.1bate",
            },
        }, ]
    },
    {
        path: '/l',
        component: Login,
        children: [{
            path: '/login',
            name: 'login',
            component: () =>
                import ('@/views/login/Login'),
            meta: {
                title: "登录"
            },
        }, {
            path: '/register',
            name: 'register',
            component: () =>
                import ('@/views/login/Register'),
            meta: {
                title: "注册"
            }
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
    document.title = to.meta.title
    if (!localStorage.getItem('user') && to.name !== 'login' && to.name !== 'register') {
        next({ name: "login" })
    }
    next()
})
export default router