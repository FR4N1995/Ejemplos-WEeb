import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import nueva from '../views/nueva.vue'
import fotos from '../views/foto.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/nueva',
        name: 'nueva',

        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/nueva.vue')
    },
    {
        path: '/foto/:id',
        name: 'foto',

        component: () =>
            import ( /* webpackChunkName: "Fotos" */ '../views/foto.vue')

    }
]

const router = new VueRouter({
    routes
})

export default router