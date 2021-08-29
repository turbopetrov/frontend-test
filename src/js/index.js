import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import router from './router/router';
import store from './store/store';
import App from './App.vue';
import ApiPlugin from './plugins/api';

Vue.use(VueCompositionAPI);
Vue.use(ApiPlugin);
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
