<template>
<el-container>
  <el-main>
  <el-table
    :data="tableData.filter(data => !search || String(data.user_id).startsWith(search))"
    style="width: 100%">
    <el-table-column type="expand">
      <template #default="props">
        <el-form label-position="left" inline class="demo-table-expand">
        <div>
          <el-form-item label="客户昵称：">
            <span>{{ props.row.user_name }}</span>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="客户邮箱：">
            <span>{{ props.row.customer_email }}</span>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="客户 ID：">
            <span>{{ props.row.user_id }}</span>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="客户手机：">
            <span>{{ props.row.customer_phone }}</span>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="真实姓名：">
            <span>{{ props.row.customer_realname }}</span>
          </el-form-item>
        </div>
        <div>
          <el-form-item label="客户性别：">
            <span>{{ props.row.gender?'男':'女' }}</span>
          </el-form-item>
        </div>
        </el-form>
      </template>
    </el-table-column>
    <!--客户id-->
    <el-table-column
      label="客户 ID"
      prop="user_id"
      text-align:center
      >
    </el-table-column>
    <!--客户昵称-->
    <el-table-column
      label="客户昵称"
      prop="user_name"
      text-align:center
      >
    </el-table-column>
    <!--账号冻结-->
    <el-table-column
      label="账号冻结"
      align="center">
      <template #default="scope">
      <el-switch
        style="display: block"
        v-model="scope.row.tenant_status"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-text="正常"
        inactive-text="冻结"
      >
      </el-switch>
      </template>
    </el-table-column>
    <!--信用分修改-->
    <el-table-column
    label="信用分修改"
    align="center"
    >
    <template #default="scope">
    <el-input-number v-model="scope.row.tenant_credit" @change="handleChange" :min="0" :max="100" label="信用分"></el-input-number>
    </template>
    </el-table-column>
    <!--搜索框-->
     <el-table-column
      align="right">
      <template #header>
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入用户id号搜索"/>
      </template>
      
    </el-table-column>
  </el-table>
  </el-main>
</el-container>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
          user_id: 10000001,
          user_name: '好滋味',
          customer_email: 'adafdsa@qq.com',
          customer_phone: '110',
          customer_identity: '4503041999907121511',
          customer_realname:'小可爱',
          gender: 0,
          tenant_status:true,
          tenant_credit:100
        }, {
          user_id: 10000002,
          user_name: '好滋味',
          customer_email: 'ghdgdssf@qq.com',
          customer_phone: '120',
          customer_identity: '4503041999907121511',
          customer_realname:'小可爱',
          gender: 1,
          tenant_status:true,
          tenant_credit:0,
        }, {
           user_id: 10000003,
          user_name: '好滋味',
          customer_email: 'ghdgdssf@qq.com',
          customer_phone: '120',
          customer_identity: '4503041999907121511',
          customer_realname:'小可爱',
          gender: 1,
          tenant_status:true,
          tenant_credit:50,
        }, {
          user_id: 10000004,
          user_name: '好滋味',
          customer_email: 'ghdgdssf@qq.com',
          customer_phone: '120',
          customer_identity: '4503041999907121511',
          customer_realname:'小可爱',
          gender: 0,
          tenant_status:true,
          tenant_credit:80,
        }],
        search: ''
      }
    }
  }
</script>

<style scoped>

</style>