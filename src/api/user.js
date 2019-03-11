import request from '@/utils/request'

export function getUser() {
  return request({
    url: 'me',
    method: 'get'
  })
}
