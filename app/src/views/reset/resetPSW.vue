<template>
  <div class="loginArea">
    <el-row align="middle">
      <el-col :span="6" :offset="9">
        <el-card shadow="always" class="loginCard">
          <div class="loginTitle">找回密码</div>
          <div class="logo">
            <el-image class="logo-image" :src="logo" fit="contain"/>
          </div>
          <el-divider></el-divider>
          <el-form
              :model="userInfo"
              class="loginForm"
              status-icon
              ref="userinforef"
              :rules="rules"
          >
            <el-form-item prop="username">
              <el-input
                  v-model="userInfo.username"
                  placeholder="请输入用户名"
                  ref="username"
                  name="username"
                  type="text"
              ></el-input>
            </el-form-item>
            <el-form-item prop="email">
              <el-input
                  type="email"
                  v-model="userInfo.email"
                  placeholder="请输入绑定的电子邮箱"
                  ref="email"
              >
              </el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-input
                  class="codeText"
                  type="text"
                  v-model="userInfo.code"
                  placeholder="请输入验证码"
                  ref="code"
                  autocomplete="off"
                  v-if="isSent"
              >
              </el-input>
            </el-form-item >
            <el-form-item>
              <el-button
                  class="codeBtn"
                  type="primary"
                  style="float: right; width: 100px; margin: 0 !important;"
                  @click="handleGetCode"
                  :disabled="isSent"
              >{{ isSent ? timeout + 's' : '获取验证码' }}</el-button>
            </el-form-item>
            <el-form-item prop="password" v-if="isSent">
              <el-input
                  type="password"
                  auto-complete="new-password"
                  v-model="userInfo.password"
                  placeholder="请输入密码"
                  ref="password"
                  tabindex="4"
                  class="cleanPass"
              ></el-input>
            </el-form-item>
            <el-form-item prop="checkpass" v-if="isSent">
              <el-input
                  class="cleanPass"
                  type="password"
                  v-model="userInfo.checkpass"
                  placeholder="确认密码"
                  ref="checkpass"
                  name="checkpass"
                  tabindex="5"
                  autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item v-if="isSent">
              <el-button
                  type="primary"
                  style="width:100%; margin-bottom:30px;"
                  @click="handleReset(userInfo)"
              >重置密码</el-button>
            </el-form-item>
          </el-form>
          <div class="registerBtn">
            <el-button type="text" @click="toLogin">登录</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {defineComponent, reactive, ref, getCurrentInstance } from 'vue'
import {validateVEmail, validateVPassword, validateVCheckCode} from "@/utils/validate"
import {register} from "utils/api";

export default defineComponent({
  name: "Login",
  setup(){
    getCurrentInstance()
    let userInfo = reactive({
      username:'',
      email:'',
      code:'',
      password:'',
      checkpass:''
    })
    /**
     * 表单校验
     */
        // 验证码验证
    let validateEmail = (rule, value, callback) => {
          if (value === "") callback(new Error("电子邮箱不能为空！"));
          else if (validateVEmail(value)) {
            callback(new Error("电子邮箱格式有误！"));
          } else callback();
        };
    let validateCode = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('验证码不能为空'));
      } else if (validateVCheckCode(value)) {
        callback(new Error('验证码格式不正确'));
      }else if(value === 'qwerty'){
        callback()
      }else{
        callback(new Error('验证码错误'));
      }
      //可以在这里做验证码的检验
    };
    // 密码验证
    let validatePassword = (rule, value, callback) => {
      if (value === "") callback(new Error("密码不能为空！"));
      else if (validateVPassword(value)) {
        callback(new Error("密码格式有误！"));
      } else callback();
    };
    let validatePassword2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== userInfo.password) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    let logo = ref(require('assets/logo2.jpg'))
    // 表单验证
    const rules = reactive({
      username:[
        {required:true,message:'用户名不能为空！',trigger:'blur'}
      ],
      email: [
        {
          validator: validateEmail,
          trigger: "blur"
        }
      ],
      code: [
        {
          validator: validateCode,
          trigger: "blur"
        }
      ],
      password:[
        {
          validator:validatePassword,
          trigger:"blur"
        }
      ],
      checkpass:[
        {
          validator:validatePassword2,
          trigger:"blur"
        }
      ]
    });
    let isSent = ref(false)
    let timeout = ref()
    return{
      userInfo,
      logo,
      rules,
      isSent,
      timeout
    }
  },
  methods:{
    handleLogin(formName){
      const that = this
      const fieldPromise = Object.getOwnPropertyNames(formName).map(item => {
        return new Promise((resolve) => {
          that.$refs.userinforef.validateField(item, error =>{
            resolve(error);
          })
        })
      });
      //利用 Promise.all 方法统一处理上面 map 出来的方法
      Promise.all(fieldPromise).then(item => {
        //过滤数组中的空字符串，list.length为0表示通过验证
        const list = item.filter(data => data);
        if(list.length === 0){
          console.log('输入校验通过');
          //进行注册操作
          register(this.userInfo)
              .then(res => {
                if(res.data.type === 'success'){
                  that.$notify({
                    title:'注册成功',
                    message:"注册账号成功，请输入用户名和密码登录系统。",
                    duration:800,
                    onClose:() => {
                      setTimeout(() => that.$router.replace('/login'),300)
                    }
                  })
                }
                if(res.data.type === 'hasExisted'){
                  that.$notify.info({
                    title:'用户已存在',
                    message:"该用户已存在，请直接登录",
                    duration:1500,
                    onClose:() => {
                      setTimeout(() => that.$router.replace('/login'),300)
                    }
                  })
                }
              })
              .catch(err => {
                if(err == 'Error: Network Error'){
                  that.$notify.error({
                    title:'注册失败',
                    message:"由于服务器原因注册失败，请稍后再试！",
                    showClose:false,
                    duration:2000
                  })
                }
              })
        }
      });
    },
    toLogin(){
      this.$router.replace('/login')
    },
    handleGetCode(){
      this.$notify({
        title:'验证码发送成功',
        showClose:false,
        duration:1000,
        type: 'success',
      })
      this.isSent = true
      this.setTimeout2()
    },
    setTimeout2(){
      for(let i = 0; i < 60;i++){
        setTimeout(() => {
          this.timeout = 60 - i
        },i * 1000)
      }
    },
    handleReset(formName){
      const that = this
      const fieldPromise = Object.getOwnPropertyNames(formName).map(item => {
        return new Promise((resolve) => {
          that.$refs.userinforef.validateField(item, error =>{
            resolve(error);
          })
        })
      });
      //利用 Promise.all 方法统一处理上面 map 出来的方法
      Promise.all(fieldPromise).then(item => {
        //过滤数组中的空字符串，list.length为0表示通过验证
        const list = item.filter(data => data);
        if(list.length === 0){
          //在这里进行重置密码的操作
          this.$notify({
            title:'重置密码成功，即将跳转登录界面',
            showClose:false,
            duration:1500,
            type: 'success',
            onClose(){
              that.$router.replace('/login')
            }
          })
        }else{
          that.$notify.error({
            title:'重置失败',
            message:"请按照表单提示填写好信息",
            duration:1500,
            showClose:false
          })
        }
      });
    }
  }
})
</script>

<style scoped lang="less">
.loginArea{
  height: 100vh;
  background: linear-gradient(to bottom, #FF512F, #DD2476);
  .loginTitle{
    text-align: center;
    font-size: 20px;
    font-weight: 10;
    margin: 30px 0 30px 0;
  }
  .logo{
    .logo-image{
      display: block;
      margin: 0 auto;
      border-radius: 40px;
      height: 80px;
      width: 80px;
    }
  }
  .loginCard{
    margin-top: 30%;
    background-color: rgba(255,255,255,0.8);
    box-shadow: white;
    .registerBtn{
      float: right;
      margin-top: -30px;
      margin-bottom: 20px;
    }
  }
  .loginForm{
    margin-top: 50px;
  }
  .cleanPass{
    /deep/ .el-input__inner {
      -webkit-text-security:disc!important;
    }
  }
}
</style>
