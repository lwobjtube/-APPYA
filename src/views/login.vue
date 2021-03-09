<template>
  <div>
    <div style="display: flex; justify-content: center; margin-top: 150px">
      <el-card style="width: 380px">
        <div slot="header">
          <span>登录</span>
        </div>
        <el-row align="middle" type="flex">
          <el-col :span="6">用户名</el-col>
          <el-col :span="18">
           <el-input
                v-model="user.username"
                placeholder="请输入用户名"
              ></el-input>
          </el-col>
        </el-row>

         <el-row align="middle" type="flex" style="margin-top:30px">
          <el-col :span="6">密码</el-col>
          <el-col :span="18">
            <el-input
                type="password"
                v-model="user.password"
                placeholder="请输入密码"
                @keydown.enter.native="doLogin"
              ></el-input>
          </el-col>
        </el-row>
        
        <el-row >
          <el-col  :offset="6" :span="18">
            <el-button  style="width: 100%;margin-top:30px" type="primary" @click="doLogin">登录</el-button>
          </el-col>
        </el-row>
        <!-- 
        <table>
          <tr>
            <td>用户名</td>
            <td>
              <el-input
                v-model="user.username"
                placeholder="请输入用户名"
              ></el-input>
            </td>
          </tr>
          <tr></tr>
          <tr style="margin: 0px 10px">
            <td>密码</td>
            <td>
              <el-input
                type="password"
                v-model="user.password"
                placeholder="请输入密码"
                @keydown.enter.native="doLogin"
              ></el-input>
            </td>
          </tr>
          <tr>
            <td></td>
            <span style="padding: 1px"></span>
          </tr>
          <tr>
            <td colspan="2">
              <el-button style="width: 330px" type="primary" @click="doLogin"
                >登录</el-button
              >
            </td>
          </tr>
        </table>
        -->
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    doLogin() {
      
     if(this.user.username=="123") {
          localStorage.setItem("userInfo", JSON.stringify( this.user))
          this.$router.replace("/home");
        }
    },
  },
  loginSubmit(formName) {
    // 为表单绑定验证功能
    this.$refs[formName].validate((valid) => {
      if (valid) {
        // 使用 vue-router 路由到指定页面，该方式称之为编程式导航
        console.log("to loginSuccess");
        
      } else {
        return false;
      }
    });
  },
};
</script>

<style scoped></style>