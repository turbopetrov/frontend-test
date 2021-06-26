<template lang="pug">
.page
  router-view

</template>

<script>


export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
  .page{
    margin: 0;
    padding: 0;
    background: url('../assets/img/bg.jpg') fixed;
    min-height: 100vh;
  }

</style>