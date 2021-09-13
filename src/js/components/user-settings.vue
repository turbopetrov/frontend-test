<template lang="pug">
.user-settings.blur
  .user-settings__wrapper
    .user-settings__header
      h2.user-settings__title.heading_lg Профиль
    form.user-settings__form
      .user-settings__input-wrapper
        ValidationProvider.validation-wrap(name="ваше имя", rules="required")
          app-input.user-settings__input_lg(
            isRequire,
            placeholder="Ваше имя",
            :inputValue="this.USER.name"
            v-model='userData.name'
          )
      .user-settings__input-wrapper
        app-input.user-settings__input_sm(
          isRequire
          placeholder="Email"
          :inputValue="this.USER.email"
          )
        app-input.user-settings__input_sm(
          defaultValue="+7"
          isRequire=false,
          placeholder="Номер телефона"
          :inputValue="this.USER.phone"
          v-model='userData.phone'
          )
      .user-settings__input-wrapper
        app-input.user-settings__input_sm(
          isRequire=false
          placeholder="Город"
          :inputValue="this.USER.city"
          v-model='userData.city'
          )
        app-input.user-settings__input_sm(
          isRequire=false,
          placeholder="Год рождения"
          :inputValue="this.USER.birthday"
          v-model='userData.birthday'
          )
      .user-settings__input-wrapper
        app-input.user-settings__input_lg(
          isRequire=false,
          placeholder="Тип задания"
          :inputValue="this.USER.type"
        )
      .user-settings__input-wrapper
        app-input.user-settings__input_sm(
          defaultValue="https://"
          isRequire=false,
          placeholder="Ссылка на проект"
          :inputValue="this.USER.github"
          v-model='userData.github'
          )
        app-input.user-settings__input_sm(
          defaultValue="@"
          isRequire=false,
          placeholder="Telegram"
          :inputValue='this.USER.telegram'
          v-model='userData.telegram'
        )
      .user-settings__input-wrapper
        .user-settings__text-area-wrapper
          h3.heading_sm.user-settings__text-area-title Дополнительно
          app-input.user-settings__input_lg(
            inputType="area",
            isRequire=false,
            placeholder="Расскажите о себе"
            :inputValue='this.USER.about'
            v-model='userData.about'
          )
      app-checkbox.user-settings__checkbox(
        isDisabled
        checkboxText="Задание выполнено"
      )
      .user-settings__buttons-block
        app-button.user-settings__submit(
          buttonType="submit",
          submitValue="Сохранить"
          @action='changeUserData'
        )
        app-button(buttonType="button", buttonValue="Выйти", @action="exit")
</template>

<script>
import { ValidationProvider, extend } from 'vee-validate';
import { required } from 'vee-validate/dist/rules';
import { mapActions, mapGetters } from 'vuex';
import checkbox from './UI/app-checkbox.vue';
import input from './UI/app-input.vue';
import button from './UI/app-button.vue';

extend('required', {
  ...required,
  message: 'Введите {_field_}',
});

export default {
  components: {
    ValidationProvider,
    'app-input': input,
    'app-button': button,
    'app-checkbox': checkbox,
  },
  data() {
    return {
      userData: {},
    };
  },
  computed: {
    ...mapGetters(['USER']),
  },
  mounted() {
    this.GET_USER_FROM_API();
  },
  methods: {
    ...mapActions(['GET_USER_FROM_API', 'SET_USER_TO_API']),
    changeUserData() {
      this.SET_USER_TO_API(this.userData);
    },
    exit() {
      localStorage.removeItem('token'),
      this.$router.push({ name: 'auth' });
    },
  },
};
</script>

<style lang="scss" scoped>
.validation-wrap {
  
  display: flex;
  width: 100%;
}
.error-message {
    position: absolute;
    top: 40px;
    left: 0;
    display: block;
  }
.error {
    color: rgb(240, 59, 59);
  }
.user-settings {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 50px;
  &__wrapper {
    width: 1020px;
  }
  &__form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  &__input-wrapper {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 70px;
  }
  &__text-area-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 60px;
  }
  &__text-area-title {
    margin-bottom: 30px;
  }
  &__checkbox{
    margin-bottom: 30px;
  }
  &__buttons-block {
    display: flex;
    flex-direction: row;
  }
  &__submit {
    margin-right: 40px;
  }

  &__header {
    display: flex;
    justify-content: start;
    width: 100%;
    margin-top: 65px;
    margin-bottom: 40px;
  }
  &__input_sm {
    width: 40%;
  }
  &__input_lg {
    width: 100%;
  }
}
</style>
