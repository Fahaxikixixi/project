<template>
    <div class='login_container'>
        <div class="login_box">
            <!-- 头像区域 -->
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="">
            </div>
            <!-- 登录表单区域 -->
            <el-form ref="loginFormRef" class="login_form" :rules="loginFormRules" :model="loginForm" label-width="0px">
                <!-- 用户名 -->
                <el-form-item prop="username" label="">
                    <el-input v-model="loginForm.username"  prefix-icon="iconfont icon-yonghu"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password" label="">
                    <el-input v-model="loginForm.password"  type="password" prefix-icon="iconfont icon-mima"></el-input>
                </el-form-item>
                <!-- 按钮区域 -->
                 <el-form-item class="btns">
                    <el-button @click="login" type="primary">登录</el-button>
                    <el-button @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
 export default {
  data(){
      return{
          //登录表单的数据绑定对象
          loginForm:{
              username:'admin',
              password:'123456'
          },
        //表单验证规则对象
        loginFormRules:{
            //验证用户名是否合法
            username:[
                //required  指的是必填项      trigger  指的是触发时机 blur 失去焦点时
                { required: true, message: '请输入用户名', trigger: 'blur' },
                { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger:'blur' }
            ],
            //验证密码是否合法
            password:[
                { required: true, message: '请输入登录密码', trigger: 'blur' },
                { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger:'blur' }
            ]
            }
      };
  },
  methods:{
      //点击重置按钮，重置登录表单
        resetLoginForm(){
           this.$refs.loginFormRef.resetFields();
        //    console.log(this);
        },
        login(){
            this.$refs.loginFormRef.validate(async valid=>{
                if(!valid) return;
                // console.log(valid);
                //{data:res}  解构赋值  并重命名
                const {data:res}= await this.$http.post('login',this.loginForm);
                console.log(res);
                if(res.meta.status!==200) return this.$message.error(res.meta.msg+'登录失败');
                this.$message.success('登录成功');
                // 1.将登录成功之后的token, 保存到客户端的sessionStorage 中
                //      1.1项目中除了登录之外的其他API接口，必须在登录之后才能访问
                //      1.2 token 只应在当前网站打开期间生效，所以将token 保存在sessionStorage 中
                console.log(res.data.token);
                window.sessionStorage.setItem('token',res.data.token);
               // 2.通过编程式导航跳转到后台主页，路由地址是/home 
               this.$router.push('/home')

            })
        }
  }
};
</script>

<style lang="less" scoped>
//scoped  添加了就是 该样式只在当前组件内生效， 不添加就是全局生效
.login_container{
    height:100%;
    background-color:#2b4b6b;
}
.login_box{
    width:450px;
    height:300px;
    background-color:#fff;
    border-radius: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
.avatar_box{
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%,-50%);
    background-color: #fff;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #eee;
    }
}
.login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
.btns{
    display: flex;
    justify-content: flex-end;
}
</style>