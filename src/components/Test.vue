<template>
  <div class="hello">
    <pre>
          request要求:
          1: 接受 request.get  并且可以通过  request.get(url, data 或 params ) 正常传参
          2: 接受对象格式的参数 request(options):
            options参数为: 
                - url 请求地址
                - method 请求方式
                - data 需求携带的参数 (注意 get请求中的传参字段是 params, 要求兼容 )
      </pre
    >

    <button @click="handleRequest1('get')">发起get请求</button>
    <button @click="handleRequest1('post')">发起post请求</button>
    <button @click="handleRequest2('put')">发起put请求</button>
    <button @click="handleRequest2('delete')">发起delete请求</button>
  </div>
</template>

<script>
import { request } from "../api";
export default {
  methods: {
    /** 发起请求1
     * @param {string} method 请求方式
     */
    handleRequest1(method) {
      request[method](
        "https://www.fastmock.site/mock/240ac3764aa8ee3963b796cfdc668a88/test/getinfo",
        {
          key: "测试传参",
        }
      ).then((res) => {
        console.log(res);
      });
    },

    /** 发起请求2
     * @param {string} method 请求方式
     */
    handleRequest2(method) {
      request({
        url:
          "https://www.fastmock.site/mock/240ac3764aa8ee3963b796cfdc668a88/test/getinfo",
        method,
        data: {
          key: "测试传参",
        },
      }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
button {
  margin: 10px;
  padding: 10px;
}
</style>
