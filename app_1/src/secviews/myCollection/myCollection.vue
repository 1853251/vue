<template>
<div>
<div class="main1">
  <img src="@/assets/house1.jpg" style="width:30%;height:372px;">
  <el-tree :data="data1" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
</div>
<div class="main2">
  <img src="@/assets/house2.jpg" style="width:30%;height:372px;">
  <el-tree :data="data2" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
</div>
 <div>
 <el-button type="primary" @click="gotoadd">返回</el-button>
 </div>
 </div>
</template>

<script>
export default {
  name: 'collection',
  data () {
    return {
      data1: [{
        label: '名字',
        children: [{
          label: '嘉实招待中心'
        }]
      }, {
        label: '地址',
        children: [{
          label: '昌吉东路同济大学'
        }]
      }, {
        label: '其他信息',
        children: [{
          label: '简介',
          children: [{
            label: '嘉定地区比较不错的房子'
          }]
        }, {
          label: '房间容量',
          children: [{
            label: '2'
          }]
        },
        {
          label: '房间面积',
          children: [{
            label: '80'
          }]
        },
        {
          label: '房间价格',
          children: [{
            label: '2000'
          }]
        },
        {
          label: '是否临街',
          children: [{
            label: '是'
          }]
        },
        {
          label: '有无WiFi',
          children: [{
            label: '提供WiFi'
          }]
        },
        {
          label: '有无浴缸',
          children: [{
            label: '提供浴缸'
          }]
        },
        {
          label: '床数',
          children: [{
            label: '1'
          }]
        }]
      }],
      data2: [{
        label: '名字',
        children: [{
          label: '嘉实招待中心'
        }]
      }, {
        label: '地址',
        children: [{
          label: '昌吉东路同济大学'
        }]
      }, {
        label: '其他信息',
        children: [{
          label: '简介',
          children: [{
            label: '嘉定地区比较不错的房子'
          }]
        }, {
          label: '房间容量',
          children: [{
            label: '2'
          }]
        },
        {
          label: '房间面积',
          children: [{
            label: '80'
          }]
        },
        {
          label: '房间价格',
          children: [{
            label: '2000'
          }]
        },
        {
          label: '是否临街',
          children: [{
            label: '是'
          }]
        },
        {
          label: '有无WiFi',
          children: [{
            label: '提供WiFi'
          }]
        },
        {
          label: '有无浴缸',
          children: [{
            label: '提供浴缸'
          }]
        },
        {
          label: '床数',
          children: [{
            label: '1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    gotoadd () {
      this.$router.replace('/')
    }
  }
}
</script>

<style scoped>

</style>
