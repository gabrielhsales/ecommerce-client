import router from '@/routes'
import store from '@/store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // getToken from cookie

NProgress.configure({ showSpinner: false }) // NProgress Configuration
const user = store.getters.user

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken() && !(user && user.id)) {
    store
      .dispatch('getUser')
      .then(() => {
        next({ ...to, replace: true })
      })
      .catch(() => {
        next({ path: '/' })
      })
  }
})
