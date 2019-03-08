export default {
  state: {
    data: [],
    pagination: {}
  },

  mutations: {
    SET_PRODUCTS: state => products => (state = products)
  },

  actions: {
    fetchProducts({ commit }, queryParams) {
      return new Promise((resolve, reject) => {
        fetch(queryParams)
          .then(({ data }) => {
            commit('SET_PRODUCTS', data)
            resolve(data)
          })
          .catch(e => reject(e))
      })
    }
  }
}
