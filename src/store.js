import Vue from 'vue'
import Vuex from 'vuex'
import { SITE_DESCRIPTION } from "@/const/description"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    description: SITE_DESCRIPTION
  },
  mutations: {
    SET(state, { field, value }) { state[field] = value }
  },
  actions: {
    set({ commit }, { field, value }) { commit('SET', { field, value }) },
  },
  getters: {
    description(state) { return state.description }
  }
})
