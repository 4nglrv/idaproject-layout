<template>
  <div>
    <ValidationObserver ref="provider" v-slot="{ invalid }">
      <label for="name" class="input">
        <p>
          Наименование товара
          <b class="circle"></b>
        </p>
        <ValidationProvider v-slot="{ errors }" name="name" rules="required">
          <input
            v-model="product.name"
            name="name"
            type="text"
            placeholder="Введите наименование товара"
            :class="{ 'is-invalid': errors[0] }"
          />
          <transition name="error">
            <span v-if="errors[0]" class="error-message">{{ errors[0] }}</span>
          </transition>
        </ValidationProvider>
      </label>

      <label for="desc">
        <p>Описание товара</p>
        <ValidationProvider v-slot="{ errors }" name="desc">
          <textarea
            id="desc"
            v-model="product.desc"
            placeholder="Введите описание товара"
            :class="{ 'is-invalid': errors[0] }"
          />
          <transition name="error">
            <span v-if="errors[0]" class="error-message">{{ errors[0] }}</span>
          </transition>
        </ValidationProvider>
      </label>

      <label for="link">
        <p>
          Ссылка на изображение товара
          <b class="circle"></b>
        </p>
        <ValidationProvider v-slot="{ errors }" name="link" rules="required">
          <input
            v-model="product.link"
            name="link"
            type="text"
            placeholder="Введите ссылку"
            :class="{ 'is-invalid': errors[0] }"
          />
          <transition name="error">
            <span v-if="errors[0]" class="error-message">{{ errors[0] }}</span>
          </transition>
        </ValidationProvider>
      </label>

      <label for="price">
        <p>
          Цена товара
          <b class="circle"></b>
        </p>
        <ValidationProvider
          v-slot="{ errors }"
          name="price"
          rules="spacenum|required"
        >
          <input
            v-model="product.price"
            name="price"
            type="text"
            placeholder="Введите цену"
            :class="{ 'is-invalid': errors[0] }"
            @input="numberHandler"
          />
          <transition name="error">
            <span v-if="errors[0]" class="error-message">{{ errors[0] }}</span>
          </transition>
        </ValidationProvider>
      </label>
      <Button
        value="Добавить товар"
        :disabled="invalid ? 1 : 0"
        :onClick="addProductToStore"
      />
    </ValidationObserver>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import Button from '../ui/button/button'

const numberFormatter = new Intl.NumberFormat('ru-RU')

export default {
  name: 'Form',
  components: {
    Button,
    ValidationObserver,
    ValidationProvider,
  },
  data: () => ({
    product: {
      id: Math.random().toString(36).substr(2, 9),
      name: '',
      desc: '',
      link: '',
      price: '',
    },
  }),
  methods: {
    ...mapMutations('products', ['addProduct']),
    addProductToStore() {
      this.addProduct(this.product)
      this.product = {
        id: Math.random().toString(36).substr(2, 9),
        name: '',
        desc: '',
        link: '',
        price: '',
      }
      this.$refs.provider.reset() // clear errors
    },
    numberHandler() {
      this.product.price = numberFormatter.format(Number(this.product.price.replace( /\s/g, "")))
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_vars';
.error-enter-active,
.error-leave-active {
  transition: all 0.22s ease-out !important;
}
.error-enter,
.error-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

label {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 8px 0;
  > p {
    display: flex;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    .circle {
      border-radius: 4px;
      background: $red;
      width: 4px;
      height: 4px;
      margin-left: 2px;
    }
  }
  > span input,
  > span textarea {
    border: 1px solid transparent;
    border-radius: 4px;
    position: relative;
    width: 100%;
    padding: 10px 16px;
    box-shadow: $box-shadow;
    resize: vertical;
    transition: all 0.22s ease-in-out;
    z-index: 1;
    &:focus {
      border: 1px solid $dark;
    }
  }
}
.is-invalid,
.is-invalid:focus {
  border: 1px solid $red;
}
.error-message {
  bottom: -12px;
  color: $red;
  display: block;
  font-size: 8px;
  font-weight: 600;
  position: absolute;
  line-height: 10px;
  letter-spacing: -0.02em;
  z-index: 0;
}
</style>
