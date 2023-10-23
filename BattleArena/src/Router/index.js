import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../Views/Profile.vue'
import ArenaManage from "../Views/ArenaManage.vue";
import NewAtt from "../Views/NewAtt.vue";
import BuySell from "../Views/BuySell.vue";
import GameArena from "../Views/GameArena.vue";
import LogSign from "../Views/LogSign.vue";
import NewGameArena from "../Views/NewGameArena.vue";
import PlayerRankings from "../Views/PlayerRankings.vue";
import App from "../App.vue";

const routes = [

    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    },
    {
        path: '/ArenaManage',
        name: 'ArenaManager',
        component: ArenaManage
    },
    {
        path: '/BuySell',
        name: 'BuySell',
        component: BuySell
    },
    {
        path: '/logSign',
        name: 'LogSign',
        component: LogSign
    },
    {
        path: '/PlayerRankings',
        name: 'PlayerRankings',
        component: PlayerRankings
    },
    {
        path: '/NewGameArena',
        name: 'NewGameArena',
        component: NewGameArena
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router