export default {
  state: {
    openLoginModal: false,
    openSignupModal: false,
    openCheckoutModal: false
  },

  mutations: {
    showLoginModal: (state, show) => {
      state.openLoginModal = show
    },
    showSignupModal: (state, show) => {
      state.openSignupModal = show
    },
    showCheckoutModal: (state, show) => {
      state.openCheckoutModal = show
    }
  },

  actions: {
    //
  }
}
