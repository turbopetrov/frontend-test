<template lang="pug">
.account-list.blur
  .account-list__wrapper
    .account-list__header
      h2.account-list__title.heading_lg Сотрудники
      app-button(
        buttonType="button",
        buttonValue="Мой профиль",
        @action="goToUserProfile"
      )
    app-pagination(
      :pageCount = "this.PAGINATION.pageCount"
      @changePage="changePage"
    )
    .account-list__card-block
      account-card.account-list__card(
        v-for="WORKER in WORKERS",
        :key="WORKER.id",
        :imgPath="WORKER.image",
        :name="WORKER.name",
        :id="WORKER.id"
      )
</template>

<script>
import pagination from './UI/pagination.vue'
import card from "./UI/account-card.vue";
import button from "./UI/app-button.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  components: {
    "account-card": card,
    "app-button": button,
    "app-pagination": pagination
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["WORKERS","USER", "PAGINATION"]),
  },
  mounted() {
    this.GET_WORKERS_FROM_API();
  },
  methods: {
    ...mapActions(["GET_WORKERS_FROM_API"]),
    goToUserProfile(){
      this.$router.push({name:"user-settings"});
    },
    changePage(page){
      this.GET_WORKERS_FROM_API(page);
    }
  },
};
</script>

<style lang="scss" scoped>
.account-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  &__wrapper {
    width: 1020px;
  }
  &__card-block {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
  &__card {
    margin-bottom: 30px;
  }
  &__header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 65px;
    margin-bottom: 40px;
  }
}
</style>