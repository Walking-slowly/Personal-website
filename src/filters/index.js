import Vue from 'vue'

Vue.filter('capitalize', function (value, type) {
  var res
  if (value == null) return value
  else {
    if (value.length > type) {
      res = value.substring(0, type) + '...'
    } else {
      res = value
    }
    return res
  }
})

// 显示时间
Vue.filter('timer', function (value, type) {
  var date = new Date(value)
  var dateTime = date.getTime()
  if (type) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours() < 10 ? '0' + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}`
  } else {
    var result
    var minute = 1000 * 60
    var hour = minute * 60
    var day = hour * 24
    var month = day * 30
    var now = new Date().getTime()
    var diffValue = now - dateTime
    if (diffValue < 0) { return }
    var monthC = diffValue / month
    var weekC = diffValue / (7 * day)
    var dayC = diffValue / day
    var hourC = diffValue / hour
    var minC = diffValue / minute
    if (monthC >= 1) {
      result = '' + parseInt(monthC) + '月前'
    } else if (weekC >= 1) {
      result = '' + parseInt(weekC) + '周前'
    } else if (dayC >= 1) {
      result = '' + parseInt(dayC) + '天前'
    } else if (hourC >= 1) {
      result = '' + parseInt(hourC) + '小时前'
    } else if (minC >= 1) {
      result = '' + parseInt(minC) + '分钟前'
    } else result = '刚刚'
    return result
  }
})
