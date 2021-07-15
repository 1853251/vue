<template>
  <div class="certificate-page bg-white p-4 rounded">
    <h3 class="mb-4 color-primary">实名认证</h3>
   <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
            label-width="auto"
            class="demo-ruleForm"
          >
      <el-form-item label="真实姓名" prop="realname">
        <el-input v-model="ruleForm.realname" prefix-icon="el-icon-user" placeholder="请输入真实姓名" />
      </el-form-item>
      <el-form-item label="身份证号" prop="identity">
        <el-input v-model="ruleForm.identity" prefix-icon="el-icon-folder-opened" placeholder="请输入身份证号" />
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="ruleForm.sex" prop="sex">
          <el-radio label="男" />
          <el-radio label="女" />
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <div class="text-right">
          <el-button type="primary" @click="onSubmit">提交</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'Cerificate',
  data() {
    return {
      ruleForm: {
        realname: '',
        identity: '',
        sex: '男'
      },

       rules: {
        realname: [
          { required: true, message: "请输入您的姓名", trigger: "blur" },
          
        ],
         identity: [
          { required: true, message: "请输入您的身份证号", trigger: "blur" },
           {
            min: 18,
            max: 18,
            message: "请认真核对位数",
            trigger: "blur",
          },
        ],

         sex: [
          { required: true, message: "请选择性别", trigger: "blur" },
        ],

        },

        
    }
  },
  methods: {
    // 实名认证
    onSubmit() {
      this.$confirm('实名认证后无法修改，确定吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // 实名认证
        //verified(data)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .certificate-page {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .el-form {
      width: 700px;
      padding: 50px 120px;
      border: 1px solid #efefef;
      border-radius: 8px;
    }
  }
</style>
