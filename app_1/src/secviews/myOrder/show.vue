<template>
  <div class="bg-white p-4 rounded">
    <article class="basis-wrapper">
      <el-card class="box-card rounded">
        <div class="flex-item">
          <div class="flex-label">房名</div>
          <div class="flex-content">这个是房间名哈哈哈哈哈</div>
        </div>
        <div class="flex-item">
          <div class="flex-label">地址</div>
          <div class="flex-content">这个是地址哈哈哈哈超出打点</div>
        </div>
        <div class="flex-item">
          <div class="flex-label">电话</div>
          <div class="flex-content">18888888888</div>
        </div>
      </el-card>
      <el-card class="box-card rounded">
        <div class="text-medium"><i class="el-icon-alarm-clock color-primary mr-1" />入住时间</div>
        <div class="bg-gray mt-4 pb-1">
          <h1 class="text-larger color-success">14</h1>
          <h3 class="color-success2">2月</h3>
        </div>
      </el-card>
      <el-card class="box-card rounded">
        <div class="text-medium"><i class="el-icon-alarm-clock color-primary mr-1" />退房时间</div>
        <div class="bg-gray mt-4 pb-1">
          <h1 class="text-larger color-danger">19</h1>
          <h3 class="color-danger2">2月</h3>
        </div>
      </el-card>
    </article>
    <article class="detail-wrapper mt-4">
      <el-card class="box-card rounded">
        <div class="d-flex align-items-center justify-content-between">
          <div>
            <div>
              <div class="flex-item">
                <div class="flex-label">预留姓名</div>
                <div class="flex-content">这个是名字哈哈哈</div>
              </div>
              <div class="flex-item">
                <div class="flex-label">预留电话</div>
                <div class="flex-content">18888886666</div>
              </div>
            </div>
            <div class="mt-2">
              <div class="flex-item">
                <div class="flex-label">单价</div>
                <div class="flex-content">￥288</div>
              </div>
              <div class="flex-item">
                <div class="flex-label">数量</div>
                <div class="flex-content">2</div>
              </div>
              <div class="flex-item">
                <div class="flex-label">总价</div>
                <div class="flex-content color-primary text-bold">￥576</div>
              </div>
            </div>
            <div class="mt-2">
              <div class="flex-item">
                <div class="flex-label">订单状态</div>
                <div class="flex-content">
                  <el-tag type="success">已预订</el-tag>
                </div>
              </div>
            </div>
          </div>
          <div>
            <el-button type="danger">取消预订</el-button>
          </div>
        </div>
      </el-card>
    </article>
  </div>
</template>

<script>
export default {
  name: 'OrderDetail',
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>

.basis-wrapper {
  display: flex;
  align-items: center;
  .el-card {
    height: 170px;
    &:nth-of-type(1) {
      flex: 1;
    }
    &:nth-of-type(2), &:nth-of-type(3) {
      width: 240px;
      margin-left: 20px;
      text-align: center;
    }
  }
}

.detail-wrapper {
  .flex-label {
    width: 180px;
  }
}
</style>
