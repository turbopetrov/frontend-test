/* eslint-disable no-param-reassign */
import api from '../api/index';

export default {
  install(Vue) {
    Vue.prototype.$api = api;
  },
};
