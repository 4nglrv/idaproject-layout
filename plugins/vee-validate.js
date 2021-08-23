import { extend } from 'vee-validate'
import { required, numeric } from 'vee-validate/dist/rules'

// Override the default message.
extend('required', {
  ...required,
  message: 'Поле является обязательным',
})

extend('numeric', {
  ...numeric,
  message: 'Введите число',
})

extend('spacenum', {
  validate: value => /^[\d\s]+$/.test(value),
  message: 'Введите число',
})