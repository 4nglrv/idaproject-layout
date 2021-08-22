<template>
  <div class="index">
    <Form class="form" />
    <div class="products">
      <transition-group name="card" tag="div" style="width: 100%">
        <Card
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="card-animate"
        />
      </transition-group>
    </div>
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
.card-leave-active {
  transition: all 0.22s ease-out !important;
  position: absolute;
}
.card-leave-to {
  opacity: 0;
}
.index {
  display: flex;
}
.form {
  width: calc(24% - 24px);
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  padding: 24px;
  position: fixed;
}
.products {
  display: flex;
  flex-wrap: wrap;
  width: calc(100% - 23.5%);
  margin-left: 23.5%;
}
</style>
