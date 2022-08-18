import { createStore } from 'vuex'

export default createStore({
  state: {
    numberState:10
  },
  getters: {
  },
  mutations: {
    increment(state){
      return state.numberState++
    },
    decrement(state){
      return state.numberState--
    }
  },
  actions: {
  },
  modules: {
  }
})
