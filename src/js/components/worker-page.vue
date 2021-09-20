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
import { mapGetters, mapActions } from 'vuex';
import profileData from './profile-data.vue';

export default {
  components: {
    'profile-data': profileData,
  },

  data() {
    return {};
  },
  computed: {
    ...mapGetters(['WORKER_DATA']),
    id() {
      return this.$route.params.id;
    },
  },
  mounted() {
    this.GET_WORKER_DATA_FROM_API(this.id);
  },
  methods: {
    ...mapActions(['GET_WORKER_DATA_FROM_API']),
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
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 200px;
    margin-top: 90px;
    background: $orange-grad;
  }
  &__title {
    max-width: 50%;
    margin-right: 80px;
    color: $dark-grey;
  }
  &__img {
    position: absolute;
    top: 50px;
    left: 15%;
    width: 260px;
    border-radius: 50%;
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
