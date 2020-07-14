const mongoose = require('mongoose');

//schema
var ficSchema= new mongoose.Schema({
    name:String,
    author:String,
    summary:String,
    content:String,
    kudos:Number
})

var ficModel= mongoose.model('fic', ficSchema);
module.exports=ficModel;