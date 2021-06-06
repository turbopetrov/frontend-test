import Vue from 'vue';
import Router from 'vue-router';
import auth from '../components/auth.vue';
import accountList from '../components/account-list.vue';
import userPage from '../components/user-page.vue';

Vue.use(Router);



export default new Router({
  mode: 'history',
  routes:[    
    {
      path:'/',
      name: 'auth',
      component: auth,
    },
    {
      path:'/accounts',
      name: 'account-list',
      component: accountList,
    },
    {
      path:'/accounts/:id',
      name: 'user-page',
      component: userPage,
      props:true
    }
  ]
})