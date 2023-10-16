import { createRouter, createWebHistory } from 'vue-router'
import Basket from '../views/Person.vue'

const routes = [
    {
        path: '/',
        name: 'Person',
        component: Person
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router