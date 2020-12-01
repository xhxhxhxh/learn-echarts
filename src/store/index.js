import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const env = process.env.NODE_ENV;

export default new Vuex.Store({
    modules: {

    },
    state: {
        rootUrl: env === 'production'? 'https://edu.9man.com': '',

    },
    mutations: {

    },
    actions: {},
    getters: {

    }
})
