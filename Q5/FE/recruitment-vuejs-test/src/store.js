import Vuex from "vuex";
import Vue from "vue";
import { SET_DATA, INCREMENT } from "./mutation-types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: null,
    count: 0,
  },

  getters: {
    getData: (state) => {
      return state.list;
    },
    getCountData: (state) => {
      return state.count;
    },
  },

  mutations: {
    [SET_DATA](state, data) {
      state.list = data;
    },
    [INCREMENT](state, data) {
      state.count = data;
    },
  },

  actions: {
    setDatas(context, data) {
      context.commit("SET_DATA", data);
    },
    setCounts(context, data) {
      console.log(data);
      context.commit("INCREMENT", data);
    },
  },
});
