import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from '../router'  //引入路由配置

import {
	Message,
} from 'element-ui'

const instance = axios.create({
	baseURL: 'https://www.fastmock.site/mock/2bdbdb21d161ff95f9c13b7eb64928c8/wzx',
	timeout:5000
  });
	Vue.use(VueAxios, instance)
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
	// 在发送请求之前做些什么
	let userInfo  =localStorage.getItem("userInfo") 
	if(userInfo!=null && userInfo != "") {
		return config;
	}else {
		router.push("/")
	}
	
}, function (error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
	// 对响应数据做点什么
	if(response.data.code=="200") {
		return response;
	}else if(response.data.code=="403") {
		Message.error(response.data.desc);
		router.push("/")
	}
	
}, function (error) {
	// 对响应错误做点什么
	return Promise.reject(error);
});


const request = (opt)=> {
	if(opt.method=="get") {
		opt.params=opt.data
		opt.data = null
	}
	return axios(opt)
}
request.get = (url,data)=> {
	return instance.get(url,{
		params:data
	})
}
request.post = (url,data)=> {
	return instance.post(url,data)
}




export {request}