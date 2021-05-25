<template lang="pug">
#app.page 
  auth
  account-list
  user-page
       
</template>

<script>
import auth from './components/auth.vue';
import accaunt_list from './components/account-list.vue';
import user_page from './components/user-page.vue'
export default { 
  components:{
    auth,
    'account-list': accaunt_list,
    'user-page': user_page,
  },
  data() {
    return {};
  },  
};
</script>

<style lang="scss" scoped>
  .page{
    margin: 0;
    padding: 0;
    background: url('../assets/img/bg.jpg') fixed;
    
  }
  
</style>