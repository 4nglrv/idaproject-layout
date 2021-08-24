<template>
  <div class="wrapper">
    <header>
      <h1 style="margin-top: 32px; margin-bottom: 16px">Добавление товара</h1>
    </header>

    <Nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '~/assets/scss/_vars';
* {
  font-family: 'Source Sans Pro', sans-serif;
  box-sizing: border-box;
  color: $dark;
  &:before,
  &:after {
    box-sizing: border-box;
  }
}
body {
  background: rgba(255, 254, 251, 0.8);
}
.wrapper {
  padding-left: 32px;
  padding-right: 32px;
}
input,
textarea {
  border: none;
  background-image: none;
  background-color: transparent;
  box-shadow: none;
  &:focus {
    border: none;
    box-sizing: border-box;
    outline: none;
  }
}
</style>
