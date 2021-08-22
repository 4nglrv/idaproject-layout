export const state = () => ({
  products: [
    {
      id: '0',
      name: 'Наименование товара',
      desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      link: 'https://sun9-43.userapi.com/impg/gm2bU9_4d81D5LwtY2LJ5RE1ZzRGA1nk_-rCoQ/fkDruCBDPdE.jpg?size=332x200&quality=96&sign=01bb8817dde0861b9a169d52765ce876&type=album',
      price: '10000'
    },
    {
      id: '1',
      name: 'Наименование товара',
      desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      link: 'https://sun9-43.userapi.com/impg/gm2bU9_4d81D5LwtY2LJ5RE1ZzRGA1nk_-rCoQ/fkDruCBDPdE.jpg?size=332x200&quality=96&sign=01bb8817dde0861b9a169d52765ce876&type=album',
      price: '10000'
    },
    {
      id: '2',
      name: 'Наименование товара',
      desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      link: 'https://sun9-43.userapi.com/impg/gm2bU9_4d81D5LwtY2LJ5RE1ZzRGA1nk_-rCoQ/fkDruCBDPdE.jpg?size=332x200&quality=96&sign=01bb8817dde0861b9a169d52765ce876&type=album',
      price: '10000'
    },
    {
      id: '3',
      name: 'Наименование товара',
      desc: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
      link: 'https://sun9-43.userapi.com/impg/gm2bU9_4d81D5LwtY2LJ5RE1ZzRGA1nk_-rCoQ/fkDruCBDPdE.jpg?size=332x200&quality=96&sign=01bb8817dde0861b9a169d52765ce876&type=album',
      price: '10000'
    },
]
})

export const mutations = {
  addProduct(state, product) {
    state.products.unshift(product)
  },

  removeProduct(state, id) {
    const productToRemove = state.products.find(el => {
      return el.id === id
    })

    const productIndex = state.products.indexOf(productToRemove);
    state.products.splice(productIndex, 1);
  },
}

export const getters = {
  getAllProducts: state => state.products,
}