export default {
  state: {
    items: []
  },

  mutations: {
    ADD_ITEM: (state, newItem) => {
      const item = {
        product_id: newItem.id,
        quantity: 1
      }
      state.items.push(item)
    },

    UPDATE_ITEM: (state, newItem) => {
      state.items = state.items.map(item => {
        if (item.product_id === newItem.id) {
          item.quantity = newItem.quantity
        }
        return item
      })
    },

    REMOVE_ITEM: (state, oldItem) => {
      state.items = state.items.filter(item => item.product_id !== oldItem.id)
    }
  }
}
