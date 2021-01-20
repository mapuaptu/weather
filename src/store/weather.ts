import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

const API = 'https://api.openweathermap.org/data/2.5/weather?';
const APIKEY = '823cfe3ba05e3def094c0edb9e624984';

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
    deleteCity(state, payload) {
      state.cities = state.cities.filter((city: { name: string }) => city.name !== payload);
    },
  },
  actions: {
    async loadDataFromCoordinates({ commit }, { latitude, longitude }) {
      try {
        const response = await fetch(`${API}lat=${latitude}&lon=${longitude}&units=metric&appid=${APIKEY}`);
        const data = await response.json();

        commit('setCities', [data]);

        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    },
    async loadDataFromCityName(_, city) {
      try {
        const response = await fetch(`${API}q=${city}&units=metric&appid=${APIKEY}`);
        const data = await response.json();

        if (!response.ok) {
          return { error: response.statusText };
        }

        return data;
      } catch (error) {
        return { data: null, error };
      }
    },
    async loadAllData({ commit, dispatch }, payload) {
      try {
        const data = await Promise.all(payload.map((x : { name: string }) => dispatch('loadDataFromCityName', x.name)));

        commit('setCities', data);

        return { data, error: null };
      } catch (error) {
        return { data: null, error };
      }
    },
  },
  modules: {
  },
  plugins: [createPersistedState()],
});
