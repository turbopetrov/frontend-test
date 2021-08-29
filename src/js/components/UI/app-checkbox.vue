<template lang="pug">
  label.checkbox-label
    input.checkbox__input(
      :disabled='isDisabled'
      type="checkbox"
      v-model="is_finished"
      @input='handler'
      )
    span.checkbox__fake-checkbox
    span.paragraph_md.checkbox__text.
      {{checkboxText}}
</template>

<script>
export default {
  props:{
    checkboxText:{
      type: String,
      default:"Check me!"
    },
    isDisabled: Boolean,
  },
  data(){
    return{
      is_finished:false
    }
  },
  methods:{
    handler(){
      this.$emit("checking", this.is_finished)
    }
  }
}
</script>

<style lang="scss" scoped>
.checkbox__label {
  display: flex;
}

.checkbox__fake-checkbox {
  position: relative;
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  border: 1px solid $white;
  transition: 0.2s;
  &:hover {
    border-color: $grey;
  }
}
.checkbox__input {
  display: none;
}
.checkbox__text{
  line-height: 24px;
  vertical-align: top;
}
.checkbox__fake-checkbox::before {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 14px;
  height: 12px;
  background-image: url("../../../assets/img/check.svg");
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: 0.1s;
  content: "";
}
.checkbox__input:checked ~ .checkbox__fake-checkbox::before {
  opacity: 1;
}

</style>