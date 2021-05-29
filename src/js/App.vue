<template lang="pug">
#app.page 
  auth
  account-list
  user-page
  user-settings
       
</template>

<script>
import auth from './components/auth.vue';
import accaunt_list from './components/account-list.vue';
import user_page from './components/user-page.vue';
import user_settings from './components/user-settings.vue';
export default { 
  components:{
    auth,
    'account-list': accaunt_list,
    'user-page': user_page,
    'user-settings': user_settings
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