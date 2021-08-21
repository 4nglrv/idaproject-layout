<template>
  <div class="card">
    <img class="card__img" :src="product.link" />
    <div class="card__body">
      <div class="card__body--header">
        {{ product.name }}
      </div>
      <p class="card__body--text">
        {{ product.desc }}
      </p>
      <div class="card__body--price">{{ product.price }} руб.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    product: {
      type: Object,
      default: null,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_vars';
.card {
  display: flex;
  flex-direction: column;
  width: calc(25.3% - 48px);
  margin-left: 16px;
  margin-bottom: 16px;
  background: $white;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  &__img {
    object-fit: cover;
    display: block;
    height: 332px;
    width: 100%;
    border-radius: 4px 4px 0 0;
  }
  &__body {
    display: flex;
    flex-direction: column;
    padding: 16px;
    &--header {
      font-weight: 600;
      font-size: 20px;
      line-height: 25px;
    }
    &--body {
      font-weight: normal;
      font-size: 16px;
      line-height: 20px;
    }
    &--price {
      font-weight: 600;
      font-size: 24px;
      line-height: 30px;
    }
  }
}
</style>
