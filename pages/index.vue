<template>
  <div class="index">
    <Form class="form" />
    <Card v-for="product in products" :key="product.id" :product="product" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('products', ['getAllProducts']),

    products() {
      return this.getAllProducts
    },
  },
}
</script>

<style lang="scss" scoped>
.index {
  display: flex;
}
.form {
  width: 24%;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 24px;
}
</style>
