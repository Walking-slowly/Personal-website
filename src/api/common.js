import request from './request'

/**
 * 获取数据列表
 * @param {*} params 参数对象
 */
function list (params) {
  return request(
    {url: '/getList', method: 'POST', data: params}
  )
}

/**
 * 获取详情
 * @param {*} params 参数对象
 */
function details (params) {
  return request(
    {url: '/details', method: 'POST', data: params}
  )
}

/**
 * 更新数据
 * @param {*} params 参数对象
 */
function update (params) {
  return request(
    {url: '/update', method: 'POST', data: params}
  )
}

/**
 * 删除相应数据
 * @param {*} params 参数对象
 */

function deletes (params) {
  return request(
    {url: '/delete', method: 'POST', data: params}
  )
}

/**
 * 插入数据
 * @param {*} params 参数对象
 */
function inserts (params) {
  return request(
    {url: '/insert', method: 'POST', data: params}
  )
}

export default {
  list,
  details,
  inserts,
  update,
  deletes
}
