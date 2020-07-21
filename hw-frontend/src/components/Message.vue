<template>
  <div>
    <div id="title1">留言</div>
    <div id="line"></div>
    <div id="enter_msg" style="width:750px">
      <div style="margin:10px 5px;">写下你的留言</div>
      <el-input style="width:500px" v-model="newMsg.title" maxlength="10" show-word-limit placeholder="请输入标题">
      </el-input>

      <el-input style="width:200px" v-model="newMsg.name" maxlength="5" show-word-limit placeholder="请输入你的昵称">
      </el-input>
      <el-input style="width:700px;margin:10px 0;" type="textarea" :rows="2" :autosize="{ minRows: 4, maxRows: 8}"
        placeholder="请输入内容" v-model="newMsg.content">
      </el-input>
      <el-row>
        <el-button @click="submitMsg" style="float:right;margin:0 50px;">提交</el-button>
      </el-row>
    </div>
    <div class="msg_list">
      <div id="line" style="margin-bottom: 40px;"></div>
      <el-card style="margin-bottom:30px" v-for="item in msgs" :key="item._id" :body-style="{ padding: '0px' }" class="msg_item">
        <div class="msg_line_1">
          {{ item.title}}
        </div>
        <div class="msg_line_2_2">
          <i class="icon icon-font icon-account-fill"  style="font-size:20px"></i>
          <div style="font-size:17px;margin-left:5px">{{item.name}}</div>
        </div>
        <div class="msg__ct">
          {{item.content}}
        </div>
        <div id="work_kudos">
          <i class="icon icon-font " :class="activeLike === 'true'?'icon-aixin1' : 'icon-aixin'" @click="changeLike"></i>
          <div id="kudos_num">{{item.kudos}}</div>
        </div>
      </el-card>
    </div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        newMsg: {
          title: '',
          name: '',
          content: '',
          kudos: 0
        },
        activeLike:false,
        activeFold:false,


      }
    },
    methods: {
      submitMsg() {
        this.$store.dispatch('addMsg', {
          msg: this.newMsg
        })
        location.reload();
      },
      changeLike(){
          this.activeLike='true'
      }
    },
    computed: {
      msgs() {
        return this.$store.getters.allMsgs;
      }
    },
    created() {
      this.$store.dispatch('allMsgs');
    },
  }

</script>
<style>
  .msg_list {
    padding: 0 30px;
  }

  #title1 {
    font-size: 25px;
    text-decoration: solid;
  }

  #line {
    height: 1px;
    background: #ddd;
    margin: 15px 0;
  }

  #enter_msg {
    margin: 50px 30px;
  }

  .msg_line_2_2 {
    display: flex;
    padding: 15px 0;
  }

  .msg_item {
    padding: 20px;
  }

  .msg_line_1 {
    font-size: 20px;
  }

  .msg_line_1 img {
    width: 40px;
    border-radius: 20px;
  }

  #work_kudos {
    float: right;
    background: #fff;
    padding: 5px 6px;
    border-radius: 20px;
    font-size: 11px;
    color: #999;
    line-height: 13px;
    display: flex;
    justify-content: center;
    width: fit-content;
    border: 1px solid #fad4d3;
    margin: 5px 0;
    height: fit-content;
  }

</style>
