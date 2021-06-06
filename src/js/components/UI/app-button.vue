<template lang="pug">
input.button.heading_xs(  
  :type='buttonType',
  :value="buttonValue",
  @click='handler'
  :class='buttonType==="submit"?"button__submit":null'
)

</template>

<script>
export default {
  props: {
    buttonType: String,
    buttonValue: String,
  },
  data() {
    return {};
  },
  methods:{
    handler(){
      this.$emit('action')
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  align-self: center;
  outline: none;
  border: none;
  display: block;
  margin: 0 auto;
  width: 280px;
  height: 58px;
  border-radius: 30px;
  cursor: pointer;
  background: $orange;
  &__submit {
    background: $blue;
  }
}
</style>