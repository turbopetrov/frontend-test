<template lang="pug">
.user-page.blur
  .user-page__header
    h2.user-page__title.heading_xl.
      {{EMPLOYEES[id].name}}
    img.user-page__img(:src="EMPLOYEES[id].img")
  .user-page__profile
    .user-page__about-wrapper
      p.paragraph_md.user-page__about-text.
        “Наконец громовый удар раздался в другой раз и вся четверня со всем: с коляской и кучером, так что из-под кожи выглядывала пакля, был искусно зашит. Во всю дорогу суров и с миллионщиком, и с ними.”
    .user-page__data-wrapper
      profile-data.user-page__data-row(
        profileKey="Логин",
        :profileValue="EMPLOYEES[this.id].login"
      )
      profile-data.user-page__data-row(
        profileKey="Email",
        :profileValue="EMPLOYEES[this.id].email"
      )
      profile-data.user-page__data-row(
        profileKey="Должность",
        :profileValue="EMPLOYEES[this.id].position"
      )
      profile-data.user-page__data-row(
        profileKey="Отдел",
        :profileValue="EMPLOYEES[this.id].department"
      )
      profile-data.user-page__data-row(
        profileKey="Зачислен",
        :profileValue="EMPLOYEES[this.id].hireDate"
      ) 
</template>

<script>
import profile_data from "./profile-data.vue";
import { mapGetters } from "vuex";
export default {
  components: {
    "profile-data": profile_data,
  },

  data() {
    return {};
  },
  computed: {
    ...mapGetters(["EMPLOYEES"]),
    id() {
      return this.$route.params.id;
    },
  },
};
</script>

<style lang="scss" scoped>
.user-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  &__header {
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 200px;
    background: $orange-grad;
    margin-top: 90px;
  }
  &__title {
    max-width: 50%;
    color: $dark-grey;
  }
  &__img {
    width: 260px;
    border-radius: 50%;
    position: absolute;
    top: 50px;
    left: 15%;
  }
  &__profile {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  &__about-wrapper {
    max-width: 50%;
  }
  &__about-text {
    margin: 150px 15% 0 15%;
  }
  &__data-wrapper {
    margin-top: 80px;
  }
  &__data-row + &__data-row {
    margin-top: 20px;
  }
}
</style>