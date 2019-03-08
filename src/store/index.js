import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/**
 * Importação dos módulos
 */
import getters from './getters'
import user from './modules/user'
import products from './modules/products'

export default new Vuex.Store({
  state: {
    systemInfo: {
      openLoginModal: false,
      openSignupModal: false,
      openCheckoutModal: false
    }
  },
  modules: {
    user,
    products
  },
  getters
})
