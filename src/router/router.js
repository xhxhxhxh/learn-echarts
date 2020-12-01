import {constantRouterMap} from './routerList';
import VueRouter from 'vue-router'

const router = new VueRouter ({
    mode: 'history',
    routes: constantRouterMap,
});

export default router;
