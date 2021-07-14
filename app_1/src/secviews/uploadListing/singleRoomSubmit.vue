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
                <el-breadcrumb-item v-if="$route.query.type === 'all'" :to="{ path: '/hotelMultiApply' }">整套房间申请</el-breadcrumb-item>
                <el-breadcrumb-item v-else :to="{ path: '/hotelSingleApply' }">单间房申请</el-breadcrumb-item>
                <el-breadcrumb>确认提交</el-breadcrumb>
            </el-breadcrumb>
            <el-divider></el-divider>
        </el-header>
        <br />
        <div style="width: 80%; margin: 0 auto; position: relative; left: 9%">
            <el-steps :space="900" :active="2" finish-status="success">
                <el-step title="完成"></el-step>
                <el-step title="完成"></el-step>
                <el-step title="进行中"></el-step>
            </el-steps>
        </div>
        <br />
        <div style="width: 30%; margin: 0 auto; color: #666">
            <el-row :gutter="40">
                <el-col :span="12"><div>
                    民宿名称：{{form.name}}
                </div></el-col>
                <el-col :span="12"><div>
                    民宿地址：{{form.region}}
                </div></el-col>
            </el-row>
            <el-row :gutter="40">
                <el-col :span="12"><div>
                    客人容量：{{form.clientNum}}
                </div></el-col>
                <el-col :span="12"><div>
                    客床数量：{{form.bedNum}}
                </div></el-col>
            </el-row>
            <el-row :gutter="40">
                <el-col :span="12"><div>
                    设施情况：{{form.equipment}}
                </div></el-col>
                <el-col :span="12"><div>
                    周边情况：{{form.surrounding}}
                </div></el-col>
            </el-row>
            <el-row :gutter="40">
                <el-col :span="24"><div>
                    房间简介：{{form.desc}}
                </div></el-col>
            </el-row>
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
            <el-table
                    ref="filterTable"
                    :data="tableData"
                    width="100%"
                    v-else
            >
                <el-table-column
                        type="index"
                        label="床序号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="price"
                        label="姓名"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="date"
                        label="日期"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="tag"
                        label="床选项"
                        width="180"
                >
                </el-table-column>
            </el-table>
            <el-button type="primary" style="margin-top: 10px;margin-left: 300px" @click="onChange()">确认</el-button>
            <el-button style="margin-top: 10px;" @click="$router.go(-1)">取消</el-button>
        </div>
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
            if (this.$route.query.type === 'all'){
                this.tableData=JSON.parse( localStorage.getItem('tableDataAll') );
            } else{
                this.tableData=JSON.parse( localStorage.getItem('tableData') );
            }
            this.form=JSON.parse( localStorage.getItem('ruleForm') );
        },
        methods:{
            onChange(){
                this.$message.success('提交成功！')
            }
        }
    }
</script>
