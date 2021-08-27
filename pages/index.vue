<template>
  <div class="index">
    <header>
      <h1 style="margin-top: 32px; margin-bottom: 16px">Добавление товара</h1>
      <div v-click-outside="hideSort" class="sort" @click="sortHandler">
        <span>
          {{ $store.state.products.sortBy }}
        </span>
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.48532 3.24264L4.24268 6.48528L1.00003 3.24264"
            stroke="#B4B4B4"
          />
        </svg>
        <ul class="sort__by" :class="{ 'sort__by--visible': isSortVisible }">
          <li @click="sortHandlerByMinPrice()">По возрастанию</li>
          <li @click="sortHandlerByMaxPrice()">По убыванию</li>
          <li @click="sortHandlerByTitle()">По наименованию</li>
        </ul>
      </div>
    </header>
    <main>
      <Form class="form" />
      <transition-group name="card" tag="div" class="products">
        <Card
          v-for="product in products"
          :key="product.id"
          :product="product"
          class="card-animate"
        />
      </transition-group>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data: () => ({
    isSortVisible: false,
  }),
  computed: {
    ...mapGetters('products', ['getAllProducts']),

    products() {
      return this.getAllProducts
    },
  },
  mounted() {
    const productsList = JSON.parse(localStorage.getItem('products')) || []
    if (productsList.length > 0) {
      this.addProductsFromCache(productsList)
    }
  },
  methods: {
    ...mapMutations('products', [
      'sortByMinPrice',
      'sortByMaxPrice',
      'sortByTitle',
      'addProductsList'
    ]),
    addProductsFromCache(list) {
      this.addProductsList(list)
    },
    sortHandlerByMinPrice() {
      this.sortByMinPrice()
    },
    sortHandlerByMaxPrice() {
      this.sortByMaxPrice()
    },
    sortHandlerByTitle() {
      this.sortByTitle()
    },
    sortHandler() {
      this.isSortVisible = !this.isSortVisible
    },
    hideSort() {
      this.isSortVisible = false
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_vars';
.card-leave-active {
  transition-property: opacity, transform;
  transition-duration: 0.22s;
  transition-timing-function: ease-out;
  position: absolute;
  width: 22.9%;
  transform: translateY(-10px);
}
.card-leave-to {
  opacity: 0;
}
.index {
  display: flex;
  flex-direction: column;
  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.sort {
  align-items: center;
  background: #fffefb;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  cursor: pointer;
  height: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  width: 124px;
  overflow: hidden;
  font-size: 12px;
  line-height: 15px;
  > span {
    color: $grey;
    padding: 10px 4px 10px 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    position: relative;
  }
  svg {
    right: 10px;
    top: 12px;
    margin-right: 16px;
  }
  &__by {
    background: #fffefb;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.22s ease-in-out;
    overflow: hidden;
    position: absolute;
    list-style: none;
    margin: 0;
    padding: 0;
    top: 68px;
    width: 124px;
    z-index: 2;
    &--visible {
      opacity: 1;
      visibility: visible;
    }
    > li {
      padding: 10px 16px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: background 0.22s ease-in-out;
      &:hover {
        background: $grey-light;
      }
    }
  }
}
.form {
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
  width: calc(24% - 24px);
  padding: 24px;
  position: fixed;
}
.products {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  width: calc(100% - 23.5%);
  margin-left: 23.5%;
}
</style>
