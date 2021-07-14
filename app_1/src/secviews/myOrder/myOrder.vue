<template>
  <div class="bg-white p-4 rounded">
    <el-row :gutter="24">
      <el-col v-for="o in 4" :key="o" :xs="24" :sm="12" :md="8" class="mb-3">
        <el-card class="box-card rounded">
          <div>
            <div class="flex-item">
              <div class="flex-label">房名</div>
              <div class="flex-content">这个是房间名哈哈哈哈哈</div>
            </div>
            <div class="flex-item">
              <div class="flex-label">订单状态</div>
              <div class="flex-content">
                <el-tag>订单状态</el-tag>
              </div>
            </div>
            <div class="flex-item">
              <div class="flex-label">预定时间</div>
              <div class="flex-content">2020-07-11</div>
            </div>
          </div>
          <div class="text-right mt-2">
            <el-button type="primary" size="small" @click="onViewOrder(o)">查看详情</el-button>
            <el-button type="danger" size="small" @click="onCancelOrder(o)">取消订单</el-button>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-pagination
      class="mt-4 text-right"
      background
      layout="total, prev, pager, next, sizes, jumper"
      :page-sizes="pageSizes"
      :page-size="pageSize"
      :total="+total"
      :current-page="currentPage"
      @current-change="onCurrentChange"
      @size-change="onSizeChange"
    />
  </div>
</template>

<script>
export default {
  name: 'Order',
  data() {
    return {
      pageSize: 8,
      pageSizes: [8, 16, 24, 32],
      total: 0,
      currentPage: 1
    }
  },
  created() {
    this.getList()
  },
  methods: {
    // 获取订单列表
    getList() {
      // 发送请求
    },
    // 当前页码改变
    onCurrentChange(currentPage) {
      this.currentPage = currentPage
      this.getList()
    },
    // 每页展示数量改变
    onSizeChange(pageSize) {
      this.pageSize = pageSize
      this.getList()
    },
    // 查看详情
    onViewOrder(id) {
      this.$router.push(`/myOrder/show/${id}`)
    },
    // 取消订单
    onCancelOrder(id) {
      this.$confirm('确定要取消订单吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(id)
        // 发送请求
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
