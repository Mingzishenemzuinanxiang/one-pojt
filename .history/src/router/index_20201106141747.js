import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../views/layout/Layout.vue'
import Login from '../views/layout/Login.vue'

Vue.use(VueRouter)

const routes = [{
        path: '',
        component: layout,
        children: [{
                path: '/home',
                name: 'home',
                component: () =>
                    import ('@/views/home/Home'),
                meta: {
                    title: "专业管理系统0.1bate",
                    name: "home",
                },
            }, {
                path: '/label',
                name: 'label',
                component: () =>
                    import ('@/views/label/Labelr'),
                meta: {
                    title: "专业管理系统0.1bate--标签管理",
                    name: "label",
                },
            }, {
                path: '/excel',
                name: 'excel',
                component: () =>
                    import ('@/views/excel/Excel'),
                meta: {
                    title: "专业管理系统0.1bate--excel导出",
                    name: "excel",
                },
            }, {
                path: '/article',
                name: 'article',
                component: () =>
                    import ('@/views/article/edit'),
                meta: {
                    title: "专业管理系统0.1bate--编辑文章",
                    name: "lists",
                },

            },

            {
                path: '/lists',
                name: 'lists',
                component: () =>
                    import ('@/views/article/lists'),
                meta: {
                    title: "专业管理系统0.1bate--文章列表",
                    name: "lists",
                },

            },
            {
                path: '/details',
                name: 'details',
                component: () =>
                    import ('@/views/article/details'),
                meta: {
                    title: "专业管理系统0.1bate--文章详情",
                    name: "lists",
                },

            },
            {
                path: '/uploads',
                name: 'uploads',
                component: () =>
                    import ('@/views/file/uploads'),
                meta: {
                    title: "专业管理系统0.1bate--文章详情",
                    name: "uploads",
                },

            },
            {
                path: '/statistics',
                name: 'statistics',
                component: () =>
                    import ('@/views/statistics/statistics'),
                meta: {
                    title: "专业管理系统0.1bate--统计",
                    name: "statistics"
                },

            },
            {
                path: '/edit',
                name: 'edit',
                component: () =>
                    import ('@/views/article/edit'),
                meta: {
                    title: "专业管理系统0.1bate--修改文章",
                    name: "lists",
                },

            },
        ]
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
                title: "登录",
                name: 'login',
            },
        }, {
            path: '/register',
            name: 'register',
            component: () =>
                import ('@/views/login/Register'),
            meta: {
                title: "注册",
                name: 'register',
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

//路由静止
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}


router.beforeEach((to, form, next) => {
    document.title = to.meta.title
    if (!localStorage.getItem('user') && to.name !== 'login' && to.name !== 'register') {
        next({ name: "login" })
    }
    if (to.path === "/") {
        next({ name: "home" })
    }
    next()
})
export default router