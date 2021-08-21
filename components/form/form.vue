<template>
  <div>
    <ValidationObserver v-slot="{ invalid }">
      <label for="name" class="input">
        <p>
          Наименование товара
          <b class="circle"></b>
        </p>
        <ValidationProvider v-slot="{ errors }" name="name" rules="required">
          <input
            v-model="name"
            name="name"
            type="text"
            placeholder="Введите наименование товара"
            :class="{'is-invalid': errors[0]}"
          />
          <span class="error-message">{{ errors[0] }}</span>
        </ValidationProvider>
      </label>

      <label for="desc">
        <p>
          Описание товара
        </p>
        <ValidationProvider v-slot="{ errors }" name="desc">
          <textarea
            id="desc"
            v-model="desc"
            placeholder="Введите описание товара"
            :class="{'is-invalid': errors[0]}"
          />
          <span class="error-message">{{ errors[0] }}</span>
        </ValidationProvider>
      </label>

      <label for="link">
        <p>
          Ссылка на изображение товара
          <b class="circle"></b>
        </p>
        <ValidationProvider v-slot="{ errors }" name="link" rules="required">
          <input
            v-model="link"
            name="link"
            type="text"
            placeholder="Введите ссылку"
            :class="{'is-invalid': errors[0]}"
          />
          <span class="error-message">{{ errors[0] }}</span>
        </ValidationProvider>
      </label>

      <label for="link">
        <p>
          Цена товара
          <b class="circle"></b>
        </p>
        <ValidationProvider v-slot="{ errors }" name="price" rules="numeric|required">
          <input
            v-model="price"
            name="price"
            type="text"
            placeholder="Введите цену"
            :class="{'is-invalid': errors[0]}"
          />
          <span class="error-message">{{ errors[0] }}</span>
        </ValidationProvider>
      </label>
      <Button value="Добавить товар" :disabled="invalid ? 1 : 0" />
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import Button from '../ui/button/button'

export default {
  name: 'Form',
  components: {
    Button,
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({
    id: '',
    name: '',
    desc: '',
    link: '',
    price: '',
  }),
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_vars";

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
    width: 100%;
    padding: 10px 16px;
    box-shadow: $box-shadow;
    border-radius: 4px;
    resize: vertical;
  }
}
.is-invalid {
  border: 1px solid $red;
}
.error-message {
  display: block;
  position: absolute;
  font-size: 8px;
  line-height: 10px;
  letter-spacing: -0.02em;
  color: $red;
  bottom: -12px;
  font-weight: 600;
}
</style>
