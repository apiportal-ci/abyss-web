/* eslint-disable */
import api from '@/api';
import Helpers from '@/helpers';

const state = {
  items: [],
  lastUpdatedAt: 0,
};

const getters = {};

const actions = {
  getApisSharedWithUser: ({ commit }, { uuid, refresh = false}) => {
    const { lastUpdatedAt } = state;
    if (lastUpdatedAt > 0 && !refresh ) {
      return false;
    }
    api.getApisSharedWithUser(uuid)
    .then((response) => {
      if (response && response.data) {
        commit('setApisSharedWithUser', response.data);
      }
    })
    .catch((error) => {
      if (error.status === 404) {
        commit('setApisSharedWithUser', []);
      }
    });
  },
};

const mutations = {
  setApisSharedWithUser: (state, apisSharedWithUser) => {
    // Remove after api is fixed
    state.items = Helpers.getUnique(apisSharedWithUser, 'uuid');
    // state.items = apisSharedWithUser;
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
