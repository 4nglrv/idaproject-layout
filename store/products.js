export const state = () => ({
  products: [{
    id: '0',
    name: 'Наименование товара',
    desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
    link: 'https://sun9-43.userapi.com/impg/gm2bU9_4d81D5LwtY2LJ5RE1ZzRGA1nk_-rCoQ/fkDruCBDPdE.jpg?size=332x200&quality=96&sign=01bb8817dde0861b9a169d52765ce876&type=album',
    price: '10000'
  }]
})

export const mutations = {
  addProduct(state, product) {
    state.card.shift(product)
  },

  removeProduct(state, id) {
    state.products = state.products.filter(el => {
      return el.id !== id
    })
  },
}

export const getters = {
  getAllProducts: state => state.products,
}