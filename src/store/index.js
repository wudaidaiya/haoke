import Vue from 'vue'
import Vuex from 'vuex'
import storage from '@/utils/storage'
Vue.use(Vuex)

const TOKEN_KEY = 'HAOKE_USER'
export default new Vuex.Store({
  state: {
    user: storage.get(TOKEN_KEY)
  },
  mutations: {
    setUser(state, data) {
      state.user = data
      storage.set(TOKEN_KEY, state.user)
    }
  }
})
