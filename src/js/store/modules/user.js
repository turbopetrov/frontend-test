/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import axios from 'axios';

export default {
  state: {
    user: {},
    loginStatus: false,
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
        .post('http://test.atwinta.ru/api/v1/user', userData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          })
        .then((response) => {
          commit('SET_USER_TO_STATE', response.data);
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
  },
  mutations: {
    SET_USER_TO_STATE(state, currentUser) {
      state.user = currentUser;
    },
    changeLoginStatus(state, status) {
      state.loginStatus = status;
    },
  },
};
