import Vue from 'vue'

const auth = {
    state: {
        login: {
            name: null,
            expire: 0
        }
    },
    getters: {
        name: state => (state.login.name ? state.login.name : "")
    },
    mutations: {
        SET_LOGIN_INFO: (state, login) => {
            state.login.name = login.name
            state.login.expire = Math.floor(1000 * login.expire)
        }
    },
    actions: {
        setLoginInfo({commit}, login) {
            commit("SET_LOGIN_INFO", login)
        }
    }
}

export default auth