<template>
  <div class="certificate-page bg-white p-4 rounded">
    <h3 class="mb-4 color-primary">实名认证</h3>
     <el-form ref="form" :model="form" label-width="auto">
      <el-form-item label="昵称">
        <el-input v-model="form.name" prefix-icon="el-icon-user" placeholder='请输入昵称' />
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email" prefix-icon="el-icon-folder-opened" placeholder='请输入邮箱' />
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="form.phone" prefix-icon="el-icon-phone-outline" placeholder='请输入手机号' />
      </el-form-item>
      <el-form-item label="身份证号">
        <el-input v-model="form.identity" :disabled='true' prefix-icon="el-icon-phone-outline" placeholder='请实名认证' />
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input v-model="form.realname" :disabled='true' prefix-icon="el-icon-phone-outline" placeholder='请实名认证' />
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.sex" :disabled='true'>
          <el-radio label="男" />
          <el-radio label="女" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="头像">
        <el-upload
          class="avatar-uploader"
          action=""
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
        >
          <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </el-form-item>
      <el-form-item>
        <div class="text-right">
          <el-button type="primary" @click="onCertificate">实名认证</el-button>
          <el-button type="primary" @click="onSubmit">提交修改</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  created:function()
  {
    //这里需要获取name,email,phone,id等属性
    //getUserInfo()
  },
  name: 'Account',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        identity: '',
        realname: '',
        sex: '',
        imageUrl: ''
      }
    }
  },
  methods: {
    // 去实名认证
    onCertificate() {
      this.$router.push('/certificate/index')
    },
    // 头像上传成功
    handleAvatarSuccess() {},
    onSubmit()
    {
      //提交修改
      //updateInfo()
    }
  }
}
</script>

<style>

.account-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
}
 .el-form {
    width: 700px;
    padding: 50px 120px;
    border: 1px solid #efefef;
    border-radius: 8px;
  }
</style>