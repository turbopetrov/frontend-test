<template lang="pug">
.auth
  .auth__wrapper
    acrylic
    .auth__content-wrapper
      h2.heading_lg.auth__title.
        Авторизация
  
      
    
</template>

<script>
import acrylic from './UI/acrylic.vue';
export default {
  components:{
    acrylic,
  },
  data(){
    return{}
  }
}
</script>

<style lang="scss" scoped>
  .auth{    
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    &__wrapper{
      position: relative;
      width: 550px;
      height: 660px;
      border-radius: 10px;
    } 
    &__content-wrapper{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;     
        
    }   
  }
  
  
</style>