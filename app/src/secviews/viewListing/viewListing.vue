<template>
  <el-container>

    <el-main>
      <el-table
    style="width: 100%"
    :default-sort = "{prop: 'grade', order: 'descending'}"
    :data="tableData.filter(data => !search || data.homestay_name.includes(search)|| data.homestay_addr.includes(search))"
    >
    <!--筛选-->
    <el-table-column
      align="left"
      width="80"
      >
      <template #header>
      <div>
        <el-button 
        type="text" 
        size="mini" icon="el-icon-s-operation"  @click="output">筛选</el-button>
        <!-- Form -->

      <el-dialog title="筛选条件" v-model="dialogFormVisible">
        <el-form :model="form">
        <!--客容量-->
          <el-form-item label="客容量" 
          :label-width="formLabelWidth"
          prop="homestay_cap"
          >
            <el-input-number v-model="homestay_cap" @change="handleChange" :min="1"  label="人数"></el-input-number>
          </el-form-item >
          <!--日期-->
          <el-form-item label="时间" 
          :label-width="formLabelWidth"
          
          >
              <el-date-picker
            v-model="value"
            type="daterange"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :shortcuts="shortcuts"
            :disabled-date="disabledDate"
          >
          </el-date-picker>
          </el-form-item >

          <!--民宿类型-->
          <el-form-item label="民宿类型" :label-width="formLabelWidth">
            <el-select v-model="myOption" placeholder="全部类型">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
          </el-form-item >
          

        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="handleFilter">确 定</el-button>
          </span>
        </template>
      </el-dialog>

      </div>
      </template>
    </el-table-column>
    <!--图片加载，搞死我了-->
          <el-table-column label="图片"
          width="250"
          align="center"
          >
            <template #default="scope">
              <el-image :src="scope.row.homestay_pic" fit="fill"></el-image>
            </template>
          </el-table-column>
      <!--房名列-->
    <el-table-column
        label="房名"
        prop="homestay_name"
        sortable
        align="center"
        >
      <template #default="scope">
        <el-popover effect="light" trigger="hover" placement="top">
          <template #default>
            <p>房名: {{ scope.row.homestay_name }}</p>
            <p>住址: {{ scope.row.homestay_addr }}</p>
            <p>容量: {{ scope.row.homestay_cap }}</p>
          </template>
          <template #reference>
            <div class="name-wrapper">
              <el-tag size="medium">{{ scope.row.homestay_name }}</el-tag>
            </div>
          </template>
        </el-popover>
      </template>
    </el-table-column>

    <!--价格列-->
          <el-table-column
            label="价格"
            prop="homestay_price"
            align="center"
            sortable
            >
            <template #default="scope">
                <div slot="reference" class="top">
                  <el-tag size="medium">{{ scope.row.homestay_price }}</el-tag>
                </div>
            </template>
          </el-table-column>

    <!--评分列-->
          <el-table-column
            prop="grade"
            label="评分"
            align="center"
            sortable
            >
            <template #default="scope">
        <el-popover effect="light" trigger="hover" placement="top">
          <template #default>
            <p>评分: {{ scope.row.grade }}</p>
            <p>评分数: {{ scope.row.grade_num }}</p>
          </template>
          <template #reference>
            <div class="name-wrapper">
              <el-tag size="medium">{{ scope.row.grade }}</el-tag>
            </div>
          </template>
        </el-popover>
      </template>
    </el-table-column>

    <!--操作列-->          
          <el-table-column
           label="操作"
           align="center"
          >
            <template #default="scope">
              <el-button type="primary" round>查看详情</el-button>
            </template>
          </el-table-column>
    <!--房名和地址搜索-->
    <el-table-column
      align="right">
      <template #header>
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入房名或地址进行搜索"/>
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
      //获取所有民宿信息
      //getAllHomeStays()
   },
    data() {
      return {
        tableData: [{
          homestay_id:10000001,
          homestay_price: 27,
          grade:4.7,
          grade_num:10,
          homestay_name: '套件',
          homestay_addr: '上海市普陀区金沙江路 1518 弄',
          homestay_cap:5,
          homestay_pic:require("@/assets/444.jpg"),
        }, {
          homestay_id:10000002,
          homestay_price: 1300,
          grade:4.7,
          grade_num:10,
          homestay_name: '这是一个很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的房名',
          homestay_addr: '上海市普陀区金沙江路 1517 弄',
          homestay_cap:3,
          homestay_pic:require("@/assets/abc.jpg"),
        }, {
          homestay_id:10000003,
          homestay_price: 140,
          grade:4.3,
          grade_num:8,
          homestay_name: '精品房',
          homestay_addr: '上海市普陀区金沙江路 1519 弄',
          homestay_cap:2,
          homestay_pic:require("@/assets/222.jpg"),
        }, {
          homestay_id:10000004,
          homestay_price:  120,
          grade:4.8,
          grade_num:10,
          homestay_name: '经理房',
          homestay_addr: '上海市普陀区金沙江路 1516 弄',
          homestay_cap:10,
          homestay_pic:require("@/assets/333.jpg"),

        }],
        options: [{
            value: '1',
            label: '全部'
          }, {
            value: '2',
            label: '整套房'
          }, {
            value: '3',
            label: '单间房'
          }],
        myOption:'1',
        search:'',
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        homestay_cap:1,
         //不能超过30天
          disabledDate(time) {
            console.log(1);
              let a = Math.floor(Date.now()/86400000), b = Math.floor(time.getTime()/86400000);
              let diff=b-a;
            return (diff<0||diff>30);
          },
          
        value:'',
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },

    output()
    {
      var that=this;
      //console.log(that.dialogFormVisible);
      that.dialogFormVisible=true;
      //console.log(that.dialogFormVisible);
    },
    handleFilter()
    {
        var that=this
        that.dialogFormVisible = false;
        //民宿筛选
        //filterHomeStays();
    }
    }
  }
</script>

<style scoped>

</style>
