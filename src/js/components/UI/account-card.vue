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
  props: {
    imgPath: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
  .card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    width: 300px;
    height: 390px;
    padding: 25px 37px 40px 37px;
    border: 2px solid $orange;
    border-radius: 10px;
    &__img{
      width: 172px;
      height: 172px;
      border-radius: 50%;
    }
    &__button{
      display: block;
      align-self: center;
      width: 220px;
      height: 46px;
      margin: 0 auto;
      background: $orange;
      border: 0;
      border-radius: 30px;
      outline: none;
      cursor: pointer;
    }
  }
</style>
