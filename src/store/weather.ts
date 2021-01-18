import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    initial: true,
    cities: [],
  },
  getters: {
    getInitial: (state) => state.initial,
    getCities: (state) => state.cities,
  },
  mutations: {
    setInitial(state, payload) {
      state.initial = payload;
    },
    setCities(state, payload) {
      state.cities = payload;
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
});
