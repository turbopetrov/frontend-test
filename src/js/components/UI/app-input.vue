<template lang="pug">
  label
    input.input(type='text' :required='isRequire')
    span.input__placeholder.paragraph_md|{{placeholder}}      
      span.input__require-sign(v-if='isRequire')| *
</template>

<script>
export default {
  props: {
    isRequire: Boolean,
    placeholder: String,    
},
  data(){
    return{}
  }
}
</script>

<style lang="scss" scoped>
label{
  position: relative;
}
  .input{
    position: absolute;
    color: $white;
    border: none;
    border-bottom: 2px solid $white;
    background: none;
    outline: none;
    width: 100%;
    height: 31px;
    padding-left: 15px;
    transition: .2s;
    &__placeholder{
      position: absolute;
      top:0;
      left: 15px;
      transition: .5s;
    }
    &__require-sign{
      color:$orange;
    }
    &:focus{
      border: 2px solid $white;
      border-radius: 5px;
    }
    &:focus~.input__placeholder,
    &:valid~.input__placeholder{
      font-size: 0.85em;
      top: -20px;
    }
  }
</style>