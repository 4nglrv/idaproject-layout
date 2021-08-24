<template>
  <input type="button" :value="value" :disabled="disabled == 1" @click="onClick" />
</template>
<script>
export default {
  name: 'Button',
  props: {
    value: {
      type: String,
      default: null,
    },
    disabled: {
      type: Number,
      default: 0,
    },
    onClick: {
      type: Function,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/_vars';
input[type='button'] {
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  font-family: 'Inter', sans-serif;
  text-align: center;
  letter-spacing: -0.02em;
  padding: 10px 0;
  width: 100%;
  border-radius: 10px;
  background: $green;
  color: #ffffff;
  cursor: pointer;
  margin: 8px 0;
  &:disabled {
    color: $grey;
    background: $grey-light;
    cursor: not-allowed;
  }
}
</style>
