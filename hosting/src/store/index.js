import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

//import user from "./user";
import auth from "./module/auth"
 
Vue.use(Vuex);
 
const store = new Vuex.Store({
  modules: {
    //user
    auth
  },
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  plugins: [createPersistedState({
    key: "Katsupriner",     // プロジェクト単位の一意の識別子
    paths: ["auth.login"], // auth.js の loginキーは再度アクセスしても保持するようにする
    storage: localStorage  // 今回は localStorage に保存することにする
  })]
});
 
export default store;