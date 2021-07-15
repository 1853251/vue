<!--这里的修改主要把三人床给砍了 9:27 by hms-->
<template>
  <div>
    <br />
    <div style="width: 80%; margin: 0 auto; position: relative; left: 4%">
      <el-steps :space="900" :active="1" finish-status="success">
        <el-step title="完成"></el-step>
        <el-step title="进行中"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
    </div>
    <br />
    <div style="width: 60%; margin: 0 auto; left: 4%">
      <el-table ref="filterTable" :data="tableData" width="100%">
        <el-table-column type="index" label="床序号" width="180">
        </el-table-column>
        <el-table-column prop="price" label="房间价格" width="180">
        </el-table-column>
        <el-table-column prop="date" label="日期" width="180">
        </el-table-column>
        <el-table-column prop="tag" label="床选项" width="180">
          <template #default="scope">
            <el-select
              v-model="scope.row.tag"
              placeholder="请选择"
              @change="searchSelect(scope.row.tag)"
            >
              <el-option
                v-for="item in selectList"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </template>
        </el-table-column>
      </el-table>
      <el-button
        type="primary"
        style="margin-top: 10px; margin-left: 300px"
        @click="onChange()"
        >确认</el-button
      >
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      selectList: [
        { label: "单人床", value: "单人床" },
        { label: "双人床", value: "双人床" }
      ],
      tableData: [
        {
          date: "2016-05-02",
          price: 100,
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "单人床",
        },
        {
          date: "2016-05-04",
          price: 100,
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "单人床",
        },
        {
          date: "2016-05-01",
          price: 100,
          address: "上海市普陀区金沙江路 1519 弄",
          tag: "单人床",
        },
        {
          date: "2016-05-03",
          price: 100,
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "单人床",
        },
      ],
    };
  },
  methods: {
      //獲取框中的值
    searchSelect(value) {
      console.log(value);
      this.searchConfig = value;
    },

    onChange() {
      localStorage.setItem("tableData", JSON.stringify(this.tableData));
      this.$router.push("/hotelSubmit");
    },
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    filterTag(value, row) {
      console.log(value, row);
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    },
  },
};
</script>
<style>
.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}
</style>
