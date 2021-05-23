<template lang="pug">
.auth
  .auth__wrapper
    form.auth__form  
      h2.auth__title.heading_lg.
        Авторизация
        
      app-input.auth__login(
          isRequire=true,
          placeholder="Ваша электронная почта"
        )
      app-input.auth__pass(
          isRequire=true,
          placeholder="Ваш пароль"
        )
      a.auth__forgetPass.paragraph_sm(href='#')|Забыли пароль?     
      app-submit.auth__submit(
          submitValue="Войти"
      )    
</template>

<script>
import input from './UI/app-input.vue';
import submit from './UI/app-submit.vue';
import acrylic from './UI/acrylic.vue';
export default {
  components:{
    'app-input': input,
    'app-submit': submit,
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
      box-sizing: border-box;      
      width: 550px;
      height: 660px;
      padding: 65px 80px 75px 80px;
      background: $dark-grad;
      backdrop-filter: blur(5px);
    }
    &__form{
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;      
    }
    &__pass{
      position: relative;
    }
    &__forgetPass{
      color: $orange;
      text-decoration: none;
      border-bottom: 1px solid $orange;
      position: absolute;
      top: 460px;
      left: 55%;
      cursor: pointer;
      
    }
    
  }
  
  
</style>