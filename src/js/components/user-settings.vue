<template lang="pug">
.user-settings.blur
  .user-settings__wrapper
    .user-settings__header
      h2.user-settings__title.heading_lg Профиль
    form.user-settings__form
      .user-settings__input-wrapper
        app-input.user-settings__input_lg(isRequire, placeholder="Ваше имя")
      .user-settings__input-wrapper
        app-input.user-settings__input_sm(isRequire, placeholder="Email")
        app-input.user-settings__input_sm(isRequire=false, placeholder="Номер телефона")
      .user-settings__input-wrapper
        app-input.user-settings__input_sm(isRequire=false, placeholder="Город")
        app-input.user-settings__input_sm(isRequire=false, placeholder="Год рождения")
      .user-settings__input-wrapper
        app-input.user-settings__input_lg(isRequire=false, placeholder="Тип задания")
      .user-settings__input-wrapper
        app-input.user-settings__input_sm(isRequire=false, placeholder="Ссылка на проект")
        app-input.user-settings__input_sm(isRequire=false, placeholder="Telegram")
      .user-settings__input-wrapper
        .user-settings__text-area-wrapper
          h3.heading_sm.user-settings__text-area-title Дополнительно
          app-input.user-settings__input_lg(
            inputType="area",
            isRequire=false,
            placeholder="Расскажите о себе"
          )
      .user-settings__buttons-block
        app-button.user-settings__submit(
          buttonType="submit"
          submitValue="Сохранить")
        app-button(
          buttonType="button" 
          buttonValue="Выйти"
          @action='exit'
          
          )
</template>

<script>
import input from "./UI/app-input.vue";
import button from "./UI/app-button.vue";
export default {
  components: {
    "app-input": input,
    "app-button": button,
  },
  data() {
    return {};
  },
  methods:{
    exit(){
      console.log('exit from settings');
    }
  }
};
</script>

<style lang="scss" scoped>
.user-settings {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;
  &__wrapper {
    width: 1020px;
  }
  &__form {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  &__input-wrapper {
    width: 100%;
    display: flex;
    justify-content: space-between;
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
  &__buttons-block{
    display: flex;
    flex-direction: row;    
  }
  &__submit{
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