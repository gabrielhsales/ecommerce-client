import { fetch } from '@/api/products'
export default {
  state: {
    data: [],
    pagination: {}
  },

  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.data = products.data
      state.pagination = products.pagination
    }
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
