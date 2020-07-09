<template>
    <div id="workpage">
        <div id="title1">作品库</div>
        <div id="line"></div>
        <div id="work-container">
            <el-row :gutter="24" type="flex" justify="space-between">
                <el-col :span="8">
                    <el-radio-group v-model="radio" fill="#ffab11" @change="radioChange">
                        <el-radio-button class="work-select-item" label="1">文区</el-radio-button>
                        <el-radio-button class="work-select-item" label="2">图区</el-radio-button>
                        <el-radio-button class="work-select-item" label="3">视频区</el-radio-button>
                    </el-radio-group>
                </el-col>
                <el-col :span="4">
                    <el-select v-model="value"  @change="selectChange">
                        <el-option v-for="item in selectItems" :key="item.value" :value="item.value"
                            :label="item.label"></el-option>
                    </el-select>
                </el-col>
            </el-row>

            <!--作品列表-->
            <div class="work_list">
                <!--文章列表-->
                <div v-if="select_work==1">
                    <el-card id="work_item" v-for="item in 10" :key="item">
                        <div id="info">
                            <div id="work_name">圣诞愿望清单{{item}}</div>
                            <div id="work_author">苏塞克斯</div>
                            <div id="work_kudos">
                                <img id="kudos" src="../assets/heart.png" alt="">
                                <div id="kudos_num">324</div>
                            </div>
                            <div class="work_abstract two_line">
                                Sherlock is a British crime television series based on Sir Arthur Conan Doyle's Sherlock Holmes detective stories. Created by Steven Moffat and Mark Gatiss, it stars Benedict Cumberbatch as Sherlock Holmes and Martin Freeman as Doctor John Watson.
                            </div>
                        </div>
                    </el-card>
                </div>
                <!--图片列表-->
                <div v-else-if="select_work==2">
                    <el-row :gutter="24">
                        <el-col :span="8" v-for="o in 12" :key="o">
                            <div style="marginBottom:30px">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img src="../assets/221b.jpg" class="image">
                                    <div style="padding: 14px;">
                                        <span>221b {{o}}</span>
                                        <div id="work_kudos">
                                            <img id="kudos" src="../assets/heart.png" alt="">
                                            <div id="kudos_num">324</div>
                                        </div>
                                        <div class="bottom clearfix">
                                            <div class="author_info">
                                                <img src="../assets/logo.png" alt="">
                                                <span>name</span>
                                            </div>
                                        </div>
                                    </div>
                                </el-card>
                            </div>
                            
                        </el-col>
                    </el-row>
                </div>
                <!--视频列表-->
                <div v-else>
                    <el-card id="work_item" v-for="item in 10" :key="item">
                        <el-row class="video_item">
                            <el-col :span="6">
                                <div id="video_img">
                                    <img :src="require('../assets/221b.jpg')" class="image">
                                </div>
                            </el-col>
                            <el-col :span="17">
                                <div id="info">
                                    <div id="work_name" class="single_line">圣诞愿望清单 {{item}}</div>
                                    <div id="work_author">苏塞克斯</div>
                                    <div id="work_kudos">
                                        <img id="kudos" src="../assets/heart.png" alt="">
                                        <div id="kudos_num">2323</div>
                                    </div>
                                    <div class="work_abstract two_line">
                                        Sherlock is a British crime television series based on Sir Arthur Conan Doyle's Sherlock Holmes detective stories.
                                    </div>
                                </div>
                            </el-col>
                        </el-row>
                    </el-card>
                </div>
            </div>


            <div class="page_count">
                <el-pagination
                    background
                    :page-size='10' 
                    :hide-on-single-page="true"
                    layout="prev, pager, next" 
                    :total="50"
                    @current-change="pageChange">
                </el-pagination>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                radio: '1',
                selectItems: [{
                        value: "time",
                        label: "最新上传"
                    },
                    {
                        value: 'kudos',
                        label: "热度最高"
                    },
                ],
                value: 'time',
                select_work: 1,
                loading:false,

            }
        },
        methods: {
            radioChange(value) {
                this.select_work = value;
                console.log(value);
            },
            selectChange(val) {
                console.log(val);
            },
            pageChange(val){
                console.log(val);
            },
            fetchData(){
                this.loading=true;
                // error  'getPost' is not defined  no-undef
                // getPost(this.$route.query,(err,post)=>{
                //     if(err){
                //         console.log(err)
                //     }else{
                //         console.log(post)
                //     }
                // })
                this.select_work=this.$route.query.select_work;
                this.radio=this.select_work

            }
        },
        created() {
            this.fetchData()
        },
        watch: {
            select_work(sw) {
                this.select_work = sw;
            },
            '$route': {
                handler: 'fetchData',
                immediate: true
            }
        },
        mounted() {
            // this.select_work=this.@route.query.select_work;
        },
    }
</script>

<style>
    .video_item{
        display:flex;
        align-items:center;
    }
    .two_line{
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
    .author_info{
        display: flex;
        justify-content: right;
        border-top: 1px solid;
        padding-top: 10px;
    }

    .author_info>img{
        width:20px;
        height:20px;
        margin-right:5px;
        border-radius:20px;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
   }
    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    
    .clearfix:after {
        clear: both
    }


    #kudos_num{
        margin:0 0 0 2px;
        display:inline-block;
        width: fit-content;
    }

    
    .page_count{
        display: flex;
        justify-content: center;
    }

    #workpage {
        padding: 30px 20px;
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

    .work-select-item {
        margin-right: 20px;
    }

    .work-select-item span {
        border: none;
        border-radius: 20px !important;
    }

    /****
    .el-select-dropdown__item.selected {
         color: #ffab11 !important;
     }
     */ 

    .work_list {
        margin: 40px 10px;

    }

    #work_item {
        margin-bottom: 20px;
        border-radius: 20px;
        padding: 5px 10px;
    }

    #video_img {
        width: 240px;
        background: #fff;
        display: inline-block;
        border-radius: 20px;
    }

    #info {
        display: inline-block;
        padding: 0 30px;
    }

    #info>div {
        margin: 10px 0;
    }

    #work_name {
        font-size: 25px;
        text-decoration: solid;
    }

    #work_kudos {
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
        height:fit-content;
    }

    #kudos {
        display: inline;
        width: 13px;
        height: 13px;
        line-height: 13px;
    }

    #work_page{
        word-wrap: break-word;
    }
</style>