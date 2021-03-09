<template>
  <div class="test2">
    <h1 v-if="userInfo!=null">用户名：{{userInfo.username}}</h1>

    <el-button @click="getUserList">获取信息</el-button>
     <el-button @click="getMoney">获取余额</el-button>
  </div>
</template>

<script>

export default {
  name: "home",
  data() {
    return {
        userInfo:null,
    }
  },
  created() {
    this.userInfo = JSON.parse( localStorage.getItem("userInfo") )
  },
  methods:{
    getUserList() {
      // this.$message.error("12321");
      this.axios.get("/userList")
      .then(res=>{
        console.log(res)
      })
    },
    getMoney() {
      this.axios.get("/money")
      .then(res=>{
        console.log(res)
      })
    }
  }
};
      
</script>