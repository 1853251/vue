<template>

  <el-container>
    <el-main>
      <el-table
        :data="
          tableData.filter(
            (data) => !search || String(data.user_id).startsWith(search)
          )
        "
        style="width: 70%"
        class ="tableData"
      >
        <el-table-column type="expand">
          <template #default="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <div>
                <el-form-item label="客户昵称：">
                  <span class="element">{{ props.row.user_name }}</span>
                </el-form-item>
              </div>
              <div>
                <el-form-item label="客户邮箱：">
                  <span class="element">{{ props.row.customer_email }}</span>
                </el-form-item>
              </div>
              <div>
                <el-form-item label="客户 ID：">
                  <span class="element">{{ props.row.user_id }}</span>
                </el-form-item>
              </div>
              <div>
                <el-form-item label="客户手机：">
                  <span class="element">{{ props.row.customer_phone }}</span>
                </el-form-item>
              </div>
              <div>
                <el-form-item label="真实姓名：">
                  <span class="element">{{ props.row.customer_realname }}</span>
                </el-form-item>
              </div>
              <div>
                <el-form-item label="客户性别：">
                  <span class="element">{{
                    props.row.gender ? "男" : "女"
                  }}</span>
                </el-form-item>
              </div>
              <div>
                <el-form-item label="民宿数量：">
                  <span class="element">{{ props.row.house_num }}</span>
                </el-form-item>
              </div>
            </el-form>
          </template>
        </el-table-column>
        <!--客户id-->
        <el-table-column label="客户 ID" prop="user_id" text-align:center >
        </el-table-column>
        <!--客户昵称-->
        <el-table-column
          label="客户昵称"
          prop="user_name"
          text-align:center
          class="element"
        >
        </el-table-column>
        <!--账号冻结-->
        <el-table-column label="账号冻结" align="center" class="element">
          <template #default="scope">
            <el-switch
              style="display: block"
              v-model="scope.row.landlord_status"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="正常"
              inactive-text="冻结"
              class="element"
              @change="onStatusChange"
            >
            </el-switch>
          </template>
        </el-table-column>
        <!--信用分修改-->
        <el-table-column label="信用分修改" align="center" class="element">
          <template #default="scope">
            <el-input-number
              v-model="scope.row.landlord_credit"
              :min="0"
              :max="100"
              label="信用分"
              @change="onCreditChange"
            ></el-input-number>
          </template>
        </el-table-column>
        <!--搜索框-->
        <el-table-column align="right">
          <template #header>
            <el-input
              v-model="search"
              size="mini"
              placeholder="输入用户id号搜索"
              style="height=20px"
            />
          </template>
        </el-table-column>
      </el-table>
    </el-main>
  </el-container>
</template>

<script>
export default {
  created:function()
  {
    //缺接口，获取所有房东的信息
  },
  data() {
    return {
      url: "",
      urlList: [],
      timer: null,
      tableData: [
        {
          user_id: 10000001,
          user_name: "好滋味",
          customer_email: "adafdsa@qq.com",
          customer_phone: "110",
          customer_identity: "4503041999907121511",
          customer_realname: "小可爱",
          gender: 0,
          landlord_status: true,
          landlord_credit: 100,
          house_num: 2,
        },
        {
          user_id: 10000002,
          user_name: "好滋味",
          customer_email: "ghdgdssf@qq.com",
          customer_phone: "120",
          customer_identity: "4503041999907121511",
          customer_realname: "小可爱",
          gender: 1,
          landlord_status: true,
          landlord_credit: 0,
          house_num: 3,
        },
        {
          user_id: 10000003,
          user_name: "好滋味",
          customer_email: "ghdgdssf@qq.com",
          customer_phone: "120",
          customer_identity: "4503041999907121511",
          customer_realname: "小可爱",
          gender: 1,
          landlord_status: true,
          landlord_credit: 50,
          house_num: 3,
        },
        {
          user_id: 10000004,
          user_name: "好滋味",
          customer_email: "ghdgdssf@qq.com",
          customer_phone: "120",
          customer_identity: "4503041999907121511",
          customer_realname: "小可爱",
          gender: 0,
          landlord_status: true,
          landlord_credit: 80,
          house_num: 1,
        },
      ],
      search: "",
    };
  },
};
</script>

<style scoped>
.tableData {
  left: 10%;
}
.element {
  height: 30px;
  
}
</style>