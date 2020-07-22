<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="管理文章" name="fic">
        <div>
          <router-link to='/add_fic'>添加文章</router-link>
        </div>
        <div>已有文章</div>
      </el-tab-pane>
      <el-tab-pane label="管理图片" name="img">
        <el-form class="img_form" :model="img_form" label-width="80px">
          <el-form-item label="名字">
            <el-input class="img_input" v-model="img_form.name"></el-input>
          </el-form-item>
          <el-form-item label="作者">
            <el-input class="img_input" v-model="img_form.artist"></el-input>
          </el-form-item>
          <el-form-item label="url">
            <el-input v-model="img_form.url"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click="submitImg">添加</el-button>
          </el-form-item>
        </el-form>

        <div class="img_list">
          <el-row :guter="20" style="padding:0 20px">
            <el-col :span="6">名字</el-col>
            <el-col :span="6">作者</el-col>
            <el-col :span="6">图片</el-col>
            <el-col :span="6" style="text-align:center">操作</el-col>
          </el-row>
          <div class="img_item" v-for="img in imgs" :key="img._id">
            <el-row :gutter="20">
              <el-col :span="6">{{img.name}}</el-col>
              <el-col :span="6">{{img.artist}}</el-col>
              <el-col :span="6"><img class="img" :src="img.url" alt=""></el-col>
              <el-col :span="6" style="text-align:center">
                <el-button @click="updateImg(img._id)" plain>edit</el-button>
                <el-button @click="deleteImg(img._id)" type="warning" plain>delete</el-button>
              </el-col>
            </el-row>
          </div>
        </div>


      </el-tab-pane>
      <el-tab-pane label="管理视频" name="video">管理视频</el-tab-pane>
      <el-tab-pane label="管理版务" name="note">管理版务</el-tab-pane>
      <el-tab-pane label="管理留言" name="msg">管理留言</el-tab-pane>
    </el-tabs>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        activeName: 'img',
        img_form: {
          name: '',
          artist: '',
          url: ''
        }
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      submitImg() {

      },
      updateImg(key) {
        console.log(key)
      },
      deleteImg() {

      }
    },
    computed: {
      imgs() {
        return this.$store.getters.allImgs;
      },
    },
    created() {
      this.$store.dispatch('allImgs');
    },
  }

</script>

<style>
  .img_form {
    border: 1px solid #ddd;
    margin: 20px 0;
    padding: 20px;
    border-radius: 20px;
  }

  .img_input {
    width: 200px;
  }

  .img_list {
    background: white;
    padding: 10px 20px;
    border-radius: 20px;
  }

  .img_item {
    margin: 20px 0;
    border-top: 1px solid #ddd;
    padding: 10px 20px;
  }

  .img {
    width: 50px;
    height: 50px;
    display: block;
    -o-object-fit: cover;
    object-fit: cover;
  }

</style>
