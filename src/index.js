import Vue from 'vue';
import VueRouter from 'vue-router';
import router from '@/router/router';
import app from './app.vue';
import axios from '@/axios'
import store from '@/store';
import echarts from 'echarts'
import 'normalize.css';
import './less/index.less';
import { ConfigProvider, Drawer, Button, Radio, Row, Col, Card, Tooltip, Icon, Divider, Tabs, DatePicker } from 'ant-design-vue';

Vue.config.productionTip = false;
axios.defaults.withCredentials = false;

Vue.prototype.$axios = axios;
Vue.prototype.$echarts = echarts;


//全局组件
// Vue.component(Button.name, Button);
Vue.use(ConfigProvider);
Vue.use(Drawer);
Vue.use(Button);
Vue.use(Radio);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Tooltip);
Vue.use(Icon);
Vue.use(Divider);
Vue.use(Tabs);
Vue.use(DatePicker);

Vue.use(VueRouter);

new Vue({
    el: '#app',
    data: {
        message: '哈哈哈'
    },
    render: c => c(app),
    router,
    store
});
