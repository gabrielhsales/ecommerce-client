import { login, getUser } from '@/api/user'

export default {
  state: {
    user: {},
    token: '',
    refresh_token: ''
  },

  mutations: {
    SET_AUTH: state => authData => {
      state.token = authData.token
      state.refresh_token = authData.token
    },

    SET_USER: state => user => {
      state.user = user
    }
  },

  actions: {
    login({ commit }, { email, password }) {
      return new Promise((resolve, reject) => {
        login(email, password)
          .then(({ data }) => {
            commit('SET_AUTH', data)
            resolve(data)
          })
          .catch(e => reject(e))
      })
    },

    getUser({ commit }) {
      return new Promise((resolve, reject) => {
        getUser()
          .then(({ data }) => {
            commit('SET_USER', data)
            resolve(data)
          })
          .catch(e => reject(e))
      })
    }
  }
}
