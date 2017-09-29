import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  step: 0
}

const getters = {
  getCount: state => {
    return state.step
  }
}

const mutations = {
  incrementCount(state) {
    state.step++
  },
  decrementCount(state) {
    state.step--
  }
}

const actions = {
  incrementCount(context) {
    context.commit('incrementCount')
  },
  decrementCount(context) {
    context.commit('decrementCount')
  }
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
