import page404 from '@/views/404/404';
import Home from '@/views/home/Home';
import Svg from '@/views/svg/svg';
import AntV from '@/views/antV/AntV';
import DataV from '@/views/dataV/DataV';

export const constantRouterMap = [
    { path: '/', redirect: '/dataV' },
    { path: '/home', component: Home },
    { path: '/svg', component: Svg },
    { path: '/AntV', component: AntV },
    { path: '/dataV', component: DataV },
    { path: '/404', component: page404 },
    { path: '*', redirect: '/404'}
];
