<template lang="pug">
  .user-data
    .user-data__key.heading_md.
      {{profileKey}}:
    .user-data__value.paragraph_lg.
      {{profileValue}}

</template>

<script>
export default {
  props:{
    profileKey: String,
    profileValue: String,
  },
  data(){
    return{

    }
  }
}
</script>

<style lang="scss" scoped>
  .user-data{
    display: flex;
    flex-direction: row;  
    &__value{
      margin-left: 160px;
    }
  }
</style>