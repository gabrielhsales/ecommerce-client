import request from '@/utils/request'

export function register({ email, password }) {
  return request({
    url: '/auth/register',
    method: 'post',
    data: { email, password }
  })
}

export function login(user) {
  return request({
    url: '/auth/login',
    method: 'post',
    data: user
  })
}

export function logout(refresh_token) {
  return request({
    url: '/auth/logout',
    method: 'post',
    data: { refresh_token }
  })
}
