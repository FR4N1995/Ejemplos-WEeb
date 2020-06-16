import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Inicio',

        component: () =>
            import ( /* webpackChunkName: "inicio" */ '../views/inicio.vue')
    }, {
        path: '/editar/:id',
        name: 'Editar',

        component: () =>
            import ( /* webpackChunkName: "inicio" */ '../views/editar.vue')
    },
    {
        path: '/agregar',
        name: 'agregar',

        component: () =>
            import ( /* webpackChunkName: "inicio" */ '../views/agregar.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router