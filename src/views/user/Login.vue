<template>
  <div class="login-box">
    <form class="login-form"  method="post">
      <div class="hide-login-btn">
      <h1>Welcome</h1>
      <input class="txtb" type="text" placeholder="Username" v-model="loginForm.username">
      <input class="txtb" type="password" placeholder="Password" v-model="loginForm.password">
      <input class="login-btn" type="button" name="" v-on:click="login" value="Login">
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      responseResult: []
    }
  },
  methods:{
    login () {
        if(
            this.loginForm.username === "admin" && 
            this.loginForm.password === "123456"
        ){
            this.$message.success('登录成功',2,() =>{
                this.$router.push('/')
            });
        }else{
            this.$message.warning('用户名或密码错误');

        }
     
    }
  },
}
</script>
<style scoped>
</style>