import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: "我是初始的name"
    },
    mutations: {
        setName(state, data) {
            state.name = data
        }
    },
    actions: {},
    modules: {}
})