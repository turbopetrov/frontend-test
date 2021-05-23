<template lang="pug">
  input.submit.heading_xs(type='submit' :value='submitValue')
</template>

<script>
export default {
  props:{
    submitValue: String
  },
  data(){
    return{}
  }
}
</script>

<style lang="scss" scoped>
  .submit{
    align-self: center;
    outline: none;
    border: none;
    display: block;
    margin: 0 auto;
    width: 280px;
    height: 58px;
    border-radius: 30px;
    background: $orange;

  }
</style>