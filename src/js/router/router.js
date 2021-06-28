import Vue from 'vue';
import Router from 'vue-router';
import auth from '../components/auth.vue';
import workersList from '../components/workers-list.vue';
import workerPage from '../components/worker-page.vue';

Vue.use(Router);



export default new Router({
  
  routes:[
    {
      path:'/',
      name: 'auth',
      component: auth,
    },
    {
      path:'/workers',
      name: 'workers-list',
      component: workersList,
    },
    {
      path:'/workers/:id',
      name: 'worker-page',
      component: workerPage,
      props:true
    }
  ]
})