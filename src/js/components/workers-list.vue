<template lang="pug">
.account-list.blur
  .account-list__wrapper
    .account-list__header
      h2.account-list__title.heading_lg Сотрудники
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
import card from "./UI/account-card.vue";
import { mapGetters } from "vuex";
import {mapActions} from "vuex";
export default {
  components: {
    "account-card": card,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["WORKERS"]),
  },
  methods:{
    ...mapActions(["GET_WORKERS_FROM_API"]),
  },
  mounted(){
    this.GET_WORKERS_FROM_API()
    }
};
</script>

<style lang="scss" scoped>
.account-list {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__wrapper {
    width: 1020px;
  }
  &__card-block {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  &__card {
    margin-bottom: 30px;
  }
  &__header {
    display: flex;
    justify-content: start;
    width: 100%;
    margin-top: 65px;
    margin-bottom: 40px;
  }
}
</style>