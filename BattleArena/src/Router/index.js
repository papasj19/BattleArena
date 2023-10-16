import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../Views/Profile.vue'
import ArenaManage from "../Views/ArenaManage.vue";
import NewAtt from "../Views/NewAtt.vue";
import BuySell from "../Views/BuySell.vue";
import GameArena from "../Views/GameArena.vue";
import LogSign from "../Views/LogSign.vue";
import NewGameArena from "../Views/NewGameArena.vue";
import PlayerRankings from "../Views/PlayerRankings.vue";

const routes = [
    {
        path: '/',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/',
        name: 'NewAtt',
        component: NewAtt
    },
    {
        path: '/',
        name: 'ArenaManager',
        component: ArenaManage
    },
    {
        path: '/',
        name: 'BuySell',
        component: BuySell
    },
    {
        path: '/',
        name: 'GameArena',
        component: GameArena
    },
    {
        path: '/',
        name: 'LogSign',
        component: LogSign
    },
    {
        path: '/',
        name: 'NewGameArena',
        component: NewGameArena
    },
    {
        path: '/',
        name: 'PlayerRankings',
        component: PlayerRankings
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router