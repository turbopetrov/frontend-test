<template lang="pug">
  .pagination
    ul.pagination__bar
      li.pagination__item.heading_xs(
        :class='PAGINATION.currentPage===page?"pagination__item_active":null'
        v-for='page in pageCount'
        @click='handler(page)'
        ).
        {{page}}
</template>

<script>
import { mapGetters} from "vuex";
export default {
  props:{
    pageCount:{
      type: Number,
      default:1
    }
  },
  data(){
    return{

    }
  },
  computed:{
    ...mapGetters(["PAGINATION"])
  },
  methods:{
    handler(page){
      this.$emit("changePage", page)
    }
  }
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  &__bar{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 50px;
  }
  &__item{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    list-style: none;
    border: 1px solid $orange;
    border-radius: 50%;
    cursor: pointer;
    transition: .2s;
    &:not(:first-child){
      margin-left: 10px;
    }
    &:hover{
      background-color: $orange;
    }
    &_active{
      background-color: $orange;
    }
  }
}

</style>