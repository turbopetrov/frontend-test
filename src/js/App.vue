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
    min-height: 100vh;
    margin: 0;
    padding: 0;
    background: url('../assets/img/bg.jpg') fixed;
  }

</style>