<template lang="pug">
label
  span.paragraph_xs.default-value {{ defaultValue }}
  textarea.input(
    v-if="inputType === 'area'",
    type="text",
    :disabled="isReadonly",
    :readonly="isReadonly",
    :required="isRequire",
    :value="inputValue",
    :class="isReadonly?'disabled':''",
    @input="$emit('input', $event.target.value)",
    @blur="$emit('blur')",
    @focus="$emit('focus')"
  )
  input.input(
    v-else,
    type="text",
    :readonly="isReadonly",
    :disabled="isReadonly",
    :required="isRequire",
    :value="inputValue",
    @input="$emit('input', $event.target.value)",
    @blur="$emit('blur')",
    @focus="$emit('focus')"
  )

  span.paragraph_md(
    :class="inputValue === '' ? 'input__placeholder' : 'input__placeholder_xs'"
  ) {{ placeholder }}
    span.input__require-sign(v-if="isRequire") *
</template>

<script>
export default {
  props: {
    inputType: {
      type: String,
      default: 'input',
    },
    isRequire: {
      type: Boolean,
      default: false,
    },
    isReadonly: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: 'placeholder',
    },
    inputValue: {
      type: String,
      default: '',
    },
    defaultValue: {
      type: String,
      default: '',
    },
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
  width: 100%;
  height: 31px;
  padding-left: 15px;
  color: $white;
  background: none;
  border: 0;
  border-bottom: 2px solid $white;
  outline: none;
  transition: 0.2s;
  &__placeholder {
    position: absolute;
    top: 0;
    left: 15px;
    transition: 0.5s;
    &_xs {
      position: absolute;
      top: -20px;
      left: 15px;
      font-size: 0.85em;
    }
  }
  &:disabled{
    color: $grey;
    border-color: $grey;
  }
  &__require-sign {
    color: $orange;
  }
  &:focus {
    border: 2px solid $white;
    border-radius: 5px;
  }

  &:focus ~ .input__placeholder {
    top: -20px;
    font-size: 0.85em;
  }
}
textarea.input {
  min-height: 100px;
  border: 2px solid $white;
  border-radius: 5px;
}
.default-value {
  margin-top: 20px;
}

</style>
