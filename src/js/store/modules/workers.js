/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
/* eslint-disable no-console */
import axios from 'axios';

export default {
  state: {
    workers: null,
    pagination: {
      pageCount: null,
      currentPage: null,

    },
  },
  getters: {
    WORKERS(state) {
      return state.workers;
    },
    PAGINATION(state) {
      return state.pagination;
    },
  },
  actions: {
    GET_WORKERS_FROM_API({ commit }, page = 1) {
      return axios.get(`http://test.atwinta.ru/api/v1/workers?page=${page}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('frontEndTestToken')}`,
        },
      })
        .then((response) => {
          commit('SET_WORKERS_TO_STATE', response.data.data);
          commit('SET_PAGINATION_TO_STATE', response.data);
        })
        .catch((error) => console.error(error));
    },
  },
  mutations: {
    SET_WORKERS_TO_STATE(state, workers) {
      state.workers = workers;
    },
    SET_PAGINATION_TO_STATE(state, pagination) {
      state.pagination.pageCount = pagination.last_page;
      state.pagination.currentPage = pagination.current_page;
    },
  },
};
