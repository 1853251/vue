<template>
    <div style="width: 80%; margin: 0 auto; position: relative; left: 9%">
        <el-steps :space="900" :active="0" finish-status="success">
            <el-step title="进行中"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
        </el-steps>
    </div>

    <div style="width: 60%; margin: 0 auto; left: 4%">
        <el-form
                :model="ruleForm"
                :rules="rules"
                ref="ruleForm"
                label-width="width:50%"
                class="demo-ruleForm"
        >
            <el-row :gutter="10">
                <el-col :span="11">
                    <el-form-item label="民宿名称" prop="name">
                        <el-input
                                v-model="ruleForm.name"
                                style="width: 70%"
                                @change="changeNameEvent()"
                        ></el-input>
                    </el-form-item>
                    <br/>
                    <el-form-item label="民宿地址" prop="region">
                        <el-input
                                v-model="ruleForm.region"
                                style="width: 70%"
                                @change="changeRegionEvent()"
                        ></el-input>
                    </el-form-item>
                    <br/>
                    <el-form-item label="客人容量" prop="clientNum">
                        <el-input
                                v-model="ruleForm.clientNum"
                                style="width: 70%"
                                type="number"
                                @change="changeClinetEvent()"
                        ></el-input>
                    </el-form-item>
                    <br/>

                    <el-form-item label="客床数量" prop="bedNum">
                        <el-input
                                v-model="ruleForm.bedNum"
                                style="width: 70%"
                                type="number"
                                @change="changeBedEvent()"
                        ></el-input>
                    </el-form-item>
                    <br/>


                    <el-form-item label="房间面积" prop="Area">
                        <el-input
                                type="number"
                                :rows="2"
                                placeholder="请输入内容"
                                v-model="ruleForm.area"
                                style="width: 70%"
                                show-word-limit
                                @change="changeAreaEvent()"
                        ></el-input>
                    </el-form-item>
                    <el-form-item label="房间图片" prop="Pic">
                        <input type="file" id="image" @change="handleUpload()" accept="image/jpg,image/jpeg,image/png">
                    </el-form-item>


                </el-col>
                <el-col :span="11">


                    <el-form-item label="整套价格" prop="price">
                        <el-input
                                type="number"
                                :rows="2"
                                placeholder="请输入内容"
                                v-model="ruleForm.price"
                                style="width: 70%"
                                show-word-limit
                                @change="changePriceEvent()"
                        >
                        </el-input>
                    </el-form-item>


                    <el-form-item label="房间简介" prop="desc">
                        <el-input
                                type="textarea"
                                :rows="2"
                                placeholder="请输入内容"
                                v-model="ruleForm.desc"
                                style="width: 70%"
                                maxlength="100"
                                show-word-limit
                                @change="changeDescEvent()"
                        >
                        </el-input>
                    </el-form-item>
                    <el-form-item label="设施情况" prop="equipment">
                        <el-radio-group
                                v-model="ruleForm.equipment"
                                @change="changeEquipment()"
                        >
                            <el-radio label="店内有WIFI"></el-radio>
                            <el-radio label="店内无WIFI"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <br/>
                    <el-form-item label="周边情况" prop="surrounding">
                        <el-radio-group
                                v-model="ruleForm.surrounding"
                                @change="changeSurrounding()"
                        >
                            <el-radio label="房间正临街"></el-radio>
                            <el-radio label="房间不临街"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <!-- <p>参考图片</p>
                          <el-upload action="#" list-type="picture-card" :auto-upload="false">
                            <i slot="default" class="el-icon-plus"></i>
                            <div slot="file" slot-scope="{ file }" style="width=30px">
                              <img
                                      class="el-upload-list__item-thumbnail"
                                      :src="file.url"
                                      alt=""
                              />
                              <span class="el-upload-list__item-actions">
                        <span
                                class="el-upload-list__item-preview"
                                @click="handlePictureCardPreview(file)"
                        >
                          <i class="el-icon-zoom-in"></i>
                        </span>
                        <span
                                v-if="!disabled"
                                class="el-upload-list__item-delete"
                                @click="handleDownload(file)"
                        >
                          <i class="el-icon-download"></i>
                        </span>
                        <span
                                v-if="!disabled"
                                class="el-upload-list__item-delete"
                                @click="handleRemove(file)"
                        >
                          <i class="el-icon-delete"></i>
                        </span>
                      </span>
                            </div>
                          </el-upload>
                          <el-dialog :visible.sync="dialogVisible">
                            <img width="100%" :src="dialogImageUrl" alt="" />
                          </el-dialog> -->
                    <br/>
                    <el-button
                            type="primarySigle"
                            @click="submitForm('ruleForm', 'hotelSingleAppl')"
                    >创建单间
                    </el-button
                    >
                    <el-button
                            type="primaryMulti"
                            @click="submitForm('ruleForm', 'hotelMultiApply')"
                    >创建套间
                    </el-button
                    >
                </el-col>
            </el-row>
        </el-form>
    </div>
</template>


<script>
    export default {
        name: "homeMain",
        created() {
            console.log("...pageB...");
            console.log(this.$route);
        },
        data() {
            return {
                dialogImageUrl: "",
                dialogVisible: false,
                disabled: false,
                active: 0,
                ruleForm: {
                    name: "",
                    region: "",
                    clientNum: 0,
                    bedNum: 0,
                    desc: "",
                    area: 0,
                    pic: "",
                    price: 0,
                    dialogImageUrl: "",
                    dialogVisible: false,
                    disabled: false,
                    resource: "",
                    equipment: "",
                    surrounding: "",
                },
                //   ruleForm: {
                //     name: "",
                //     region: "",
                //     clientNum: "",
                //     bedNum: "",
                //     desc: "",
                //     // delivery: false,
                //     // type: [],
                //     dialogImageUrl: "",
                //     dialogVisible: false,
                //     disabled: false,
                //     resource: "",
                //     equipment: "",
                //     surrounding: "",
                //   },

                rules: {
                    name: [
                        {required: true, message: "请输入简介", trigger: "blur"},
                        {
                            min: 3,
                            max: 50,
                            message: "长度在 3 到 50 个字符",
                            trigger: "blur",
                        },
                    ],
                    region: [
                        {required: true, message: "请输入所在地址", trigger: "blur"},
                    ],

                    area: [
                        {required: true, message: "请输入房间面积大小", trigger: "blur"},
                    ],

                    clientNum: [
                        {required: true, message: "请输入可入住的人数", trigger: "blur"},
                        {min: 1, max: 50, message: "请输入可入住人数", trigger: "blur"},
                    ],

                    bedNum: [
                        {required: true, message: "请输入可住人的床数", trigger: "blur"},
                    ],
                    desc: [{required: true, message: "请填写活动形式", trigger: "blur"}],
                    resource: [
                        {required: true, message: "请选择活动资源", trigger: "change"},
                    ],

                    price: [
                        {required: true, message: "请选择活动资源", trigger: "change"},
                    ],

                    surrounding: [
                        {required: true, message: "请选择周边资源", trigger: "change"},
                    ],

                    equipment: [
                        {required: true, message: "请选择设备资源", trigger: "change"},
                    ],
                },
            };
        },
        methods: {
            next() {
                if (this.active++ > 2) this.active = 0;
            },
            submitForm(formName, type) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        localStorage.setItem("ruleForm", JSON.stringify(this.ruleForm));
                        if (type === "hotelSingleAppl") {
                            this.$router.push("/singleRoomApply");
                        } else {
                            this.$router.push("/hotelMultiApply");
                        }
                    } else {
                        console.log("error submit!!");
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            handleRemove(file) {
                console.log(file);
            },
            handlePictureCardPreview(file) {
                this.dialogImageUrl = file.url;
                this.dialogVisible = true;
            },
            handleDownload(file) {
                console.log(file);
            },
            changeNameEvent() {
                console.log(this.ruleForm.name);
            },
            changeRegionEvent() {
                console.log(this.ruleForm.region);
            },
            changeClinetEvent() {
                console.log(this.ruleForm.clientNum);
            },
            changeBedEvent() {
                console.log(this.ruleForm.bedNum);
            },
            changeDescEvent() {
                console.log(this.ruleForm.desc);
            },
            changeEquipment() {
                console.log(this.ruleForm.equipment);
            },
            changeSurrounding() {
                console.log(this.ruleForm.surrounding);
            },
            changeAreaEvent() {
                console.log(this.ruleForm.area);
            },
            changePriceEvent() {
                console.log(this.ruleForm.price);
            },
            handleUpload() {
                let files = document.getElementById('image').files[0]
                let reader = new FileReader();
                reader.readAsDataURL(files)
                reader.onload = e => {
                    this.ruleForm.pic = e.target.result;
                    //console.log(imgFile)
                    //console.log(faceBase64)
                }
            }
        },
    };
</script>

<style>
    .el-row {
        margin-bottom: 20px;
    }

    .el-col {
        border-radius: 4px;
    }

    .bg-purple-dark {
        background: #99a9bf;
    }

    .bg-purple {
        background: #d3dce6;
    }

    .bg-purple-light {
        background: #e5e9f2;
    }

    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }

    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>
