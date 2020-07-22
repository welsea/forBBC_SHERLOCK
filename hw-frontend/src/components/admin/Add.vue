<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="管理文章" name="fic">
        <div>
            <div>添加内容</div>
            <div>
                
            </div>
        </div>
      
      </el-tab-pane>
      <el-tab-pane label="管理图片" name="img">管理图片</el-tab-pane>
      <el-tab-pane label="管理视频" name="video">管理视频</el-tab-pane>
      <el-tab-pane label="管理版务" name="note">管理版务</el-tab-pane>
      <el-tab-pane label="管理留言" name="msg">管理留言</el-tab-pane>
    </el-tabs>

  </div>
</template>
<script>
    export default{
        data() {
            return {
                activeName:'fic'
            }
        },
        methods: {
            handleClick(tab,event){
                console.log(tab, event);
            }
        },
    }

</script>
