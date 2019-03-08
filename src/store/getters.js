export default {
  user: state => state.user,
  productsAdded: state => {
    return state.products.data
      ? state.products.data.filter(el => {
          return el.isAddedToCart
        })
      : []
  },
  productsAddedToFavourite: state => {
    return state.products.data
      ? state.products.data.filter(el => {
          return el.isFavourite
        })
      : []
  },
  getProductById: state => id => {
    return state.products.find(product => product.id === id)
  },
  isUserLoggedIn: state => {
    return state.user.token
  },
  isUserSignedUp: state => {
    return state.user.isSignedUp
  },
  getUserName: state => {
    return state.user.name
  },
  isLoginModalOpen: state => {
    return state.systemInfo.openLoginModal
  },
  isSignupModalOpen: state => {
    return state.systemInfo.openSignupModal
  },
  isCheckoutModalOpen: state => {
    return state.systemInfo.openCheckoutModal
  },
  quantity: state => {
    return state.products.quantity
  }
}
