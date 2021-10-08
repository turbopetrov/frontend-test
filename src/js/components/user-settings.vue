<template lang="pug">
.user-settings.blur
  .user-settings__wrapper
    .user-settings__header
      h2.user-settings__title.heading_lg Профиль
    ValidationObserver.user-settings__form(
      tag="form",
      v-slot="{ invalid }",
      @submit.prevent="changeUserData"
    )
      .user-settings__input-wrapper
        ValidationProvider.validation-wrap(
          name="имя",
          rules="required",
          v-slot="{ errors }"
        )
          app-input.user-settings__input_lg(
            isRequire,
            placeholder="Ваше имя",
            :inputValue="USER.name",
            v-model="USER.name"
          )
          p.error-message.error {{ errors[0] }}
      .user-settings__input-wrapper
        app-input.user-settings__input_sm(
          isReadonly,
          placeholder="Email",
          :inputValue="USER.email",
          v-model="USER.email"
        )
        ValidationProvider.validation-wrap_sm(
          name="номер телефона",
          tag="div",
          changed,
          rules="required|digits:10",
          v-slot="{ errors }"
        )
          app-input.user-settings__input_lg(
            defaultValue="+7",
            isRequire,
            placeholder="Номер телефона",
            :inputValue="USER.phone",
            v-model="USER.phone"
          )
          p.error-message.error {{ errors[0] }}
      .user-settings__input-wrapper
        ValidationProvider.validation-wrap_sm(
          name="ваш город",
          tag="div",
          rules="required",
          v-slot="{ errors }"
        )
          app-input.user-settings__input_lg(
            isRequire,
            placeholder="Город",
            :inputValue="USER.city",
            v-model="USER.city"
          )
          p.error-message.error {{ errors[0] }}
        app-input.user-settings__input_sm(
          placeholder="Год рождения",
          :inputValue="USER.birthday",
          v-model="USER.birthday"
        )
      .user-settings__input-wrapper
        app-input.user-settings__input_lg(
          isReadonly,
          placeholder="Тип задания",
          :inputValue="USER.type"
        )
      .user-settings__input-wrapper
        app-input.user-settings__input_sm(
          defaultValue="https://",
          placeholder="Ссылка на проект",
          :inputValue="USER.github",
          v-model="USER.github"
        )
        app-input.user-settings__input_sm(
          defaultValue="@",
          placeholder="Telegram",
          :inputValue="USER.telegram",
          v-model="USER.telegram"
        )
      .user-settings__input-wrapper
        .user-settings__text-area-wrapper
          h3.heading_sm.user-settings__text-area-title Дополнительно
          app-input.user-settings__input_lg(
            inputType="area",
            placeholder="Расскажите о себе",
            :inputValue="USER.about",
            v-model="USER.about"
          )
      .user-settings__input-wrapper
        app-checkbox.user-settings__checkbox(
          isDisabled=false,
          checkboxText="Задание выполнено"
        )
        p.user-settings__message.paragraph_sm.success(
          v-if="USER_DATA_STATUS")| Данные успешно изменены
        p.user-settings__message.paragraph_sm.error(
          v-else-if="USER_DATA_STATUS===false")| Ошибка!
      .user-settings__buttons-block
        app-button.user-settings__submit(
          buttonType="submit",
          buttonValue="Сохранить",
          :isDisabled="invalid",
        )
        app-button(buttonType="button", buttonValue="Выйти", @action="exit")
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, digits } from 'vee-validate/dist/rules';
import checkbox from './UI/app-checkbox.vue';
import input from './UI/app-input.vue';
import button from './UI/app-button.vue';

extend('required', {
  ...required,
  message: 'Введите {_field_}',
});
extend('digits', {
  ...digits,
  message: 'Введите корректный {_field_}',
});

export default {
  components: {
    ValidationObserver,
    ValidationProvider,
    'app-input': input,
    'app-button': button,
    'app-checkbox': checkbox,
  },
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters(['USER', 'USER_DATA_STATUS']),
  },
  mounted() {
    this.GET_USER_FROM_API();
    this.userData = this.$store.state.user.user;
  },
  methods: {
    ...mapActions(['GET_USER_FROM_API', 'SET_USER_TO_API']),
    changeUserData() {
      this.SET_USER_TO_API(this.USER);
    },
    exit() {
      // eslint-disable-next-line no-unused-expressions
      localStorage.removeItem('frontEndTestToken');
      this.$router.push({ name: 'auth' });
      this.$store.commit('CHANGE_LOGIN_STATUS', false);
    },
  },
};
</script>

<style lang="scss" scoped>
.validation-wrap {
  position: relative;
  display: flex;
  width: 100%;
  &_sm {
    position: relative;
    display: flex;
    width: 40%;
  }
}
.error-message {
  position: absolute;
  top: 36px;
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
    margin-bottom: 80px;
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
.success {
    color: greenyellow;
  }
  .error {
    color: rgb(240, 59, 59);
  }
</style>
