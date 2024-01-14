import {createRouter, createWebHistory} from 'vue-router'
import Profile from '../Views/Profile.vue'
import ArenaManage from "../Views/ArenaManage.vue";
import NewAtt from "../Views/NewAtt.vue";
import BuySell from "../Views/BuySell.vue";
import GameArena from "../Views/GameArena.vue";
import LogSign from "../Views/LogSign.vue";
import NewGameArena from "../Views/NewGameArena.vue";
import PlayerRankings from "../Views/PlayerRankings.vue";
import App from "../App.vue";
import home from "../Views/DefaultStartScreen.vue";
import DefaultStartScreen from "../Views/DefaultStartScreen.vue";
import Home from "../Views/Home.vue";
import GameArenaBlank from "../Views/GameArenaBlank.vue";
import MoreProfile from "../Views/MoreProfile.vue";

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
        path: '/',
        name: 'LogSign',
        component: LogSign
    },
    {
        path: '/PlayerRankings',
        name: 'PlayerRankings',
        component: PlayerRankings
    },
    {
        path: '/MoreProfile',
        name: 'MoreProfile',
        component: MoreProfile
    },
    {
        path: '/NewGameArena',
        name: 'NewGameArena',
        component: NewGameArena
    },
    {
        path: '/GameArenaBlank',
        name: 'GameArenaBlank',
        component: GameArenaBlank
    },
    {
        path: '/GameArena',
        name: 'GameArena',
        component: GameArena
    },
    {
        path: '/NewAtt',
        name: 'NewAtt',
        component: NewAtt
    }    /*,
    {
        path: '/',
        name: 'DefaultStartScreen',
        component: DefaultStartScreen
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home

    }*/
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router