/* eslint-disable */
import api from '@/api';

const state = {
  items: [],
  lastUpdatedAt: 0,
};

const getters = {};

const actions = {
  getSubjectTypes: ({ commit }) => {
    const { lastUpdatedAt } = state;
    if (lastUpdatedAt > 0 ) {
      return false;
    }
    api.getSubjectTypes()
    .then((response) => {
      commit('setSubjectTypes', response.data);
    })
    .catch((error) => {
      if (error.status === 404) {
        commit('setSubjectTypes', []);
      }
    });
  },
};

const mutations = {
  setSubjectTypes: (state, subjectTypes) => {
    state.items = subjectTypes;
    state.lastUpdatedAt = (new Date()).getTime();
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
