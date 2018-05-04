import request from './request'
import qs from 'qs'

/**
 * list请求
 * @param {*} params 参数对象
 */

function list (params) {
  return request(
    {url: '/getList', method: 'POST', data: qs.stringify(params)}
  )
}


export default {
  list
}
