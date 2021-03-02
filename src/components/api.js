import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

const request = (opt)=> {
	if(opt.method=="get") {
		opt.params=opt.data
		opt.data = null
	}
	return axios(opt)
}
request.get = (url,data)=> {
	return axios.get(url,{
		params:data
	})
}
request.post = (url,data)=> {
	return axios.post(url,data)
}
export {request}