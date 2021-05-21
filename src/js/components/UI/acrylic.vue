<template lang="pug">
  .acrylic
      .acrylic_light
      .acrylic_dark
</template>
<script>
export default {
  data(){
    return{}
  }
}
</script>

<style lang="scss" scoped>
.acrylic{  
    position: relative;  
    width: inherit;
    height: inherit;
    border-radius: inherit;
    &_dark{
      position: absolute;
      top:0;
      left:0;
      border-radius: inherit;
      width: inherit;
      height: inherit;
      background: $dark-grad;
    }
    &_light{
      position: absolute;
      top:0;
      left:0;
      width: inherit;
      height: inherit;
      border-radius: inherit;
      background: $light-grad;
    }
  }
</style>