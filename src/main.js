// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import '../static/font/iconfont.css'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

//提取图片
Vue.filter('getImg', function (value) {
  var regexp = /<[img|IMG].*?src=[\'|\"](.*?(?:[\.png|\.jpg|\.gif|\.bmp|\.bnp]))[\'|\"].*?[\/]?>/gi;
  var res;
  if(value == null) return res= "../../../static/img/icon.jpg";
  res = value.match(regexp);
  if(res){
      res = $(res[0]).attr('src');
  }else{
      res= "../../../static/img/icon.jpg";
  }
  return res;
})

//字数过滤
Vue.filter('capitalize', function (value,type) {
  var res;
  if(value == null) return value;
  switch (type){
      case "50":
        if(value.length > type){
            res = value.substring(0,50)+"...";
        }else{
            res = value;
        }
      break;
      default:
  } 
 
  return res;
})

//处理时间
Vue.filter('timers', function (value) {
    var result;
    var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var now = new Date().getTime();
	var diffValue = now - value;
	if(diffValue < 0){return;}
	var monthC =diffValue/month;
	var weekC =diffValue/(7*day);
	var dayC =diffValue/day;
	var hourC =diffValue/hour;
	var minC =diffValue/minute;
	if(monthC>=1){
		result="" + parseInt(monthC) + "月前";
	}
	else if(weekC>=1){
		result="" + parseInt(weekC) + "周前";
	}
	else if(dayC>=1){
		result=""+ parseInt(dayC) +"天前";
	}
	else if(hourC>=1){
		result=""+ parseInt(hourC) +"小时前";
	}
	else if(minC>=1){
		result=""+ parseInt(minC) +"分钟前";
	}else
	result="刚刚";
	return result;
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
