const mongoose = require('mongoose');

//schema
var ficsSchema= new mongoose.Schema({
    title:String,
    content:String,
    author:String,
    kudos:Number,
    summary:String
})

var ficsModel= mongoose.model('fics', ficsSchema);
module.exports=ficsModel;