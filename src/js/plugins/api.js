import api from '../api/index.js';

export default {
  install(Vue){
    Vue.prototype.$api = api
  }
}