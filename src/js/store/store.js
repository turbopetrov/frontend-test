import Vue from 'vue';
import Vuex from 'vuex';
import workers from './modules/workers';
import user from './modules/user';
import workerData from './modules/workerData';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    workers,
    user,
    workerData,
  },
});
