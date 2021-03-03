import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
const instance = axios.create({
	baseURL: 'https://www.fastmock.site',
	timeout:5000
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