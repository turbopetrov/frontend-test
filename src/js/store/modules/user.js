/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import axios from 'axios';

export default {
  state: {
    user: {},
    loginStatus: false,
    userDataStatus: null,
  },
  actions: {
    GET_USER_FROM_API({ commit }) {
      return axios
        .get('http://test.atwinta.ru/api/v1/user', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          commit('SET_USER_TO_STATE', response.data);
        })
        .catch((error) => console.error(error));
    },
    SET_USER_TO_API({ commit }, userData) {
      return axios
        .post('http://test.atwinta.ru/api/v1/user', userData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        .then((response) => {
          commit('SET_USER_TO_STATE', response.data);
          commit('CHANGE_USER_DATA_STATUS', response.status);
        })
        .catch((error) => console.error(error));
    },
  },
  getters: {
    TOKEN(state) {
      return state.token;
    },
    LOGIN_STATUS(state) {
      return state.loginStatus;
    },
    USER(state) {
      return state.user;
    },
    USER_DATA_STATUS(state) {
      return state.userDataStatus;
    },
  },
  mutations: {
    SET_USER_TO_STATE(state, currentUser) {
      state.user = currentUser;
    },
    CHANGE_LOGIN_STATUS(state, status) {
      state.loginStatus = status;
    },
    CHANGE_USER_DATA_STATUS(state, status) {
      if (status === 200) {
        state.userDataStatus = true;
      } else state.userDataStatus = false;
    },
  },
};
