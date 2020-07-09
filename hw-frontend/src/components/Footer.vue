<template>
    <div id="foot">
        <el-row :gutter="24" type="flex" justify="center">
            <el-col :span="8">
                <div class="footerSection1">
                    <a href="#" class="footerLink">关于活动</a>
                    <a href="#" class="footerLink">最新消息</a>
                    <a href="#" class="footerLink">联系管理</a>
                    <a href="#" class="footerLink">知识产权声明</a>
                    <a href="#" class="footerLink">问题中心</a>
                </div>
            </el-col>
            <el-col :span="6">
                <div class="footerSection1">
                    <div class="footerText">活动讨论QQ群：324553884738    12324432233</div>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="24" type="flex" justify="center">
            <el-col :span="8">
                <div class="footerSection">
                    <div class="footerText">违法或不良信息举报中心</div>
                </div>
            </el-col>
            <el-col :span="6">
                <a>开启手机版</a>     
            </el-col>
        </el-row>
        <el-row :gutter="24" type="flex" justify="center">
            <el-col :span="8">
                <div class="footerSection">
                    <div class="footerText"><div class="footerText2">中国互联网违法或不良信息举报中心</div></div>
                </div>
            </el-col>
            <el-col :span="6">     
            </el-col>
        </el-row>
        <el-row :gutter="24" type="flex" justify="center">
            <el-col :span="8">
                <div class="footerSection">
                    <div class="footerText"><a class="footerLink2">前往举报</a></div>
                </div>
            </el-col>
            <el-col :span="6"> 
                    
            </el-col>
        </el-row>

    </div>

</template>

<script>

</script>
<style scoped>
    #foot{
        color:white;
        font-size:11px;
        
    }

    #foot .footerLink{
        text-decoration:none;
        color:white;
        margin:0 8px 0 0;
    }

    .footerSection1{
        margin-bottom:15px;
    }

    .footerSection{
        margin-bottom:5px;
    }

    .footerText2{
        color:#ddd;
        font-size:10px;
    }

    .footerLink2{
        font-size:10px;
        border: 1px solid white;
        padding:2px 4px;
        border-radius:10px;
    }
</style>