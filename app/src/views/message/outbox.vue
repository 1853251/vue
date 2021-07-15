<template>
  <div class="main">
  <el-container>
  <el-main>
     <el-table
    :data="tableData"
    style="width: 70%"
    :default-sort = "{prop: 'time', order: 'descending'}"
    class ="tableData"
    >
    <!--发送时间-->
    <el-table-column
      prop="time"
      label="发送时间"
      width="180"
      sortable
      column-key="time"
      align="center"
      class="element"
      >
      <template #default="scope">
        <i class="el-icon-time"></i>
        <span class="element" style="margin-left: 10px">{{ scope.row.time }}</span>
      </template>
    </el-table-column>

    <!--收件人列-->  
    <el-table-column
      label="收件人"
      prop="name"
      sortable
      align="center"
      class="element"
      >
      <template #default="scope">
        <el-popover class="element"  effect="light" trigger="hover" placement="top">
          <template #default>
            <p class="element">收件人名: {{ scope.row.name }}</p>
            <p class="element">id: {{ scope.row.id }}</p>
          </template>
          <template #reference>
            <div class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </template>
        </el-popover>
      </template>
    </el-table-column>
    <!--查看信息-->
    <el-table-column
      label="查看信息"
      align="center"
      width="360"
      >
      <template #default="scope">
        <el-button type="text" @click="open(scope.row)">{{showInfo(scope.row.msg)}}</el-button>
      </template>
    </el-table-column>
    <!--状态-->
    <el-table-column
      prop="tag"
      label="标签"
      width="100"
      :filters="[{ text: '已读', value: '已读' }, { text: '未读', value: '未读' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end">
      <template #default="scope">
        <el-tag
          :type="scope.row.msg_state === '未读' ? 'primary' : 'success'"
          disable-transitions>{{scope.row.msg_state}}</el-tag>
      </template>
    </el-table-column>
  </el-table>
  </el-main>
</el-container>

  </div>
</template>

<script>
  export default {
    created:function()
    {
      //页面打开时获取用户发件的全部信息
      //sendSessions()
    },
    data() {
      return {
        tableData: [{
          time: '2016-05-02 08:00:00',
          name: '虎',
          id: 10000001,
          msg:'这是一条很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的信息',
          msg_state:'已读'
        }, {
          time: '2016-05-04 08:00:00',
          name: '王小大幅的说法萨芬发生发射点范德萨发顺丰的啊撒旦飞洒发顺丰虎',
          id: 10000002,
          msg:'这是一条信息',
          msg_state:'已读'
        }, {
          time: '2016-05-01 08:00:00',
          name: '王小虎',
          id: 10000003,
          msg:'这是一条信息',
          msg_state:'已读'
        }, {
          time: '2016-05-03 08:00:00',
          name: '王小虎',
          id: 10000004,
          msg:'这是一条信息',
          msg_state:'未读'
        }]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.msg_state === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      open(row) {
        this.$alert(row.msg, '信息内容', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },
      showInfo(msg)
      {
        if(msg.length<=20)return msg;
        return msg.slice(0,20)+'...';
      },
    }
  }
</script>

<style scoped>
.tableData {
  left: 10%;
}
.element {
  height: 30px;
  
}
</style>