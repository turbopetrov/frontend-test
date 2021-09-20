<template lang="pug">
.user-data
  .user-data__key.heading_md.
    {{profileKey}}:
  .user-data__value.paragraph_md.
    {{profileValue}}
</template>

<script>
export default {
  props: {
    profileKey: {
      type: String,
      default: '',
    },
    profileValue: {
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
.user-data {
  display: flex;
  flex-direction: row;
  &__key {
    width: 50%;
    text-align: start;
  }
  &__value {
    width: 50%;
    margin-left: 100px;
    text-align: end;
    vertical-align: middle;
  }
}
</style>
