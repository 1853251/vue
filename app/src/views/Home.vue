<template>
  <div class="home">
    <div class="home-title">
      <el-card shadow="always">
        <div class="title-msg">工作台</div>
        <el-row>
          <el-col :span="2" :offset="1">
            <el-avatar :size="60" :src="avatar"></el-avatar>
          </el-col>
          <el-col :span="4">
            <div class="greetings">欢迎来到民宿预订平台</div>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>

</template>

<script>
import { ref, reactive, defineComponent, toRefs, onMounted, onUnmounted, inject } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name:'Home',
  //接收父组件的数据
  props:{

  },
  //定义子组件
  components:{

  },
  //组件创建的过程
  setup(props,ctx){
    const router = useRouter()
    const state = reactive({
      avatar:require('@/assets/avatar.jpeg')
    })
    return{
      name,
      ...toRefs(state)
    }
  },
})
</script>

<style lang="less">
@import "src/common/style/common";
.chartsArea{
  width: 100vw;
  height: 80vh;
}
</style>
