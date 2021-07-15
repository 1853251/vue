<template>
  <div>
    <br />
    <div style="width: 80%; margin: 0 auto; position: relative; left: 4%">
      <el-steps :space="900" :active="2" finish-status="success">
        <el-step title="完成"></el-step>
        <el-step title="完成"></el-step>
        <el-step title="進行中"></el-step>
      </el-steps>
    </div>

      <div style="width: 50%; margin: 0 auto">
            <el-table
                    ref="filterTable"
                    :data="tableData"
                    width="100%"
                    style="margin-left: 100px"
                    v-if="$route.query.type === 'all'"
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
                        <i class="el-icon-check" v-if="scope.row.pic === '1'"></i>
                        <i class="el-icon-close" v-else></i>
                    </template>
                </el-table-column>
                <el-table-column
                        prop="desc"
                        label="房间描述"
                        width="280"
                >
                </el-table-column>
            </el-table>
      </div>
           <el-button type="primary" style="margin-top: 10px;margin-left: 300px" @click="onChange()">确认</el-button>
            <el-button style="margin-top: 10px;" @click="$router.go(-1)">取消</el-button>


  </div>
</template>


<script>
    export default {
        data(){
            return{
                tableData:[],
                form:{}
            }
        },
        created() {
          
            this.tableData=JSON.parse( localStorage.getItem('tableData') );
            this.form=JSON.parse( localStorage.getItem('ruleForm') );
        },
        methods:{
            onChange(){
                //添加民宿
                //addHomeStays()
                this.$message.success('提交成功！')
            }
        }
    }
</script>
