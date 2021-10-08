/* eslint-disable linebreak-style */
<template lang="pug">
.auth
  .auth__wrapper.blur
    ValidationObserver.auth__form(
      tag="form",
      v-slot="{ invalid }",
      @submit.prevent="login"
    )
      h2.auth__title.heading_lg.
        Авторизация
      ValidationProvider.validation-wrap(
        name="email",
        rules="required|email",
        v-slot="{ errors }"
      )
        app-input.auth__login(
          isRequire,
          placeholder="Ваша электронная почта",
          :inputValue="email",
          v-model="email",
        )
        p.auth__error-message.error {{ errors[0] }}
      ValidationProvider.validation-wrap(name="пароль" rules="required|min:10", v-slot="{ errors }")
        app-input.auth__pass(
          isRequire,
          placeholder="Ваш пароль",
          :inputValue="pass",
          v-model="pass",
        )
        p.auth__error-message.error {{ errors[0] }}
      app-button(buttonType="submit", buttonValue="Войти", :isDisabled="invalid")
      span.paragraph_sm(:class="LOGIN_STATUS ? 'success' : 'error'").
        {{message}}
</template>

<script>
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email, min } from 'vee-validate/dist/rules';
import { mapGetters } from 'vuex';
import input from './UI/app-input.vue';
import button from './UI/app-button.vue';

extend('email', {
  ...email,
  message: 'Введите корректный {_field_}',
});
extend('required', {
  ...required,
  message: 'Введите {_field_}',
});
extend('min', {
  ...min,
  params: ['length'],
  message: '{_field_} должен быть не менее {length} символов',
});

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
    'app-input': input,
    'app-button': button,
  },

  data() {
    return {
      email: '',
      pass: '',
      message: '',
    };
  },

  computed: {
    ...mapGetters(['LOGIN_STATUS']),
  },
  mounted() {
    this.autoLogin();
  },
  methods: {
    login() {
      this.$api.auth
        .login({
          email: this.email,
          password: this.pass,
        })
        .then((response) => {
          localStorage.setItem('frontEndTestToken', response.data.token);
          this.$store.commit('CHANGE_LOGIN_STATUS', true);
          this.message = 'Вы авторизованы';
          setTimeout(() => {
            this.$router.push({ name: 'workers-list' });
          }, 1500);
        })
        .catch((error) => {
          error.log(error);
          this.$store.commit('CHANGE_LOGIN_STATUS', false);
          this.message = 'Неверный логин или пароль';
        });
    },
    autoLogin() {
      if (localStorage.getItem('frontEndTestToken')) {
        this.$store.commit('CHANGE_LOGIN_STATUS', true);
        this.message = 'Вы авторизованы';
        setTimeout(() => {
          this.$router.push({ name: 'workers-list' });
        }, 1500);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.validation-wrap {
  position: relative;
  display: block;
}
.auth {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  &__wrapper {
    box-sizing: border-box;
    width: 550px;
    height: 660px;
    padding: 65px 80px 75px 80px;
  }
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  &__pass {
    position: relative;
    display: block;
  }
  &__login {
    display: block;
  }
  &__forgetPass {
    position: absolute;
    top: 460px;
    left: 55%;
    color: $orange;
    text-decoration: none;
    border-bottom: 1px solid $orange;
    cursor: pointer;
  }
  &__error-message {
    position: absolute;
    top: 40px;
    left: 0;
    display: block;
  }
  .success {
    color: greenyellow;
  }
  .error {
    color: rgb(240, 59, 59);
  }
}
</style>
