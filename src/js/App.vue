<template lang="pug">
#app.page
 .background
  auth    
</template>

<script>
import auth from './components/auth.vue';
export default { 
  components:{
    auth,
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
  }
  .background{     
    height: 100vh;   
    background-image: url('../assets/img/bg.jpg');
    background-size: cover;
  }
</style>