<template lang="pug">
input.button.heading_xs(
  :type="buttonType",
  :value="buttonValue",
  @click='handler'
  :class="buttonType === 'submit' ? 'button__submit' : null"
)
</template>

<script>
export default {
  props: {
    buttonType:{
      type: String,
      default: "button"
    },
    buttonValue:{
      type: String,
      default: "Click me!"
    },
  },
  data() {
    return {};
  },
  methods: {
    handler() {
      this.$emit("action");
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: block;
  align-self: center;
  width: 280px;
  height: 58px;
  margin: 0 auto;
  background: $orange;
  border: 0;
  border-radius: 30px;
  outline: none;
  cursor: pointer;
  &__submit {
    background: $blue;
  }
}
</style>