<template lang="pug">
  .pagination
    ul.pagination__bar
      li.pagination__item.heading_xs(
        v-for='page in pages'
        @click='handler(page)'
        ).
        {{page}}
      
</template>

<script>
export default {
  data(){
    return{
      pages: 10,
    }
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
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
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
  }
}
</style>