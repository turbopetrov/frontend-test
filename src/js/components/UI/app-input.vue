<template lang="pug">
label
  span.paragraph_xs.default-value|{{defaultValue}}
  textarea.input(
    v-if="inputType === 'area'",
    type="text",
    :required="isRequire",
    :value="inputValue",
    @input="$emit('input', $event.target.value)"
  )
  input.input(
    v-else,
    type="text",
    :required="isRequire",
    :value="inputValue",
    @input="$emit('input', $event.target.value)"
  )

  span.paragraph_md(
    :class="inputValue === '' ? 'input__placeholder' : 'input__placeholder_xs'"
  ) {{ placeholder }}
    span.input__require-sign(v-if="isRequire") *
</template>

<script>
export default {
  props: {
    inputType: String,
    isRequire: Boolean,
    placeholder: String,
    inputValue: String,
    defaultValue: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
label {
  position: relative;
}
.input {
  position: absolute;
  color: $white;
  border: none;
  border-bottom: 2px solid $white;
  background: none;
  outline: none;
  width: 100%;
  height: 31px;
  padding-left: 15px;
  transition: 0.2s;
  &__placeholder {
    position: absolute;
    top: 0;
    left: 15px;
    transition: 0.5s;
    &_xs {
      position: absolute;
      font-size: 0.85em;
      left: 15px;
      top: -20px;
    }
  }
  &__require-sign {
    color: $orange;
  }
  &:focus {
    border: 2px solid $white;
    border-radius: 5px;
  }

  &:focus ~ .input__placeholder {
    font-size: 0.85em;
    top: -20px;
  }
}
textarea.input {
  min-height: 100px;
  border: 2px solid $white;
  border-radius: 5px;
}
.default-value{
  margin-top: 20px;
}
</style>