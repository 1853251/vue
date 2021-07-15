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
        class="tableData"
      >
        <el-table-column type="expand" class="element">
          <template #default="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <div>
                <el-form-item label="房主 ID：" class="element">
                  <span class="element">{{ props.row.user_id }}</span>
                </el-form-item>
              </div>
              <div>
                <el-form-item label="房主姓名：" class="element">
                  <span class="element">{{ props.row.customer_realname }}</span>
                </el-form-item>
              </div>
              <div>
                <el-form-item label="房主邮箱：" class="element">
                  <span class="element">{{ props.row.customer_email }}</span>
                </el-form-item>
              </div>
              <div>
                <el-form-item label="房主手机："  class="element"> 
                  <span>{{ props.row.customer_phone }}</span>
                </el-form-item>
              </div>
              <div>
                <el-form-item label="民宿描述：" class="element">
                  <span>{{ props.row.homestay_info }}</span>
                </el-form-item>
              </div>
              <div>
                <el-form-item label="民宿容量：">
                  <span class="element">{{ props.row.homestay_cap }}</span>
                </el-form-item>
              </div>
              <div>
                <el-form-item label="民宿面积：">
                  <span class="element">{{
                    props.row.homestay_area + " 平方米"
                  }}</span>
                </el-form-item>
              </div>
            </el-form>
          </template>
        </el-table-column>
        <!--房源id-->
        <el-table-column label="民宿 ID" prop="homestay_id" text-align:center  class="element">
        </el-table-column>
        <!--房东id-->
        <el-table-column label="房东 ID" prop="user_id" text-align:center  class="element">
        </el-table-column>
        <!--民宿位置-->
        <el-table-column
          label="民宿位置"
          prop="homestay_addr"
          text-align:center
           class="element"
        >
        </el-table-column>
        <!--民宿冻结-->
        <el-table-column label="民宿冻结" align="center" class="element">
          <template #default="scope">
            <el-switch
              style="display: block"
              v-model="scope.row.homestay_status"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-text="正常"
              inactive-text="冻结"
              class="element"
            >
            </el-switch>
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
      url: "",
      urlList: [],
      timer: null,
      tableData: [
        {
          user_id: 10000001,
          homestay_id: 10000007,
          homestay_addr: "同济大学嘉定校区",
          customer_email: "adafdsa@qq.com",
          customer_phone: "110",
          customer_realname: "小可爱",
          homestay_status: true,
          homestay_cap: 5,
          homestay_info: "这是一段描述信息",
          homestay_area: 120.1,
        },
        {
          user_id: 10000003,
          homestay_id: 10000009,
          homestay_addr: "北京大学南校区",
          customer_email: "person@qq.com",
          customer_phone: "170",
          customer_realname: "张大户",
          homestay_status: true,
          homestay_cap: 6,
          homestay_info: "这是一段描述信息",
          homestay_area: 87.1,
        },
        {
          user_id: 10000007,
          homestay_id: 10000080,
          homestay_addr: "上海东方明珠附近",
          customer_email: "ttt@qq.com",
          customer_phone: "1712130",
          customer_realname: "王大虎",
          homestay_status: true,
          homestay_cap: 2,
          homestay_info: "这是一段描述信息",
          homestay_area: 92,
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
  height: 40px;
}
</style>