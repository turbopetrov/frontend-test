<template lang="pug">
.auth 
  .auth__wrapper.blur
    form.auth__form 
      h2.auth__title.heading_lg.
        Авторизация        
      app-input.auth__login(
        isRequire,
        placeholder="Ваша электронная почта",
        :inputValue="email",
        v-model="email"
      )
      app-input.auth__pass(
        isRequire,
        placeholder="Ваш пароль",
        :inputValue="pass",
        v-model="pass"
      )
      a.auth__forgetPass.paragraph_sm(href="#") Забыли пароль?
      app-button(buttonType="button", buttonValue="Войти", @action="login()")
      span.paragraph_sm(:class='loginStatus?"success":"error"').
        {{message}} 
</template>

<script>
import axios from "axios";
import input from "./UI/app-input.vue";
import button from "./UI/app-button.vue";

export default {
  components: {
    "app-input": input,
    "app-button": button,
  },
  data() {
    return {
      email: "",
      pass: "",
      loginStatus:false,
      message:""
    };
  },
  methods: {
    login() {
      axios
        .post("http://test.atwinta.ru/api/v1/auth/login", {
          email: this.email,
          password: this.pass,
        })
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          this.loginStatus=true;
          this.message = "Вы авторизованы";
          setTimeout(()=>{this.$router.push({ name: "account-list" })}, 1500);
          
        })
        .catch((error) => {
          console.log(error);
          this.loginStatus=false
          this.message="Неверный логин или пароль"
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.auth {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  &__wrapper {
    box-sizing: border-box;
    width: 550px;
    height: 660px;
    padding: 65px 80px 75px 80px;
  }
  &__form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__pass {
    position: relative;
  }
  &__forgetPass {
    color: $orange;
    text-decoration: none;
    border-bottom: 1px solid $orange;
    position: absolute;
    top: 460px;
    left: 55%;
    cursor: pointer;
  }
  .success{
    color: greenyellow;
  }
  .error{
    color: red;
  }
}
</style>