<template>
  <div>
    <div id="title1"><i class="el-icon-search"></i> 您的搜索结果如下</div>
    <div id="line"></div>
    <el-row :gutter="24" type="flex" justify="space-between">
      <el-col :span="8">
        <el-radio-group v-model="radio" fill="#ffab11" @change="radioChange">
          <el-radio-button class="work-select-item" label="1">文区</el-radio-button>
          <el-radio-button class="work-select-item" label="2">图区</el-radio-button>
          <el-radio-button class="work-select-item" label="3">视频区</el-radio-button>
        </el-radio-group>
      </el-col>
    </el-row>
    <div class="search_results">
      <div v-if="select_work==1">
        <div class="result_item" v-for="item in 10" :key="item">
          <div style="width:5%;text-align:center"> {{item}}</div>
          <div style="width:80%">
            <div>from name</div>
            <div>owner</div>
          </div>
          <div style="width:10%">
            <div id="work_kudos">
              <i class="icon icon-font icon-aixin1 aixin_fill"></i>
              <div id="kudos_num">1</div>
            </div>
          </div>
        </div>
      </div>

      <div v-else-if="select_work==2">
        <el-row :gutter="24">
          <el-col :span="8" v-for="img in 10" :key="img">
            <div style="marginBottom:30px">
              <el-card :body-style="{ padding: '0px' }">
                <img :src="img" class="img_image">
                <div style="padding: 14px;">
                  <span>{{img}}</span>
                  <div id="work_kudos">
                    <i class="icon icon-font icon-aixin1 aixin_fill"></i>
                    <div id="kudos_num">{{ img}}</div>
                  </div>
                  <div class="bottom clearfix">
                    <div class="author_info">
                      <i class="icon icon-font icon-account-fill" style="font-size:20px"></i>
                      <span>{{ img }}</span>
                    </div>
                  </div>
                </div>
              </el-card>
            </div>

          </el-col>
        </el-row>
      </div>

      <div v-else>
        <el-row :gutter="24">
          <el-col :span="8" v-for="item in 10" :key="item" style="margin:20px 0;">
            <el-card :body-style="{ padding: '0px' }" class="video_commend_item">
              <img :src="item" class="cvideo_image">
              <div class="video_commend_info">
                <div class="video_commend_title single_line">
                  <a :href="'https://www.bilibili.com/video/'+item" target="_blank">{{item}}</a>
                </div>
                <div class="video_info_2">
                  <div class="video_commend_artist">
                    <i class="icon icon-font icon-account-fill" style="font-size:20px"></i>
                    {{item}}</div>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        radio: '1',
        value: 'time',
        select_work: 1,
        result: []
      }
    },
    methods: {
      radioChange(value) {
        this.select_work = value;
        // if(value==='3')
        //     this.getVideoMsg();
      },

    },
    created() {
      this.$store.dispatch('findImgs', {
        kw: this.$route.query.kw
      });
      // this.$store.dispatch('allFics');
      // this.$store.dispatch('allVideos');
    },
    computed: {
      imgs() {
        return this.$store.getters.allImgs;
      },
      // fics() {
      //   return this.$store.getters.allFics;
      // },
      // videos() {
      //   // this.getVideoMsg();
      //   return this.$store.getters.allVideos;
      // }
    },
  }

</script>
<style>
  #title1 {
    font-size: 25px;
    text-decoration: solid;
  }

  #line {
    height: 1px;
    background: #ddd;
    margin: 15px 0;
  }

  .search_results {
    margin: 50px 20px;
  }

  .result_item {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    display: flex;
    align-items: center;
    padding: 20px 0;
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
