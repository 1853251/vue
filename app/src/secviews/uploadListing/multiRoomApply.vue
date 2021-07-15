<template>
  <div>
    <el-header>
      <el-divider></el-divider>
      <!-- 面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/adminWelcome' }"
          >民宿预定系统</el-breadcrumb-item
        >
        <el-breadcrumb-item :to="{ path: '/hotelMain' }"
          >成为房东</el-breadcrumb-item
        >
        <el-breadcrumb>整套房间申请</el-breadcrumb>
      </el-breadcrumb>
      <el-divider></el-divider>
    </el-header>
    <br />
    <div style="width: 80%; margin: 0 auto; position: relative; left: 9%">
      <el-steps :space="900" :active="1" finish-status="success">
        <el-step title="完成"></el-step>
        <el-step title="进行中"></el-step>
        <el-step title="步骤 3"></el-step>
      </el-steps>
    </div>
    <br />
    <div style="width: 50%; margin: 0 auto">
      <el-table
              ref="filterTable"
              :data="tableData"
              width="100%"
      >
        <el-table-column
                type="index"
                label="房间编号"
                width="180">
        </el-table-column>
        <el-table-column
                prop="pic"
                label="上传图片状态"
                width="180">
          <template #default="scope">
            <input type="file" name="image" @change="handleUpload(scope)" accept="image/jpg,image/jpeg,image/png">
          </template>
        </el-table-column>
        <el-table-column
                prop="desc"
                label="房间描述"
                width="280"
        >
          <template #default="scope">
            <el-input v-model="scope.row.desc" placeholder="请输入"   @blur="handch(scope.row.desc)"></el-input>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="primary" style="margin-top: 10px;margin-left: 300px" @click="add()">添加房间</el-button>
      <el-button type="primary" style="margin-top: 10px;" @click="onChange()">确认</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        picList:[],
        tableData: [{
          pic: [],
          desc: '上海市普陀区金沙江路 1518 弄'
        }, {
          pic: [],
          desc: '上海市普陀区金沙江路 1568 弄'
        }, {
          pic: [],
          desc: '上海市普陀区金沙江路 1515 弄'
        }]
      };
    },
    methods:{
      handch(id)
      {
              console.log('我是需要改变的值:', id)
      },
      add(){
        this.tableData.push({
          pic: '1',
          desc: '这个房间非常大'
        })
      },
      onChange() {
        console.log(this.tableData)
        localStorage.setItem('tableDataAll',JSON.stringify(this.tableData))
        this.$router.push({path:'/hotelSubmit', query:{type:'all'}})
      },

      handleUpload(scope){
        console.log(scope);
        let inputs = document.getElementsByName('image')
        console.log(inputs)
        let files = inputs[scope.$index+1].files[0]
        let reader = new FileReader();
        reader.readAsDataURL(files)
        reader.onload = e => {
          scope.row.pic = e.target.result;
          //console.log(imgFile)
          //console.log(faceBase64)
        }
      }
    }
  };
</script>
