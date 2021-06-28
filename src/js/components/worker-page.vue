<template lang="pug">
.user-page.blur
  .user-page__header
    h2.user-page__title.heading_xl.
      {{WORKER_DATA.name}}
    img.user-page__img(:src="WORKER_DATA.image")
  .user-page__profile
    .user-page__about-wrapper
      p.paragraph_md.user-page__about-text.
        {{WORKER_DATA.about}}
    .user-page__data-wrapper
      profile-data.user-page__data-row(
        profileKey="Логин",
        :profileValue="WORKER_DATA.login"
      )
      profile-data.user-page__data-row(
        profileKey="Email",
        :profileValue="WORKER_DATA.email"
      )
      profile-data.user-page__data-row(
        profileKey="Должность",
        :profileValue="WORKER_DATA.worker.position"
      )
      profile-data.user-page__data-row(
        profileKey="Отдел",
        :profileValue="WORKER_DATA.worker.department"
      )
      profile-data.user-page__data-row(
        profileKey="Зачислен",
        :profileValue="WORKER_DATA.worker.adopted_at"
      )
</template>

<script>
import profile_data from "./profile-data.vue";
import { mapGetters } from "vuex";
import {mapActions} from "vuex";
export default {
  components: {
    "profile-data": profile_data,
  },

  data() {
    return {};
  },
  computed: {
    ...mapGetters(["WORKER_DATA"]),
    id() {
      return this.$route.params.id;
    },
  },
  methods:{
    ...mapActions(['GET_WORKER_DATA_FROM_API'])
  },
  mounted(){
    this.GET_WORKER_DATA_FROM_API(104)
    }
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