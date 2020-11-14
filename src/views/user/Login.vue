<template>
  <div class="login-box">
    <form class="login-form" method="post">
      <div class="hide-login-btn">
      <h1>Welcome</h1>
      <input class="txtb" name="username" type="text" placeholder="Username" v-model="loginForm.username">
      <input class="txtb" name="password" type="password" placeholder="Password" v-model="loginForm.password">
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
            this.$message.success('登录成功',1,() =>{
                this.$router.push('/userokr')
            });
        }else{
            this.$message.warning('用户名或密码错误');

        }
    }
  },
  
}
</script>
<style slang='scss'>
* {
    font-family: "montserrat", sans-serif;
}
body {
    margin: 0;
    padding: 0;
    background: #333;
}
.login-box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(45deg, #9fbaa8, #31354c);
    transition: 0.4s;
}
.login-form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
}
.login-form h1 {
    font-weight: 400;
    margin-top: 0;
}
.txtb {
    display: block;
    box-sizing: border-box;
    width: 240px;
    background: #ffffff28;
    border: 1px solid white;
    padding: 10px 20px;
    color: white;
    outline: none;
    margin: 10px 0;
    border-radius: 6px;
    text-align: center;
}
.login-btn {
    width: 240px;
    background: #2c3e50;
    border: 0;
    color: white;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
}
</style>