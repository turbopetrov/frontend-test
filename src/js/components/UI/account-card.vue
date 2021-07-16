<template lang="pug">
  .card
    img.card__img(:src='imgPath')
    .card__name.paragraph_md.
      {{name}}
    router-link.router.link(:to='{name: "worker-page", params: {id: this.id}}')
      button.card__button.heading_xs.
        Открыть профиль

</template>

<script>
export default {
  props:{
    imgPath: String,
    name: String,
    id: Number,
  },
  data(){
    return{}
  }
}
</script>

<style lang="scss" scoped>
  .card{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 300px;
    height: 390px;
    border: 2px solid $orange;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 25px 37px 40px 37px;
    &__img{
      border-radius: 50%;
      width: 172px;
      height: 172px;
    }
    &__button{
      align-self: center;
      outline: none;
      border: none;
      display: block;
      margin: 0 auto;
      width: 220px;
      height: 46px;
      border-radius: 30px;
      background: $orange;
      cursor: pointer;
    }
  }
</style>